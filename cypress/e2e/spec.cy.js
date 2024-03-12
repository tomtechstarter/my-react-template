describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/todo");

    cy.get("#add_todo_ti_userid").type(2);
    cy.get("#add_todo_ti_task").type("Kaffee holen");
    cy.get("#add_todo_ti_date").type("2025-03-08");
    cy.get("#add_todo_btn").click();
  });
});
