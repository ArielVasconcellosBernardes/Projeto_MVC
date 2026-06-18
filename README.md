# MVC Store API

API web construída em **Node.js + Express**, seguindo o padrão arquitetural **MVC**, para gerenciamento de produtos e páginas institucionais (login, sobre, contato e home) com views renderizadas em **EJS**. O projeto foi estruturado para evoluir facilmente de um armazenamento em memória para uma base de dados persistente (ex: MySQL).

---

## Sumário

- [Stack Tecnológica](#-stack-tecnológica)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação e Execução](#-instalação-e-execução)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Rotas Disponíveis](#-rotas-disponíveis)
- [Documentação Interna (JSDoc)](#-documentação-interna-jsdoc)
- [Licença](#-licença)

---

## Stack Tecnológica

- **Node.js** — ambiente de execução JavaScript no servidor
- **Express** — framework web minimalista para definição de rotas e middlewares
- **EJS** — motor de templates para renderização das views (home, login, sobre, contato, produtos)
- **JSDoc** — padrão de documentação inline do código (Models e Controllers)
- **MySQL** *(planejado)* — persistência de dados via `config/database.js`, substituindo o armazenamento atual em memória

---

## Estrutura do Projeto

```
├── config/
│   └── database.js          # Configuração da conexão com o banco de dados
├── controllers/
│   ├── pageController.js    # Controllers das páginas institucionais (JSDoc aplicado)
│   └── productController.js # Controllers de produtos (JSDoc aplicado)
├── models/
│   └── productModel.js      # Camada de dados de produtos (JSDoc aplicado)
├── routes/
│   ├── pageRoutes.js
│   └── productRoutes.js
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   ├── sobre.ejs
│   ├── contato.ejs
│   ├── produtos.ejs
│   ├── header.ejs
│   └── footer.ejs
├── app.js
├── .env
└── README.md
```

---

## Instalação e Execução

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior)
- [Git](https://git-scm.com/) instalado

### Passo a passo

**1. Clone o repositório**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

**2. Acesse a pasta do projeto**
```bash
cd seu-repositorio
```

**3. Instale as dependências**
```bash
npm install
```

**4. Crie o arquivo `.env`** na raiz do projeto com base no exemplo da seção [Variáveis de Ambiente](#-variáveis-de-ambiente).

**5. Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
```

**6. Acesse a aplicação**
```
http://localhost:3000
```

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto seguindo o modelo abaixo (substitua pelos seus próprios valores — nunca exponha credenciais reais em repositórios públicos):

```env
# Porta em que a aplicação será executada
PORT=3000

# Configurações do banco de dados
DB_HOST=localhost
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco

# Configuração de cookies/sessão
SESSION_SECRET=sua_chave_secreta
```

---

## Rotas Disponíveis

### Páginas
| Método | Rota         | Descrição                          |
|--------|--------------|-------------------------------------|
| GET    | `/`          | Página de login                     |
| GET    | `/home`      | Página inicial                      |
| GET    | `/sobre`     | Página "Sobre"                      |
| GET    | `/contato`   | Página de contato                   |
| GET    | `/setcookie` | Define um cookie de exemplo         |

### Produtos
| Método | Rota                   | Descrição                          |
|--------|------------------------|--------------------------------------|
| GET    | `/produtos`            | Lista todos os produtos              |
| POST   | `/produtos/add`        | Cria um novo produto                 |
| GET    | `/produtos/edit/:id`   | Exibe o formulário de edição         |
| POST   | `/produtos/update/:id` | Atualiza um produto existente        |
| GET    | `/produtos/delete/:id` | Remove um produto                    |

---

## Documentação Interna (JSDoc)

Os arquivos da camada **Model** (`models/productModel.js`) e **Controller** (`controllers/productController.js` e `controllers/pageController.js`) possuem blocos **JSDoc** completos, incluindo:

- Descrição da finalidade de cada função;
- `@param` com os tipos dos parâmetros recebidos;
- `@returns` com o tipo do retorno esperado;
- `@throws`, quando aplicável, indicando exceções ou pontos de atenção;
- Tipagem dos objetos `req` e `res` do Express via `@param {import('express').Request}` e `@param {import('express').Response}`.

Essa documentação habilita o **IntelliSense** do VS Code, exibindo automaticamente assinaturas, tipos e descrições ao passar o mouse sobre os métodos.

---

## Licença

Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo como referência de estudo.