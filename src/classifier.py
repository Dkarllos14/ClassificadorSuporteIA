from google import genai
from google.genai import types
from pydantic import BaseModel


class ResultadoChamado(BaseModel):
    categoria: str
    solucao: str


def classificar_chamado(client, modelo, conteudo):

    prompt = f"""
Você é um especialista em suporte técnico.

Classifique o chamado em:
REDES, HARDWARE ou SOFTWARE.

Chamado:
{conteudo}
"""

    response = client.models.generate_content(
        model=modelo,
        contents=prompt,
        config=types.GenerateContentConfig(
            temperature=0,
            response_mime_type="application/json",
            response_schema=ResultadoChamado
        )
    )

    dados = response.parsed

    categoria = dados.categoria.upper()
    solucao = dados.solucao

    return categoria, solucao