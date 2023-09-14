var palabras = ["javascript", "programacion", "web", "desarrollo", "html", "css"];
var palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
var palabraAdivinada = "";
var intentosMaximos = 6;
var intentosRestantes = intentosMaximos;

function actualizarPalabraOculta() {
    var palabraMostrada = "";
    for (var i = 0; i < palabraSecreta.length; i++) {
        if (palabraAdivinada.includes(palabraSecreta[i])) {
            palabraMostrada += palabraSecreta[i];
        } else {
            palabraMostrada += "_";
        }
    }
    document.getElementById("palabraOculta").textContent = palabraMostrada;
}

function actualizarIntentosRestantes() {
    document.getElementById("intentosRestantes").textContent = intentosRestantes;
}

function adivinarLetra() {
    var letra = document.getElementById("letra").value.toLowerCase();

    if (letra.length !== 1 || !/[a-z]/.test(letra)) {
        alert("Ingresa una letra válida.");
        return;
    }

    if (palabraAdivinada.includes(letra)) {
        alert("Ya adivinaste esa letra.");
        return;
    }

    if (!palabraSecreta.includes(letra)) {
        intentosRestantes--;
    }

    palabraAdivinada += letra;
    actualizarPalabraOculta();
    actualizarIntentosRestantes();

    if (intentosRestantes === 0) {
        alert("¡Perdiste! La palabra secreta era: " + palabraSecreta);
        reiniciarJuego();
    } else if (!palabraOculta.includes("_")) {
        alert("¡Ganaste! Has adivinado la palabra.");
        reiniciarJuego();
    }
}

function reiniciarJuego() {
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    palabraAdivinada = "";
    intentosRestantes = intentosMaximos;
    actualizarPalabraOculta();
    actualizarIntentosRestantes();
}

document.getElementById("adivinarButton").addEventListener("click", adivinarLetra);
actualizarPalabraOculta();
actualizarIntentosRestantes();