import cajero from "./sumador";
import verificador from "./verificador";

const Monto = document.querySelector("#Monto-Venta");
const Efectivo = document.querySelector("#Efectivo");
const form = document.querySelector("#cajero-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const MontodeVenta = Number.parseInt(Monto.value);
  const EfectivoPagado = Number.parseInt(Efectivo.value);

  div.innerHTML = "<p>" + cajero(MontodeVenta, EfectivoPagado) + "</p>";
});
