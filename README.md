# Desafio técnico QA 2024 
- Desafio realizado como parte do processo seletivo para QA.
- O projeto consiste em realizar testes automatizados com javascript e cypress.
- Dívidido em 2 partes:
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

Basta ir na aba de Actions do projeto para ter acessos as pipelines que já foram executadas.

# Cenários de Teste
## UI - frontend
### Criação de usuários
1. Validar criação de usuário com e-mail já cadastrado
2. Validar criação de usuário sem preencher campos obrigatórios
### Usuário administrador 
3. Validar criação de produto com sucesso

## API - backend
### Usuários (/users)
1. Criar novo usuário com sucesso
2. Dado um ID, atualizar o usuário referente a ele com sucesso
3. Recuperar o usuário por ID


