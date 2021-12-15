/// <reference types="cypress" />

describe("As a User,I want to see my last searched filter", () => {
  const ENDPOINT = "http://fake-endpoint:3000/";

  before(() => {
    cy.intercept("GET", `${ENDPOINT}/*`, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      fixture: "news.json",
      delay: 1000,
    }).as("GetNews");

    cy.visit("/");

    cy.get("[data-testid=select-dropdown]").click();
    cy.get("[data-testid=option-Vuejs").click();

    cy.get("[data-testid=spinner]").should("exist");

    cy.wait("@GetNews");

    cy.get("[data-testid=spinner]").should("not.exist");

    cy.get("[data-testid=card").should("have.length", 1);
  });
  it("must be show a vuejs by default ", () => {
    cy.visit("/");

    cy.get("[data-testid=select-dropdown] > p").should("have.text", "Vuejs");
    cy.get("[data-testid=spinner]").should("exist");

    cy.wait("@GetNews");

    cy.get("[data-testid=spinner]").should("not.exist");

    cy.get("[data-testid=card").should("have.length", 1);
  });
});
