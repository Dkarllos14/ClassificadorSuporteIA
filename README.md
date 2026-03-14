# Classificador de Chamados de Suporte com IA

Projeto desenvolvido em Python que utiliza a API do Google Gemini para classificar automaticamente chamados de suporte técnico.

O sistema lê chamados armazenados em um arquivo CSV, envia o conteúdo para um modelo de IA e retorna:

- Categoria do chamado
- Sugestão de solução técnica

As categorias atualmente utilizadas são:

- REDES
- HARDWARE
- SOFTWARE

---

# Objetivo

Este projeto foi desenvolvido como parte de um portfólio técnico voltado para:

- Automação de processos de suporte
- Aplicação de IA em classificação de tickets
- Manipulação e análise de dados com Python

---

# Tecnologias utilizadas

- Python
- Pandas
- Google Gemini API
- Pydantic
- Python Dotenv
- Jupyter Notebook

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
└── README.md


---

# Funcionamento

O fluxo de processamento funciona da seguinte forma:

1. O sistema lê os chamados do arquivo `chamados.csv`
2. Cada chamado é enviado para a API do Gemini
3. A IA analisa o assunto e a descrição
4. O sistema retorna:
   - categoria do chamado
   - sugestão de solução
5. Os resultados são salvos em `chamados_finalizados.csv`

---

# Exemplo de entrada

| id | assunto | descricao |
|----|--------|-----------|
| 1 | Erro de Login | Usuário não consegue acessar o sistema |
| 2 | VPN não conecta | Funcionário remoto sem acesso à rede |

---

# Exemplo de saída

| id | categoria_ia | solucao_sugerida |
|----|--------------|------------------|
| 1 | SOFTWARE | Verificar credenciais e redefinir senha |
| 2 | REDES | Validar configuração da VPN |

---

# Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seuusuario/ClassificadorSuporteIA.git