describe("favouritesHeart", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

    it("should toggle favourites when clicked", () => {
    cy.get("#untoggledHeartButton").click();
    cy.wait(2000);
    cy.visit("http://localhost:3000/favourites");
    cy.wait(2000);
    cy.get(".clearFavouritesButton").click();
    cy.wait(2000);
    cy.visit("http://localhost:3000/");
    cy.get("#untoggledHeartButton").click();
    cy.wait(1000);
    cy.visit("http://localhost:3000/favourites");
    cy.get(".Item-container .Item-box-2").should("have.length.greaterThan", 0);
  });
});
