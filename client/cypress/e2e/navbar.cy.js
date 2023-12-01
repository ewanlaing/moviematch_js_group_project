describe("navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have a link to the actor form", () => {
    cy.get("#actor-link").should("contain", "Actor");
  });

  it("should have a link to the director form", () => {
    cy.get("#director-link").should("contain", "Director");
  });

  it("should have a link to the Title form", () => {
    cy.get("#title-link").should("contain", "Title");
  });
    
    it("should take you to actor page when you click actor", () => {
        cy.get("#actor-link").click()
        cy.url().should("include", "/actor");
    })

    it("should take you to director page when you click director", () => {
        cy.get("#director-link").click()
        cy.url().should("include", "/");
    })

    it("should take you to title page when you click title", () => {
        cy.get("#title-link").click()
        cy.url().should("include", "/title");
    })

});
