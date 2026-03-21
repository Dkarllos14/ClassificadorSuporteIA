# 🚀 ClassificadorSuporteIA

![Python](https://img.shields.io/badge/Python-3.13-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Framework-green)
![SQLite](https://img.shields.io/badge/Database-SQLite-lightgrey)
![AI](https://img.shields.io/badge/AI-Gemini-orange)
![Status](https://img.shields.io/badge/Status-MVP-success)

API inteligente para classificação automática de chamados de suporte utilizando Inteligência Artificial (Google Gemini).

O sistema é capaz de analisar descrições de problemas e classificá-los automaticamente em categoria, prioridade e impacto, além de sugerir soluções, reduzindo o tempo de triagem manual e aumentando a eficiência operacional.

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

```text
ClassificadorSuporteIA
│
├── app
│   ├── core          # Configuração e banco de dados
│   ├── models        # Schemas Pydantic
│   ├── routes        # Endpoints da API
│   ├── services      # Lógica de negócio
│   └── main.py       # Inicialização da API
│
├── data              # Arquivos CSV (opcional)
├── scripts           # Scripts auxiliares
├── tests             # Testes
│
├── database.db       # Banco SQLite
├── .env              # Variáveis de ambiente
├── requirements.txt
└── README.md

⚙️ Como Executar o Projeto

1️⃣ Clonar o repositório
git clone <URL_DO_REPOSITORIO>
cd ClassificadorSuporteIA


2️⃣ Criar ambiente virtual

python -m venv venv
venv\Scripts\activate

3️⃣ Instalar dependências
pip install -r requirements.txt

4️⃣ Configurar variáveis de ambiente

Crie um arquivo .env:

GEMINI_API_KEY=sua_chave_aqui
MODEL_NAME=gemini-2.5-flash

5️⃣ Executar a API
uvicorn app.main:app --reload --port 8001


📡 Endpoints da API
🔹 Health Check
GET /health
🔹 Classificar chamado
POST /classificar

Exemplo de entrada:

{
  "assunto": "Erro de login",
  "descricao": "Usuário não consegue acessar o sistema"
}


🔹 Classificar múltiplos chamados (Batch)
POST /classificar-lote

Exemplo:

{
  "chamados": [
    {
      "assunto": "Erro de login",
      "descricao": "Usuário não consegue acessar o sistema"
    },
    {
      "assunto": "Internet lenta",
      "descricao": "Usuários relatam lentidão"
    }
  ]
}


🔹 Listar chamados

GET /chamados

Filtros disponíveis:

GET /chamados?categoria=ACESSO
GET /chamados?prioridade=ALTA
GET /chamados?categoria=ACESSO&prioridade=ALTA


🔹 Paginação

GET /chamados?limit=10&offset=0


🔹 Buscar chamado por ID

GET /chamados/{id}


🗄️ Banco de Dados

O projeto utiliza SQLite, com a tabela chamados.

Campos:

id
assunto
descricao
categoria
prioridade
impacto
solucao
criado_em


🤖 Inteligência Artificial

A classificação é realizada utilizando a API do Google Gemini, com prompts estruturados para garantir:

respostas padronizadas
retorno em JSON
consistência dos dados
💼 Aplicação no Mundo Real

Este projeto pode ser utilizado em:

Service Desk corporativo
Centrais de atendimento
Sistemas de suporte técnico
Automação de triagem de tickets
Plataformas SaaS de atendimento

Reduzindo significativamente o tempo de resposta e eliminando erros humanos na classificação de chamados.


📊 Possíveis Evoluções
Dashboard web (React ou Streamlit)
Autenticação de usuários
Integração com sistemas de tickets (GLPI, ServiceNow)
Deploy em nuvem (Render, Railway, Docker)
Cache de respostas
Processamento paralelo no batch

👨‍💻 Autor

Dayson Carlos de Lima

Graduado em Análise e Desenvolvimento de Sistemas
Profissional com experiência em Infraestrutura de TI e gestão de incidentes
Certificado em Inteligência Artificial pelo Google
Foco em automação, APIs e IA aplicada

🔗 LinkedIn: https://www.linkedin.com/in/dayson-carlos-205911246



📌 Objetivo do Projeto

Demonstrar aplicação prática de:

APIs com FastAPI
Integração com IA
Arquitetura de software
Persistência de dados

⭐ Observação

Este projeto pode ser expandido para um sistema completo de Service Desk Inteligente, com classificação automática e sugestão de resolução de chamados.