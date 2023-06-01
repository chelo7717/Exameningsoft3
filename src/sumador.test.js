import cajero from "./sumador.js";

describe("cajero", () => {
  it("deberia mostrar el cambio que resivira el cliente", () => {
    expect(cajero(10, 20)).toEqual(10);
  });
  it("deberia mostrar el cambio que resivira el cliente", () => {
    expect(cajero(15, 65)).toEqual(50);
  });
});
