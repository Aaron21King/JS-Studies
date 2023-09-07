var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");
var iniciarButton = document.getElementById("iniciarButton");
var detenerButton = document.getElementById("detenerButton");

var intervalo;

iniciarButton.addEventListener("click", function () {
    var tiempoRestante = 5 * 60; 

    intervalo = setInterval(function () {
        var minutosRestantes = Math.floor(tiempoRestante / 60);
        var segundosRestantes = tiempoRestante % 60;

        minutos.textContent = minutosRestantes < 10 ? "0" + minutosRestantes : minutosRestantes;
        segundos.textContent = segundosRestantes < 10 ? "0" + segundosRestantes : segundosRestantes;

        if (tiempoRestante === 0) {
            detenerTemporizador();
        } else {
            tiempoRestante--;
        }
    }, 1000);
});

detenerButton.addEventListener("click", function () {
    detenerTemporizador();
});

function detenerTemporizador() {
    clearInterval(intervalo);
}