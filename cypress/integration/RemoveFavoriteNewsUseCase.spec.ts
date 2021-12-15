/// <reference types="cypress" />
describe("As a User, I want to remove a news from favorite", () => {
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
    cy.get("[data-testid=favorite-29513987]").click();
  });

  it("must remove a favorite news from All Section", () => {
    cy.get("[alt=no-favorite]").should("have.length", 2);
    cy.get("[data-testid=favorite-29513987]").click();
    cy.get("[data-testid=favorite-29513987] > img")
      .invoke("attr", "alt")
      .should("eq", "no-favorite");

    cy.get("[alt=no-favorite]").should("have.length", 3);
  });

  it("must remove a favorite news from My Faves Section", () => {
    cy.get(".tab-container > .inactive").click();
    cy.get("[data-testid=favorite-29513987]").click();
    cy.get(".empty-container").should("have.text", "No favorite news");
  });
});
