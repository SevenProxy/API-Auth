---

# Projeto de API de Autenticação em TypeScript, Express e Prisma

Bem-vindo ao repositório do projeto de API de Autenticação, uma aplicação desenvolvida utilizando TypeScript, Express e Prisma para fornecer um sistema robusto e seguro de autenticação de usuários.

## Tecnologias Utilizadas

- **TypeScript:** Linguagem de programação que adiciona tipagem estática ao JavaScript, proporcionando um código mais escalável e legível.
- **Express:** Framework web minimalista para Node.js que facilita a criação de APIs RESTful eficientes e flexíveis.
- **Prisma:** ORM moderno para Node.js e TypeScript que simplifica a interação com bancos de dados SQL.

## Funcionalidades Principais

- Registro de usuários com senhas criptografadas usando Bcrypt.
- Autenticação segura utilizando tokens JWT (JSON Web Tokens).
- Integração com Prisma para uma interação eficiente com o banco de dados.

## Como Iniciar

1. **Instale as Dependências:**
   ```bash
   yarn
   ```

2. **Configure as Variáveis de Ambiente:**
   Renomeie o arquivo `.env.example` para `.env` e configure as variáveis necessárias, como a chave secreta para JWT.

3. **Execute a Migração do Banco de Dados:**
   ```bash
   npx prisma migrate dev
   ```

4. **Inicie o Servidor:**
   ```bash
   yarn start
   ```

5. **Endpoints Disponíveis:**
   - `POST /auth-login`: Autentica um usuário e fornece um token JWT.
   - `POST /auth-token`: Authenticação um usuário com base em seu toke JWT.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests para melhorar este projeto.

Obrigado por utilizar este projeto. Esperamos que seja útil para suas necessidades de autenticação!

---
