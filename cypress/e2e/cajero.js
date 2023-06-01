describe("cajero", () => {
    it("se introduce lo el monto y el efectivo", () => {
      cy.visit("/");
      cy.get("#Monto-Venta").type(10);
      cy.get("#Efectivo").type(50);
      cy.get("#cambio-button").click();
      cy.get("#resultado-div").should("contain", "40");
    });
  });