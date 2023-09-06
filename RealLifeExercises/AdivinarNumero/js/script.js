const numeroSecreto = Math.floor(Math.random() * 100) + 1;

const suposicionInput = document.getElementById("suposicion");
const enviarButton = document.getElementById("enviar");
const resultadoParrafo = document.getElementById("resultado");

let intentos = 0;
let adivinado = false;

enviarButton.addEventListener("click", function () {
    const suposicion = parseInt(suposicionInput.value);
    intentos++;

    if (suposicion === numeroSecreto) {
        adivinado = true;
        mostrarResultado(`¡Felicitaciones! Adivinaste el número en ${intentos} intentos.`);
    } else if (suposicion < numeroSecreto) {
        mostrarResultado("El número es mayor. Intenta de nuevo.");
    } else {
        mostrarResultado("El número es menor. Intenta de nuevo.");
    }
});
function mostrarResultado(mensaje) {
    resultadoParrafo.textContent = mensaje;
    if (adivinado) {
        resultadoParrafo.style.color = "green";
        suposicionInput.disabled = true;
        enviarButton.disabled = true;
    } else {
        resultadoParrafo.style.color = "red";
    }
}