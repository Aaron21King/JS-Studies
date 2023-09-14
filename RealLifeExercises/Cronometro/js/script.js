var intervalo;
var tiempo = 0;
var cronometroFuncionando = false;

function actualizarTiempo() {
    tiempo++;
    document.getElementById("tiempoTranscurrido").textContent = tiempo;
}

function iniciarCronometro() {
    if (!cronometroFuncionando) {
        intervalo = setInterval(actualizarTiempo, 1000);
        cronometroFuncionando = true;
        document.getElementById("iniciar").disabled = true;
        document.getElementById("detener").disabled = false;
        document.getElementById("reiniciar").disabled = false;
    }
}

function detenerCronometro() {
    clearInterval(intervalo);
    cronometroFuncionando = false;
    document.getElementById("iniciar").disabled = false;
    document.getElementById("detener").disabled = true;
}

function reiniciarCronometro() {
    tiempo = 0;
    document.getElementById("tiempoTranscurrido").textContent = tiempo;
    if (cronometroFuncionando) {
        detenerCronometro();
    }
    document.getElementById("iniciar").disabled = false;
    document.getElementById("detener").disabled = true;
}

document.getElementById("iniciar").addEventListener("click", iniciarCronometro);
document.getElementById("detener").addEventListener("click", detenerCronometro);
document.getElementById("reiniciar").addEventListener("click", reiniciarCronometro);