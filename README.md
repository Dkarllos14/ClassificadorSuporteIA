# 🚀 ClassificadorSuporteIA

![Python](https://img.shields.io/badge/Python-3.13-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Framework-green)
![SQLite](https://img.shields.io/badge/Database-SQLite-lightgrey)
![AI](https://img.shields.io/badge/AI-Gemini-orange)
![Status](https://img.shields.io/badge/Status-MVP-success)

API inteligente para **classificação automática de chamados de suporte técnico**, utilizando **IA generativa (Google Gemini)** para identificar categoria, prioridade e impacto.

> 🔥 Projeto focado em automação de processos de Service Desk e ganho de eficiência operacional.

---

## 🌐 API Online

🔗 **Acesse a API em produção:**  
👉 https://SEU-PROJETO.onrender.com

📄 **Documentação interativa (Swagger):**  
👉 https://SEU-PROJETO.onrender.com/docs

---

## ⚡ Demonstração Rápida

A API recebe um chamado de suporte e retorna automaticamente:

- Categoria (ex: Acesso, Rede, Hardware)
- Prioridade (Baixa, Média, Alta)
- Impacto (Baixo, Médio, Alto)
- Sugestão de solução

---

## 📸 Documentação da API

> Interface interativa para testes dos endpoints

![Swagger Preview](docs-preview.png)

📌 **Como adicionar essa imagem:**
- Tire um print da tela: `http://SEU-PROJETO.onrender.com/docs`
- Salve como: `docs-preview.png`
- Coloque o arquivo na **raiz do projeto (mesmo nível do README.md)**

---

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
  "assunto": "Erro de login",
  "descricao": "Usuário não consegue acessar o sistema corporativo."
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

⭐ Status do Projeto

🚀 Projeto funcional e em evolução contínua
