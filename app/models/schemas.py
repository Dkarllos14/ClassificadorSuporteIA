from pydantic import BaseModel, Field
from typing import List


class ChamadoEntrada(BaseModel):
    assunto: str
    descricao: str


class ChamadoSaida(BaseModel):
    categoria: str
    prioridade: str
    impacto: str
    solucao: str


class LoteChamadosEntrada(BaseModel):
    chamados: List[ChamadoEntrada] = Field(..., min_length=1)


class ChamadoBanco(BaseModel):
    id: int
    assunto: str
    descricao: str
    categoria: str
    prioridade: str
    impacto: str
    solucao: str
    criado_em: str