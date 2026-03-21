import os
import time
import random
import pandas as pd
from google import genai

from src.config import API_KEY, MODELO_GEMINI, CAMINHO_CSV, CAMINHO_SAIDA
from src.classifier import classificar_chamado


def processar_suporte_ia():
    print("🚀 Iniciando Automação de Suporte...")

    if not API_KEY:
        print("❌ Erro: Chave API não encontrada no arquivo .env!")
        return

    if not os.path.exists(CAMINHO_CSV):
        print(f"❌ Erro: Arquivo não encontrado em {CAMINHO_CSV}")
        return

    client = genai.Client(api_key=API_KEY)

    df = pd.read_csv(CAMINHO_CSV)

    if df.empty:
        print("⚠️ O arquivo CSV está vazio.")
        return

    colunas_necessarias = {"id", "assunto", "descricao"}
    faltantes = colunas_necessarias - set(df.columns)
    if faltantes:
        print(f"❌ CSV inválido. Faltam colunas: {', '.join(faltantes)}")
        return

    classificacoes = []
    prioridades = []
    impactos = []
    solucoes = []

    for _, linha in df.iterrows():
        chamado_id = linha["id"]
        assunto = str(linha["assunto"])
        descricao = str(linha["descricao"])

        print(f"🔄 Analisando chamado {chamado_id} - {assunto}...")

        conteudo = f"Assunto: {assunto}\nDescrição: {descricao}"
        max_tentativas = 5

        for tentativa in range(1, max_tentativas + 1):
            try:
                categoria, prioridade, impacto, solucao = classificar_chamado(
                    client=client,
                    modelo=MODELO_GEMINI,
                    conteudo=conteudo
                )

                classificacoes.append(categoria)
                prioridades.append(prioridade)
                impactos.append(impacto)
                solucoes.append(solucao)

                print(
                    f"✅ Classificado como: {categoria} | "
                    f"Prioridade: {prioridade} | "
                    f"Impacto: {impacto}"
                )

                time.sleep(1.5)
                break

            except Exception as e:
                erro = str(e)
                print(
                    f"⚠️ Tentativa {tentativa}/{max_tentativas} "
                    f"falhou no chamado {chamado_id}: {erro}"
                )

                if (
                    "API key was reported as leaked" in erro
                    or "403" in erro
                    or "PERMISSION_DENIED" in erro
                ):
                    print(
                        "❌ A API key atual foi bloqueada pelo provedor. "
                        "Gere uma nova chave e atualize o arquivo .env."
                    )
                    return

                elif "429" in erro or "RESOURCE_EXHAUSTED" in erro:
                    espera = min(2 ** tentativa + random.uniform(0.5, 1.5), 20)
                    print(f"⏳ Aguardando {espera:.1f}s por limite de taxa...")
                    time.sleep(espera)
                    continue

                elif "404" in erro or "NOT_FOUND" in erro:
                    classificacoes.append("ERRO_MODELO")
                    prioridades.append("ERRO")
                    impactos.append("ERRO")
                    solucoes.append("Modelo não encontrado ou indisponível")
                    break

                elif tentativa == max_tentativas:
                    classificacoes.append("ERRO")
                    prioridades.append("ERRO")
                    impactos.append("ERRO")
                    solucoes.append("Verificar logs da API")
                    break

                time.sleep(2)

    df["categoria_ia"] = classificacoes
    df["prioridade_ia"] = prioridades
    df["impacto_ia"] = impactos
    df["solucao_sugerida"] = solucoes

    df.to_csv(CAMINHO_SAIDA, index=False, encoding="utf-8-sig")

    print(f"\n🎉 Processo concluído! {len(df)} chamados processados.")
    print(f"📂 Resultado salvo em: {CAMINHO_SAIDA}")


if __name__ == "__main__":
    processar_suporte_ia()