import {v4 as uuidGenerator} from 'uuid'

describe("User", () => {
  it("POST create new admin user", () => {
    const uuid = uuidGenerator();
    cy.api("POST", "https://serverest.dev/usuarios", {
      nome: uuid,
      email: `${uuid}@qa.com.br`,
      password: uuid,
      administrador: "true",
    }).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property(
        "message",
        "Cadastro realizado com sucesso"
      );
      expect(response.body).to.have.keys("message", "_id");
    });
  });

  it("PUT update user", () => {
    cy.api("PUT", "https://serverest.dev/usuarios/KEyz9vT2Pk8bVazj", {
      nome: "TesteAPI2131",
      email: "TesteAPI2131@dominio.com",
      password: "TesteAPI2131",
      administrador: "true",
    }).should((response) => {
      const obj = {
        nome: "TesteAPI2131",
        email: "TesteAPI2131@dominio.com",
        password: "TesteAPI2131",
        administrador: "true",
      };
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property(
        "message",
        "Registro alterado com sucesso"
      );
    });
  });

  it("GET user by ID", () => {
    cy.api("GET", "https://serverest.dev/usuarios/8ZYNNEP4R3Y22HRd").should(
      (response) => {
        const obj = {
          nome: "TesteAPI2121",
          password: "TesteAPI2121",
          administrador: "true",
          email: "TesteAPI2121@qa.com.br",
          _id: "8ZYNNEP4R3Y22HRd",
        };
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.equal(obj);
      }
    );
  });
});
