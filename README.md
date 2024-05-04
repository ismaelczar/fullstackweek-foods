<h1 align="center">
    <img alt="FSW-Food" title="" src="/public/logo.png" />
</h1>

![preview img](/public/Capa.png)


O FSW-Food é um aplicativo web que oferece aos usuários a conveniência de fazer pedidos, verificar o status de seus pedidos e acompanhar a entrega em tempo real. Uma das características distintivas deste aplicativo é a sua integração entre o framework Next.js e o Prisma ORM. Essa combinação permite uma experiência ágil e dinâmica para os usuários, semelhante à oferecida por aplicativos como o iFood.

## 🚀 Começando

Estas instruções o guiarão para configurar e executar o projeto em sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Antes de baixar o projeto, é necessário ter as seguintes ferramentas instaladas em sua máquina:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* Gerenciador de pacotes, como [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)
* [Docker](https://docs.docker.com/desktop/install/windows-install/)

Além disso, é recomendável utilizar um editor de código, como o [VSCode](https://code.visualstudio.com/)

Você pode optar por executar a aplicação usando o Docker ou [Supabase](https://supabase.com/)


### 🔧 Rodando a aplicação web (Front-End)

```bash
# Clone este repositório
$ git clone https://github.com/ismaelczar/fullstackweek-foods.git

# Vá para a pasta da aplicação Front End
$ cd fullstackweek-foods

# Instale as dependências
$ npm i

# Crie um arquivo .env na raiz do repositório e forneça a URL de conexão com o banco de dados.
$ DATABASE_URL = SUA_URL_DO_BANCO

# Execute o seed para popular seu banco
$ npx prisma db seed

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

## 🛠 Technologies

As seguintes ferramentas foram usadas na construção do projeto: 

-   **[Next.js](https://nextjs.org/)**
-   **[TypeScript](https://www.typescriptlang.org/)**
-   **[Tailwind CSS](https://tailwindcss.com/)**
-   **[Lucide](https://lucide.dev/)**
-   **[Chadcn/ui](https://ui.shadcn.com/)**
-   **[Prisma](https://www.prisma.io/)**
-   **[Next Auth.js](https://next-auth.js.org/)**


> Para mais detalhes das dependências gerais da aplicação veja o arquivo  [package.json](./package.json)

