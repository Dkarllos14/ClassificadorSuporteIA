# Classificador de Chamados de Suporte com IA

![Python](https://img.shields.io/badge/Python-3.10+-blue)
![Pandas](https://img.shields.io/badge/Pandas-Data%20Analysis-green)
![Google Gemini](https://img.shields.io/badge/Google-Gemini%20AI-orange)
![Status](https://img.shields.io/badge/Status-Em%20desenvolvimento-yellow)

Projeto de automação desenvolvido em **Python** que utiliza a **API do Google Gemini** para classificar automaticamente chamados de suporte técnico.

O sistema analisa o **assunto** e a **descrição** de cada chamado e retorna:

- categoria do chamado
- sugestão de solução técnica

Este projeto simula um cenário real de **Service Desk**, utilizando **Inteligência Artificial** para auxiliar na triagem e categorização de tickets de suporte.

---

# Objetivo

Este projeto foi desenvolvido como parte de um portfólio técnico voltado para:

- Automação de processos de suporte
- Aplicação de Inteligência Artificial em TI
- Manipulação e análise de dados com Python
- Classificação automática de tickets de suporte

---

# Categorias utilizadas

As categorias atualmente utilizadas são:

- REDES
- HARDWARE
- SOFTWARE

---

# Fluxo do sistema

O funcionamento do sistema segue o seguinte fluxo:

CSV de chamados
⬇
Script Python
⬇
API Google Gemini
⬇
Classificação automática
⬇
Arquivo CSV com resultados


Ou de forma simplificada:

CSV → Python → Gemini AI → Classificação → CSV final

---

# Estrutura do projeto

ClassificadorSuporteIA
│
├── data
│ ├── chamados.csv
│ └── chamados_finalizados.csv
│
├── docs
│
├── notebooks
│ └── exploracao_dados.ipynb
│
├── src
│ ├── main.py
│ ├── classifier.py
│ ├── config.py
│ ├── utils.py
│ └── teste_modelos.py
│
├── requirements.txt
├── .env
├── .gitignore
└── README.md


---

# Exemplo de entrada

Arquivo `chamados.csv`

| id | assunto | descricao |
|----|--------|-----------|
| 1 | Erro de login | Usuário não consegue acessar o sistema |
| 2 | VPN não conecta | Funcionário remoto sem acesso à rede |

---

# Exemplo de saída

Arquivo `chamados_finalizados.csv`

| id | categoria_ia | solucao_sugerida |
|----|--------------|------------------|
| 1 | SOFTWARE | Verificar credenciais e redefinir senha |
| 2 | REDES | Validar configuração da VPN |

---

# Tecnologias utilizadas

- Python
- Pandas
- Google Gemini API
- Pydantic
- Python Dotenv
- Jupyter Notebook

---

# Como executar o projeto

### 1️⃣ Clonar o repositório

git clone https://github.com/Dkarllos14/ClassificadorSuporteIA.git

### 2️⃣ Entrar na pasta do projeto

cd ClassificadorSuporteIA

### 3️⃣ Criar ambiente virtual

python -m venv venv

### 4️⃣ Ativar ambiente virtual

Windows:
venv\Scripts\activate

---

### 5️⃣ Instalar dependências

pip install -r requirements.txt

---

### 6️⃣ Configurar chave da API

Crie um arquivo `.env` na raiz do projeto:

GOOGLE_API_KEY=AIzaSyBEl5RNeMwSZwkr2INtVVCsO5In5Ur_rk0

---

### 7️⃣ Executar o classificador

python src/main.py

---

# Possíveis melhorias futuras

- Dashboard de análise de chamados
- API REST para classificação de tickets
- Integração com sistemas de Service Desk
- Treinamento de modelo especializado
- Análise estatística dos chamados

---

# Autor

**Dayson Carlos de Lima**

[LinkedIn](https://www.linkedin.com/in/dayson-carlos-205911246)
Graduado em Análise e Desenvolvimento de Sistemas
Profissional com experiência em infraestrutura de TI, com foco em:

- Infraestrutura de TI
- Automação de processos
- Análise de dados
- Inteligência Artificial aplicada

Interesses técnicos:

- Automação com Python
- Análise de dados
- Inteligência Artificial aplicada