describe("clearFavouritesButton", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should delete all favourites when clicked", () => {
    cy.get("#untoggledHeartButton").click();
    cy.wait(3000);
    cy.visit("http://localhost:3000/favourites");
    cy.wait(3000);
    cy.get(".clearFavouritesButton").click();
    cy.wait(3000);
    cy.get(".Item-box-2").should("not.exist");
  });
});
