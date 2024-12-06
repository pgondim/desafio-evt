import {v4 as uuidGenerator} from 'uuid'

beforeEach(() => {
  cy.login('novo_email@emailnovo.com', '123123')
});

describe('Home', () => {
  //TODO
});

describe('Cadastrar Usuários', () => {
  //TODO
});

describe('Listar usuários', () => {
  //TODO
});

describe('Cadastrar produtos', () => {
  it.only('register product successfully', () => { 
    const uuid = uuidGenerator();
    const data = `${uuid}-50`
    cy.getElement('cadastrarProdutos').click();
    cy.getElement('imagem').selectFile('cypress/assets/imagem.png')    
    cy.getElement('nome').type(data);
    cy.getElement('preco').type('50');
    cy.getElement('descricao').type(data);
    cy.getElement('quantity').type('2');
    cy.getElement('cadastarProdutos').click();
    cy.get('td').contains(data).should('be.visible');
  });
});

describe('Listar Produtos', () => {
  //TODO
});

describe('Relatórios', () => {
  //TODO
});
