# 🚀 ClassificadorSuporteIA

![Python](https://img.shields.io/badge/Python-3.13-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Framework-green)
![SQLite](https://img.shields.io/badge/Database-SQLite-lightgrey)
![AI](https://img.shields.io/badge/AI-Gemini-orange)
![Status](https://img.shields.io/badge/Status-MVP-success)

API inteligente para classificação automática de chamados de suporte técnico utilizando IA generativa (Google Gemini).
Automatize a triagem de chamados, reduza o tempo de resposta e aumente a eficiência operacional com inteligência artificial aplicada.

---

## 🌐 API Online

🔗 **Acesse a API em produção:**  
👉 https://classificadorsuporteia.onrender.com
<img width="1389" height="497" alt="Documentação da API" src="https://github.com/user-attachments/assets/d5018bec-3795-4a0e-b877-c7202c0a9928" />


📄 **Documentação interativa (Swagger):**  
> Interface interativa para testes dos endpoints
👉 https://classificadorsuporteia.onrender.com/docs

## ⚡ Demonstração Real da API em Produção

Exemplo de execução do endpoint `/classificar` em ambiente real:

- Categoria (ex: Acesso, Rede, Hardware)
- Prioridade (Baixa, Média, Alta)
- Impacto (Baixo, Médio, Alto)
- Sugestão de solução

<img width="1335" height="664" alt="docs-preview" src="https://github.com/user-attachments/assets/f24493aa-b1c8-4ca3-b703-5ba0afdba451" />

---

## 🏗️ Arquitetura

A aplicação segue uma arquitetura em camadas:

- **Routes** → definição dos endpoints
- **Services** → lógica de negócio e integração com IA
- **Models** → schemas e validação
- **Core** → configuração e banco de dados

Fluxo:
Cliente → API FastAPI → Serviço de IA → Banco → Resposta

## 🧠 Tecnologias Utilizadas

- ⚡ FastAPI
- 🤖 Google Gemini (IA)
- 🗄 SQLite
- 🚀 Render (Deploy)
- 🐍 Python

---

## 📌 Funcionalidades

✔ Classificação automática de chamados  
✔ Processamento individual e em lote  
✔ Persistência em banco de dados  
✔ Filtros e paginação  
✔ Busca por ID  
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
    "assunto": "Internet lenta",
    "descricao": "Usuário relata lentidão ao acessar sistemas."
  },
  {
    "assunto": "Erro no sistema",
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

⭐ Status do Projeto

🚀 Projeto funcional e em evolução contínua
