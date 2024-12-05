const persona = require('../fixtures/personas.json');

describe('Admin user', () => {
  it('create user successfully', () => {
    cy.visit('https://front.serverest.dev/');
    cy.getElement('cadastrar').click();
    //TODO
  }),
  it('create user with email already registered', () => {
    cy.visit('https://front.serverest.dev/');
    cy.getElement('cadastrar').click();
    cy.getElement('nome').type(persona[0].name);
    cy.getElement('email').type(persona[0].email);
    cy.getElement('password').type(persona[0].password);
    cy.getElement('cadastrar').click();
    cy.get('span').contains('Este email já está sendo usado').should('be.visible');
  }),
  it('create user without mandatory fields filled in', () => {
    cy.visit('https://front.serverest.dev/');
    cy.getElement('cadastrar').click();
    cy.getElement('cadastrar').click();
    //TODO: assertions
  }),
  it('login', () => {
    cy.visit('https://front.serverest.dev/');
    //TODO
  }),
  it('logout', () => {
    cy.visit('https://front.serverest.dev/');
    //TODO
  })
}),

describe('Regular user', () => {
    it('create user successfully', () => {
      cy.visit('https://front.serverest.dev/');
      cy.getElement('cadastrar').click();
      //TODO
    }),
    it('create user with email already registered', () => {
      cy.visit('https://front.serverest.dev/');
      cy.getElement('cadastrar').click();
      cy.getElement('nome').type(persona[0].name);
      cy.getElement('email').type(persona[0].email);
      cy.getElement('password').type(persona[0].password);
      cy.getElement('cadastrar').click();
      cy.get('span').contains('Este email já está sendo usado').should('be.visible');
    }),
    it('create user without mandatory fields filled in', () => {
      cy.visit('https://front.serverest.dev/');
      cy.getElement('cadastrar').click();
      cy.getElement('cadastrar').click();
      //TODO: assertions
    }),
    it('login', () => {
      cy.visit('https://front.serverest.dev/');
      //TODO
    }),
    it('logout', () => {
      cy.visit('https://front.serverest.dev/');
      //TODO
    })
  })