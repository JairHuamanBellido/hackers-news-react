/// <reference types="cypress" />
describe("As a User, I want to save a news as a favorite", () => {
  const ENDPOINT = "http://fake-endpoint:3000/";

  beforeEach(() => {
    cy.intercept("GET", `${ENDPOINT}/*`, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      fixture: "news-page2.json",
      delay: 1000,
    }).as("GetNews");

    cy.visit("/");

    cy.get("[data-testid=select-dropdown]").click();
    cy.get("[data-testid=option-Vuejs").click();

    cy.get("[data-testid=spinner]").should("exist");

    cy.wait("@GetNews");

    cy.get("[data-testid=spinner]").should("not.exist");

    cy.get("[data-testid=card").should("have.length", 3);
  });

  it("let me save as a favorite news and must be show in My faves section", () => {
    cy.get("[data-testid=favorite-29513987]").click();
    cy.get("[data-testid=favorite-29513987] > img")
      .invoke("attr", "alt")
      .should("eq", "favorite");

    cy.get(".tab-container > .inactive").click();
    cy.get("[data-testid=card").should("have.length", 1);
    cy.get("[data-testid=favorite-29513987]").should("exist");
  });
});
