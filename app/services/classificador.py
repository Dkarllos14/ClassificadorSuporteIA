import json
from google import genai

CATEGORIAS_VALIDAS = {
    "REDE",
    "SOFTWARE",
    "HARDWARE",
    "ACESSO",
    "EMAIL",
    "SEGURANCA",
    "OUTROS",
}

PRIORIDADES_VALIDAS = {
    "BAIXA",
    "MEDIA",
    "ALTA",
    "CRITICA",
}

IMPACTOS_VALIDOS = {
    "BAIXO",
    "MEDIO",
    "ALTO",
}


def montar_prompt(assunto: str, descricao: str) -> str:
    return f"""
Você é um analista especialista em suporte técnico de TI.

Classifique o chamado abaixo e responda somente com JSON válido.
Não use markdown.
Não use bloco de código.
Não use ```json.

Categorias possíveis:
- REDE
- SOFTWARE
- HARDWARE
- ACESSO
- EMAIL
- SEGURANCA
- OUTROS

Prioridades possíveis:
- BAIXA
- MEDIA
- ALTA
- CRITICA

Impactos possíveis:
- BAIXO
- MEDIO
- ALTO

Retorne exatamente neste formato:
{{
  "categoria": "",
  "prioridade": "",
  "impacto": "",
  "solucao": ""
}}

Chamado:
Assunto: {assunto}
Descrição: {descricao}
"""


def limpar_resposta_json(texto: str) -> str:
    texto = texto.strip()

    if texto.startswith("```json"):
        texto = texto[7:].strip()

    if texto.startswith("```"):
        texto = texto[3:].strip()

    if texto.endswith("```"):
        texto = texto[:-3].strip()

    return texto


def validar_resposta(dados: dict) -> dict:
    categoria = str(dados.get("categoria", "OUTROS")).upper()
    prioridade = str(dados.get("prioridade", "MEDIA")).upper()
    impacto = str(dados.get("impacto", "MEDIO")).upper()
    solucao = str(dados.get("solucao", "Sem solução sugerida.")).strip()

    if categoria not in CATEGORIAS_VALIDAS:
        categoria = "OUTROS"

    if prioridade not in PRIORIDADES_VALIDAS:
        prioridade = "MEDIA"

    if impacto not in IMPACTOS_VALIDOS:
        impacto = "MEDIO"

    if not solucao:
        solucao = "Sem solução sugerida."

    return {
        "categoria": categoria,
        "prioridade": prioridade,
        "impacto": impacto,
        "solucao": solucao,
    }


def classificar_chamado(client: genai.Client, model_name: str, assunto: str, descricao: str) -> dict:
    prompt = montar_prompt(assunto, descricao)

    response = client.models.generate_content(
        model=model_name,
        contents=prompt
    )

    texto = response.text.strip()
    texto_limpo = limpar_resposta_json(texto)

    try:
        dados = json.loads(texto_limpo)
    except json.JSONDecodeError:
        dados = {
            "categoria": "OUTROS",
            "prioridade": "MEDIA",
            "impacto": "MEDIO",
            "solucao": texto,
        }

    return validar_resposta(dados)
