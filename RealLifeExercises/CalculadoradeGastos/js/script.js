document.addEventListener("DOMContentLoaded", function () {
    const descripcionInput = document.getElementById("descripcion");
    const montoInput = document.getElementById("monto");
    const agregarGastoButton = document.getElementById("agregarGasto");
    const listaGastos = document.getElementById("listaGastos");
    const totalGastosSpan = document.getElementById("totalGastos");

    const gastos = [];

    function agregarGasto() {
        const descripcion = descripcionInput.value.trim();
        const monto = parseFloat(montoInput.value);

        if (descripcion === "" || isNaN(monto)) {
            alert("Ingrese una descripción y un monto válidos.");
            return;
        }

        const gasto = { descripcion, monto };
        gastos.push(gasto);

        descripcionInput.value = "";
        montoInput.value = "";

        mostrarGastos();
        calcularTotalGastos();
    }

    function mostrarGastos() {
        listaGastos.innerHTML = "";
        gastos.forEach((gasto, indice) => {
            const item = document.createElement("div");
            item.innerHTML = `<p>Gasto ${indice + 1}: ${gasto.descripcion} - $${gasto.monto}</p>`;
            listaGastos.appendChild(item);
        });
    }

    function calcularTotalGastos() {
        let total = 0;
        gastos.forEach(gasto => {
            total += gasto.monto;
        });
        totalGastosSpan.textContent = total.toFixed(2);
    }

    agregarGastoButton.addEventListener("click", agregarGasto);

    montoInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            agregarGasto();
        }
    });
});
