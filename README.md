# 🚀 ClassificadorSuporteIA

Sistema de classificação inteligente de chamados de suporte utilizando Inteligência Artificial (Gemini API) e FastAPI.

---

## 📌 Sobre o Projeto

O **ClassificadorSuporteIA** é uma API que recebe chamados de suporte técnico e utiliza IA para classificá-los automaticamente em:

- Categoria
- Prioridade
- Impacto
- Solução sugerida

Além disso, o sistema armazena os chamados em banco de dados SQLite e permite consultas com filtros e paginação.

---

## 🧠 Tecnologias Utilizadas

- Python 3.13
- FastAPI
- Google Gemini API
- SQLite
- Pydantic
- Uvicorn

---

## 📂 Estrutura do Projeto

ClassificadorSuporteIA
│
├── app
│ ├── core # Configuração e banco de dados
│ ├── models # Schemas Pydantic
│ ├── routes # Endpoints da API
│ ├── services # Lógica de negócio
│ └── main.py # Inicialização da API
│
├── data # Arquivos CSV (opcional)
├── scripts # Scripts auxiliares
├── tests # Testes
│
├── database.db # Banco SQLite
├── .env # Variáveis de ambiente
├── requirements.txt
└── README.md


---

## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd ClassificadorSuporteIA


2️⃣ Criar ambiente virtual

python -m venv venv
venv\Scripts\activate

5️⃣ Instalar dependências
GOOGLE_API_KEY=SUA_CHAVE_AQUI

7️⃣ Executar o projeto
python src/main.py


📌 Possíveis melhorias futuras

Dashboard de análise de chamados

API REST para classificação de tickets

Integração com sistemas de Service Desk

Treinamento de modelo especializado

Análise estatística dos chamados

Detecção automática de incidentes


👨‍💻 Autor

Dayson Carlos de Lima

Graduado em Análise e Desenvolvimento de Sistemas.

Profissional com experiência em infraestrutura de TI, com foco em:

Automações com Python

Análise de dados

Inteligência Artificial aplicada

Infraestrutura de TI

🔗 LinkedIn
https://www.linkedin.com/in/dayson-carlos-205911246