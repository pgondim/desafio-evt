import persona from "../../fixtures/personas.json";

describe("Admin user", () => {
  beforeEach(() => {
    cy.visit("https://front.serverest.dev/");
  }),
    it("create user with email already registered", () => {
      cy.getElement("cadastrar").click();
      cy.getElement("nome").type(persona[0].name);
      cy.getElement("email").type(persona[0].email);
      cy.getElement("password").type(persona[0].password);
      cy.getElement("cadastrar").click();
      cy.get("span")
        .contains("Este email já está sendo usado")
        .should("be.visible");
    })
    it("create user without mandatory fields filled in", () => {
      cy.getElement("cadastrar").click();
      cy.getElement("cadastrar").click();
      cy.get("span").contains("Nome é obrigatório").should("be.visible");
      cy.get("span").contains("Email é obrigatório").should("be.visible");
      cy.get("span").contains("Password é obrigatório").should("be.visible");
    })
});