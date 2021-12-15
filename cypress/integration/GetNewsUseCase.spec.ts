/// <reference types="cypress" />

describe("As a User, I want to get news", () => {
  const ENDPOINT = "http://fake-endpoint:3000/";

  it("navigate to home and get news from vue", () => {
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

  it("navigate the page number 2 and get another news", () => {
    cy.intercept("GET", `${ENDPOINT}/*`, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      fixture: "news-page2.json",
      delay: 1000,
    }).as("GetNews");
    cy.get("[data-testid=pagination-2]").click();
    cy.get("[data-testid=spinner]").should("exist");

    cy.wait("@GetNews");

    cy.get("[data-testid=spinner]").should("not.exist");
    cy.get("[data-testid=card").should("have.length", 3);
  });
});
