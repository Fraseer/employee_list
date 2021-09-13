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

    it("is expected to return Thomas as first employee", () => {
      cy.get("[data-testid=employee-list]")
        .children()
        .first()
        .should("contain.text", "Thomas Bluth")
        .next()
        .should("contain.text", "Janet Weaver");
    });
  });
});
