# **Configurações do Projeto - CP-Planta**

## Sumário

- [Configurações Gerais](#configurações-gerais)
  - [Instalação do Ambiente de Desenvolvimento](#instalação-do-ambiente-de-desenvolvimento)
- [Frontend](#frontend)
  - [Configurando o Frontend](#configurando-o-frontend)
  - [Rodando o Frontend](#rodando-o-frontend)
  - [Acessando o Frontend](#postmaninsomnia)
- [Extras](#extras)
  - [Integração com o Backend](#integração-com-o-backend)
- [Estou com pressa: Resumo](#resumo-dos-passos)

> **Observação:** Consulte a documentação do projeto no menu [Instalação](https://tools.ages.pucrs.br/cp-planta/wiki/-/wikis/instalacao) para mais detalhes sobre o processo.

## **Configurações Gerais**

### **Instalação do Ambiente de Desenvolvimento**

Antes de configurar os ambientes, siga estas instruções gerais:

- **VSCode**: Baixe [aqui](https://code.visualstudio.com/download).

- **Plugins recomendados para VSCode**:  
  - ESLint
  - Prettier
  - Jest
  - Jest Runner
  - GitHub Copilot (opcional).

- **NodeJS**: Verifique se o Node está instalado:
  ```bash
  node --version
  ```
  Caso não esteja, siga o [tutorial oficial](https://nodejs.org/en/download/).

- **NPM**: O NPM já vem com o NodeJS. Verifique a versão:
  ```bash
  npm --version
  ```
- **YARN**: Caso queira utilizar o yarn, precisa verificar se está instalado:
  ```bash
  yarn --version
  ```
  para instalar: 
    ```bash
  npm install --global yarn
  ```
---

# **Frontend**

## **Configurando o Frontend**

1. **Instalar Node (versão 18.0 ou superior)**:
   - Para Windows: [Download Node.js](https://nodejs.org/en/download/package-manager/)
   - Para Linux:
     ```bash
     sudo apt install nodejs
     ```

2. **Clonar o repositório do Frontend**:
   ```bash
   git clone https://tools.ages.pucrs.br/cp-planta/frontend.git
   ```

3. **Instalar dependências**:
   - No terminal, dentro do diretório do projeto:
     ```bash
     npm install
     ```
     usando yarn:
     ```bash
     yarn install
     ```

## **Rodando o Frontend**

### **Modo de Desenvolvimento**:

- Para rodar o frontend em modo de desenvolvimento:
  ```bash
  npm run dev
  ```
  usando yarn:
  ```bash
  yarn dev
  ```

- O projeto estará disponível em:  
  [http://localhost:3001](http://localhost:3001)

### **Postman/Insomnia**:

- Teste suas APIs usando o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download).

---

## **Extras**

### Integração com o Backend
- Em desenvolvimento

---
## **Resumo dos Passos**

### 1. **Configurações Gerais**

- **Instalar VSCode** e seus **plugins recomendados** (ESLint, Prettier, Jest, etc).
- **Instalar NodeJS e NPM**, verificar suas versões. 
- **Instalar Yarn**, se preferir utilizá-lo.

### 2. **Configurar o Frontend**

- **Clonar o repositório** do frontend.
- **Instalar as dependências** com `npm install` ou `yarn install`.

### 3. **Rodar o Frontend**

- **Modo de desenvolvimento**: Execute `npm run dev` ou `yarn dev`.
- O frontend estará acessível em:  
  [http://localhost:3001](http://localhost:3001)

### 4. **Teste com Postman ou Insomnia**

- Teste as APIs usando **Postman** ou **Insomnia** para garantir a integração e funcionalidade.

### 5. **Integração com o Backend**

- Em desenvolvimento. Mais detalhes serão fornecidos conforme a implementação avança.

---

