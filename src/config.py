import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("GOOGLE_API_KEY")

MODELO_GEMINI = "gemini-2.5-flash"

CAMINHO_CSV = r"C:\ClassificadorSuporteIA\data\chamados.csv"
CAMINHO_SAIDA = r"C:\ClassificadorSuporteIA\data\chamados_finalizados.csv"