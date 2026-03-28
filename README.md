# 🚀 ClassificadorSuporteIA

![Python](https://img.shields.io/badge/Python-3.13-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Framework-green)
![SQLite](https://img.shields.io/badge/Database-SQLite-lightgrey)
![AI](https://img.shields.io/badge/AI-Gemini-orange)
![Status](https://img.shields.io/badge/Status-MVP-success)

## 🌐 Aplicação Completa

- 🖥️ Frontend (Next.js):  
👉 https://classificador-suporte-ia-tpa8.vercel.app/

- ⚙️ API (FastAPI):  
👉 https://classificadorsuporteia.onrender.com

- 📄 Swagger:  
👉 https://classificadorsuporteia.onrender.com/docs

Sistema full stack com Inteligência Artificial para classificação automática de chamados de suporte técnico.

A aplicação permite classificar solicitações automaticamente utilizando IA (Google Gemini), além de fornecer uma interface web para visualização, análise e acompanhamento dos chamados processados.

O projeto simula um ambiente real de Service Desk, automatizando a triagem e auxiliando na tomada de decisão operacional.

---

## 📸 Interface do Sistema

### 🏠 Home (Dashboard)
<img width="627" height="671" alt="README home" src="https://github.com/user-attachments/assets/e53ffb39-63d5-4c24-8c74-aa8c59096b50" />


### 🤖 Classificação de Chamados
<img width="1001" height="532" alt="README classificar" src="https://github.com/user-attachments/assets/bb234922-4c48-4b25-83ba-6f82b7753143" />


### 📂 Histórico de Chamados
<img width="1002" height="665" alt="README historico" src="https://github.com/user-attachments/assets/0bc7743e-55ff-42c9-8785-97c4cb70167a" />

---

## 🏗️ Arquitetura

A aplicação segue uma arquitetura full stack:

- **Frontend (Next.js)** → Interface do usuário
- **Backend (FastAPI)** → API e lógica de negócio
- **IA (Google Gemini)** → Classificação dos chamados
- **Banco de dados (SQLite)** → Persistência

Fluxo:

Usuário → Frontend → API FastAPI → IA → Banco → Resposta → Interface

## 🧠 Tecnologias Utilizadas

### Backend
- ⚡ FastAPI
- 🤖 Google Gemini (IA)
- 🗄 SQLite
- 🚀 Render
- 🐍 Python

### Frontend
- ⚛️ Next.js
- 🎨 Tailwind CSS
- ⚡ React

---

## 📌 Funcionalidades

✔ Classificação automática de chamados com IA  
✔ Interface web para envio e análise de chamados  
✔ Histórico de chamados com filtros e paginação  
✔ Dashboard com métricas operacionais  
✔ Processamento individual e em lote  
✔ Persistência em banco de dados  
✔ API REST documentada  

---

## 📥 Exemplo de Uso

### 🔹 Requisição - POST `/classificar`

```json
{
"chamados": [
  {
  "assunto": "Erro de login",
  "descricao": "Usuário não consegue acessar o sistema corporativo."
  }
 ]
}
🔹 Resposta da API
{
  "categoria": "Acesso",
  "prioridade": "Alta",
  "impacto": "Alto",
  "solucao": "Verificar credenciais, redefinir senha ou checar autenticação MFA."
}
📦 Classificação em Lote
🔹 Requisição - POST /classificar-lote
[
  {
    "chamados": "Internet lenta",
    "descricao": "Usuário relata lentidão ao acessar sistemas."
  },
  {
    "chamados": "Erro no sistema",
    "descricao": "Aplicação retorna erro ao salvar dados."
  }
]
🔹 Resposta
[
  {
    "categoria": "Rede",
    "prioridade": "Média",
    "impacto": "Médio",
    "solucao": "Verificar conectividade e desempenho da rede."
  },
  {
    "categoria": "Sistema",
    "prioridade": "Alta",
    "impacto": "Alto",
    "solucao": "Analisar logs da aplicação e possíveis falhas no backend."
  }
]
🧩 Endpoints Disponíveis
Método	Endpoint	Descrição
GET	/health	Status da API
POST	/classificar	Classificação individual
POST	/classificar-lote	Classificação em lote
GET	/chamados	Listagem com filtros
GET	/chamados/{id}	Busca por ID
🎯 Diferenciais do Projeto

💡 Uso de IA para tomada de decisão automatizada
⚡ Redução do tempo de triagem de chamados
📊 Estrutura pronta para integração com sistemas de Service Desk
🚀 Deploy real (não é apenas projeto local)

📈 Possibilidades de Evolução
Integração com sistemas de chamados (GLPI, ServiceNow)
Dashboard com métricas
Autenticação e controle de usuários
Treinamento de modelo personalizado
👨‍💻 Autor

Dayson Carlos de Lima
🔗 https://www.linkedin.com/in/dayson-carlos-205911246

## 💼 Aplicação no Mundo Real

Este projeto pode ser utilizado em:

- Centrais de Service Desk
- Automação de triagem de chamados
- Plataformas SaaS de atendimento
- Suporte técnico corporativo

Reduzindo tempo de resposta e aumentando eficiência operacional.

## 🎯 Visão do Projeto

Este projeto demonstra a aplicação prática de Inteligência Artificial em ambientes corporativos, com foco em automação de processos, eficiência operacional e construção de sistemas escaláveis.

Foi desenvolvido com foco em simular um produto real, integrando backend, frontend e IA em um fluxo completo de negócio.
