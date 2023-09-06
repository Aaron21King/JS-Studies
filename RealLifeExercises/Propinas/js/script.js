const montoInput = document.getElementById("monto");
const propinaInput = document.getElementById("propina");
const calcularButton = document.getElementById("calcular");
const resultadoDiv = document.getElementById("resultado");

function calcularPropina() {
    const monto = parseFloat(montoInput.value);
    const porcentajePropina = parseFloat(propinaInput.value);

    if (isNaN(monto) || isNaN(porcentajePropina)) {
        resultadoDiv.textContent = "Por favor, ingrese valores validos.";
        return;
    }

    const propina = (monto * porcentajePropina) / 100;
    const total = monto + propina;

    resultadoDiv.innerHTML = `
        Monto de la Cuenta: $${monto.toFixed(2)}<br>
        Propina (${porcentajePropina}%): $${propina.toFixed(2)}<br>
        Total a Pagar: $${total.toFixed(2)}
    `;
}
calcularButton.addEventListener("click", calcularPropina);