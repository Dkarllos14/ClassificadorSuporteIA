from fastapi import FastAPI
from app.routes.chamados import router as chamados_router
from app.core.database import init_db

app = FastAPI(title="ClassificadorSuporteIA")


@app.on_event("startup")
def startup():
    init_db()


app.include_router(chamados_router)