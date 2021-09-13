describe("user can visit the application and", () => {
  before(() => {
    cy.intercept("GET", "*/users**", { fixture: "users.json" });
    cy.visit("/");
  });

  it("is expected to display the title", () => {
    cy.get("[data-testid=header]").should("contain", "Employee Management");
  });

  describe("Employee list section", () => {
    it("is expected to display 4 employees", () => {
      cy.get("[data-testid=employee-list]").children().should("have.length", 4);
    });

    it("is expected to return Thomas, Janet, Emma, and Eve", () => {
      cy.get("[data-testid=employee-list]")
        .children()
        .first()
        .should("contain.text", "Thomas Bluth")
        .next()
        .should("contain.text", "Janet Weaver")
        .next()
        .should("contain.text", "Emma Wong")
        .next()
        .should("contain.text", "Eve Holt");
    });

    it("is expected to return emails for all users", () => {
      cy.get("[data-testid=employee-list]")
        .children()
        .first()
        .should("contain.text", "thomas.bluth@reqres.in")
        .next()
        .should("contain.text", "janet.weaver@reqres.in")
        .next()
        .should("contain.text", "emma.wong@reqres.in")
        .next()
        .should("contain.text", "eve.holt@reqres.in");
    });
  });
});
