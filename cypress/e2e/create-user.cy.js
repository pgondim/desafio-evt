const persona = require('../fixtures/personas.json');

describe('Criar usuário', () => {
  it('com sucesso', () => {
    cy.visit('https://front.serverest.dev/');
    cy.getElement('cadastrar').click();
    cy.getElement('nome').type(persona[0].name);
    cy.getElement('email').type(persona[0].email);
    cy.getElement('password').type(persona[0].password);
    cy.getElement('cadastrar').click();
  }),
  it('com e-mail já cadastrado', () => {
    cy.visit('https://front.serverest.dev/');
    cy.getElement('cadastrar').click();
    cy.getElement('nome').type(persona[0].name);
    cy.getElement('email').type(persona[0].email);
    cy.getElement('password').type(persona[0].password);
    cy.getElement('cadastrar').click();
    cy.get('span').contains('Este email já está sendo usado').should('be.visible');
  })
})