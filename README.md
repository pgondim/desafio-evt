# Desafio técnico QA 2024 
- Desafio realizado como parte do processo seletivo para QA.
- O projeto consiste em realizar testes automatizados com javascript e cypress.
- Dividido em 2 partes:
  - UI - frontend: sistema sob test: https://front.serverest.dev/
  - API - backend: sistema sob test: https://front.serverest.dev/

# Configuração
1. Faça o clone ou fork do projeto
2. Instale as dependencias com o comando
     ```
    npm i
    ```

# Executar cypress
Execute o comando npm start ou npx cypress open
```
npm start
```
```
npx cypress open
```

# CI/CD - Pipeline - GitHub actions
Foi criada uma pipeline de integração e entrega contínua para executar automaticamente os testes em cypress a cada novo push realizado no projeto.

Basta ir na aba de [actions](https://github.com/pgondim/desafio-tecnico-qa-2024/actions) do projeto para ter acessos as pipelines que já foram executadas.

# Estórias de Usuário - UI - Frontend

<details>
  
<summary> 1. Validação de tentativa de criação de usuários no sistema </summary>
  
  **Descrição(Gherkin):**
  
  >***DADO*** que sou gerente do sistema
  >
  >***QUANDO*** alguém tentar cadastrar novo usuário administrador
  >
  >***E*** apresentar e-mail já cadastrado
  >
  >***OU*** não preencher os campos obrigatórios
  >
  >***ENTÃO*** deve ser apresentado mensagens claras sobre o motivo da criação ter falhado

</details>

<details>
  
<summary> 2. Validação de gerenciamento de produto no sistema</summary>
  
  **Descrição(Gherkin):**
  
  >***DADO*** que sou usuário administrador 
  >
  >***QUANDO*** fizer login no sistema
  >
  >***ENTÃO*** sou capaz de gerenciar produtos no sistema

</details>


# Casos de Teste
## UI - frontend
### Criação de usuários
<details>
  
<summary> 1. Validar criação de usuário com e-mail já cadastrado </summary>
  
**Passos:**

1. Clicar no botão Cadastrar
2. Preencher campo Nome com qualquer valor
3. Preencher campo e-mail com um valor que já conste no sistema
4. Preencher campo senha com qualquer valor
5. Clicar no botão Cadastrar

**Critério de aceite**

Deve ser apresentada a mensagem "Este email já está sendo usado" ao usuário

</details>

<details>
  
<summary> 2. Validar criação de usuário sem preencher campos obrigatórios </summary>
  
**Passos:**

1. Clicar no botão Cadastrar
2. Deixar campo Nome em branco
3. Deixar campo e-mail em branco
4. Deixar campo senha em branco
5. Clicar no botão Cadastrar

**Critério de aceite**

Deve ser apresentada uma mensagem para cada campo em branco: 

</details>

### Usuário administrador

<details>

<summary> 3. Validar criação de produto com sucesso </summary>
  
**Passos:**

1. Fazer login com usuário administrador 
2. Preencher campo Nome com qualquer valor
3. Preencher campo Preço com qualquer valor
4. Preencher campo Descrição com qualquer valor
5. Preencher campo Quantidade com qualquer valor
6. Clicar no botão Cadastrar

**Critério de aceite**

Deve ser apresentada um novo produto cadastrado com o mesmo nome, descrição e preço
- "Nome é obrigatório"
- "Email é obrigatório"
- "Password é obrigatório" 

</details>

## API - backend
### Usuários (/users)
1. Criar novo usuário com sucesso
2. Dado um ID, atualizar o usuário referente a ele com sucesso
3. Recuperar o usuário por ID


