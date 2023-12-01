describe("navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have a link to the actor form", () => {
    cy.get("#actor-link").should("contain", "Actor");
  });

  it("should have a link to the actor form", () => {
    cy.get("#director-link").should("contain", "Director");
  });

  it("should have a link to the actor form", () => {
    cy.get("#title-link").should("contain", "Title");
  });
});
