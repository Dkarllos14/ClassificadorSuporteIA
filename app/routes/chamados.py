from fastapi import APIRouter, HTTPException, Query
from google import genai

from app.core.config import GEMINI_API_KEY, MODEL_NAME
from app.models.schemas import (
    ChamadoEntrada,
    ChamadoSaida,
    LoteChamadosEntrada,
    ChamadoBanco,
)
from app.services.classificador import classificar_chamado
from app.services.chamados_service import (
    salvar_chamado,
    listar_chamados,
    buscar_chamado_por_id,
)

router = APIRouter()

client = None
if GEMINI_API_KEY:
    client = genai.Client(api_key=GEMINI_API_KEY)


@router.get("/health")
def health():
    return {"status": "ok"}


@router.post("/classificar", response_model=ChamadoSaida)
def classificar(chamado: ChamadoEntrada):
    if client is None:
        raise HTTPException(status_code=500, detail="GEMINI_API_KEY não configurada.")

    try:
        resultado = classificar_chamado(
            client=client,
            model_name=MODEL_NAME,
            assunto=chamado.assunto,
            descricao=chamado.descricao,
        )

        salvar_chamado(
            assunto=chamado.assunto,
            descricao=chamado.descricao,
            categoria=resultado["categoria"],
            prioridade=resultado["prioridade"],
            impacto=resultado["impacto"],
            solucao=resultado["solucao"],
        )

        return resultado

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao classificar chamado: {str(e)}")


@router.post("/classificar-lote", response_model=list[ChamadoSaida])
def classificar_lote(lote: LoteChamadosEntrada):
    if client is None:
        raise HTTPException(status_code=500, detail="GEMINI_API_KEY não configurada.")

    try:
        resultados = []

        for chamado in lote.chamados:
            resultado = classificar_chamado(
                client=client,
                model_name=MODEL_NAME,
                assunto=chamado.assunto,
                descricao=chamado.descricao,
            )

            salvar_chamado(
                assunto=chamado.assunto,
                descricao=chamado.descricao,
                categoria=resultado["categoria"],
                prioridade=resultado["prioridade"],
                impacto=resultado["impacto"],
                solucao=resultado["solucao"],
            )

            resultados.append(resultado)

        return resultados

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao classificar lote de chamados: {str(e)}")


@router.get("/chamados", response_model=list[ChamadoBanco])
def get_chamados(
    categoria: str | None = Query(default=None),
    prioridade: str | None = Query(default=None),
    limit: int = Query(default=10, ge=1, le=100),
    offset: int = Query(default=0, ge=0),
):
    try:
        return listar_chamados(
            categoria=categoria,
            prioridade=prioridade,
            limit=limit,
            offset=offset,
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao listar chamados: {str(e)}")


@router.get("/chamados/{chamado_id}", response_model=ChamadoBanco)
def get_chamado_por_id(chamado_id: int):
    try:
        chamado = buscar_chamado_por_id(chamado_id)

        if chamado is None:
            raise HTTPException(status_code=404, detail="Chamado não encontrado.")

        return chamado

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao buscar chamado: {str(e)}")