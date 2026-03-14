import os
import time
import random
import pandas as pd
from dotenv import load_dotenv
from pydantic import BaseModel
from google import genai
from google.genai import types

# =========================
# 1. Configurações
# =========================
load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")

if not api_key:
    raise ValueError("❌ Erro: Chave API não encontrada no arquivo .env!")

# Não force v1beta sem necessidade.
# Use a SDK de forma padrão.
client = genai.Client(api_key=api_key)

MODELO = "gemini-2.5-flash"

# =========================
# 2. Schema estruturado
# =========================
class ResultadoChamado(BaseModel):
    categoria: str
    solucao: str

def gerar_classificacao(conteudo: str):
    prompt = f"""
Você é um analista de suporte técnico de N1/N2.

Classifique o chamado em apenas uma destas categorias:
- REDES
- HARDWARE
- SOFTWARE

Depois sugira uma solução técnica curta e objetiva.

Chamado:
{conteudo}
""".strip()

    response = client.models.generate_content(
        model=MODELO,
        contents=prompt,
        config=types.GenerateContentConfig(
            temperature=0,
            response_mime_type="application/json",
            response_schema=ResultadoChamado
        )
    )

    # A SDK atual suporta resposta estruturada
    dados = response.parsed

    categoria = (dados.categoria or "").strip().upper()
    solucao = (dados.solucao or "").strip()

    if categoria not in {"REDES", "HARDWARE", "SOFTWARE"}:
        categoria = "OUTROS"

    if not solucao:
        solucao = "Análise manual necessária"

    return categoria, solucao

def processar_suporte_ia():
    print("🚀 Iniciando Automação de Suporte...")

    caminho_csv = r"C:\ClassificadorSuporteIA\data\chamados.csv"
    caminho_saida = r"C:\ClassificadorSuporteIA\data\chamados_finalizados.csv"

    if not os.path.exists(caminho_csv):
        print(f"❌ Erro: Arquivo não encontrado em {caminho_csv}")
        return

    df = pd.read_csv(caminho_csv)

    if df.empty:
        print("⚠️ O arquivo CSV está vazio.")
        return

    colunas_necessarias = {"id", "assunto", "descricao"}
    faltantes = colunas_necessarias - set(df.columns)
    if faltantes:
        print(f"❌ CSV inválido. Faltam colunas: {', '.join(faltantes)}")
        return

    classificacoes = []
    solucoes = []

    for _, linha in df.iterrows():
        chamado_id = linha["id"]
        assunto = str(linha["assunto"])
        descricao = str(linha["descricao"])

        print(f"🔄 Analisando chamado {chamado_id} - {assunto}...")

        conteudo = f"Assunto: {assunto}\nDescrição: {descricao}"

        max_tentativas = 5
        sucesso = False

        for tentativa in range(1, max_tentativas + 1):
            try:
                categoria, solucao = gerar_classificacao(conteudo)

                classificacoes.append(categoria)
                solucoes.append(solucao)

                print(f"✅ Classificado como: {categoria}")
                sucesso = True

                # pequena pausa entre chamadas
                time.sleep(1.5)
                break

            except Exception as e:
                erro = str(e)
                print(f"⚠️ Tentativa {tentativa}/{max_tentativas} falhou no chamado {chamado_id}: {erro}")

                # Retry com backoff em erro de quota
                if "429" in erro or "RESOURCE_EXHAUSTED" in erro:
                    espera = min(2 ** tentativa + random.uniform(0.5, 1.5), 20)
                    print(f"⏳ Aguardando {espera:.1f}s por limite de taxa...")
                    time.sleep(espera)
                    continue

                # 404 normalmente indica modelo inválido/inexistente
                if "404" in erro or "NOT_FOUND" in erro:
                    classificacoes.append("ERRO_MODELO")
                    solucoes.append("Modelo não encontrado ou indisponível")
                    sucesso = True
                    break

                # outros erros
                if tentativa == max_tentativas:
                    classificacoes.append("ERRO")
                    solucoes.append("Verificar logs da API")
                    sucesso = True
                    break

                time.sleep(2)

        if not sucesso:
            classificacoes.append("ERRO")
            solucoes.append("Falha inesperada no processamento")

    df["categoria_ia"] = classificacoes
    df["solucao_sugerida"] = solucoes
    df.to_csv(caminho_saida, index=False, encoding="utf-8-sig")

    print(f"\n🎉 Processo concluído! {len(df)} chamados processados.")
    print(f"📂 Resultado salvo em: {caminho_saida}")

if __name__ == "__main__":
    processar_suporte_ia()