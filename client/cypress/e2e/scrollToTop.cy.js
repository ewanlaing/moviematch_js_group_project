describe("scrollToTop", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should scroll to the top of the page when clicked", () => {
    cy.scrollTo("bottom", { duration: 2000 });
    cy.get("#scrollToTopButton").click();
    cy.wait(1000);
    cy.window().its("scrollY").should("equal", 0);
  });
});
