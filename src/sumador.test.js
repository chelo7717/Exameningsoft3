import cajero from "./sumador.js";
import verificador from "./verificador.js";

describe("cajero", () => {
  it("deberia mostrar el cambio que resivira el cliente", () => {
    expect(cajero(10, 20)).toEqual(10);
  });
  it("deberia mostrar el cambio que resivira el cliente", () => {
    expect(cajero(15, 65)).toEqual(50);
  });
});
describe("Debe ingresar ambos datos", () => {
  it("deberia mostrar una alerta si no introduce monto", () => {
    expect(verificador('', 20)).toEqual(false);
  });
  it("deberia mostrar una alerta si no introduce el efectivo", () => {
    expect(verificador(15, '')).toEqual(false);
  });
  it("no deberia mostrar nada si se introduce monto y efectio ", () => {
    expect(verificador(15, 50)).toEqual(true);
  });
});
