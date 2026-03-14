import os
from dotenv import load_dotenv
from google import genai

load_dotenv()
client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))

print("--- Lista de Modelos Disponíveis para sua Chave ---")
try:
    for model in client.models.list():
        print(f"Nome do Modelo: {model.name}")
except Exception as e:
    print(f"Erro ao listar: {e}")