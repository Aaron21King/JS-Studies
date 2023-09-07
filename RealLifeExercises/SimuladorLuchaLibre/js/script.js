var luchador1 = {
    nombre: "John Cena",
    vida: 100,
    ataque: 10,
};

var luchador2 = {
    nombre: "The Rock",
    vida: 100,
    ataque: 10,
};

function atacar(luchadorAtacante, luchadorObjetivo) {
    var damage = Math.floor(Math.random() * luchadorAtacante.ataque) + 1;
    luchadorObjetivo.vida -= damage;
    return (
        luchadorAtacante.nombre +
        " atacó a " +
        luchadorObjetivo.nombre +
        " y le hizo " +
        damage +
        " de daño."
    );
}

function estadoLuchador(luchador) {
    if (luchador.vida <= 0) {
        return luchador.nombre + " ha perdido la lucha.";
    }
}

function comenzarLucha() {
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";

    while (luchador1.vida > 0 && luchador2.vida > 0) {
        var resultadoAtaque1 = atacar(luchador1, luchador2);
        resultadoElement.innerHTML += resultadoAtaque1 + "<br>";
        var resultadoEstado2 = estadoLuchador(luchador2);
        if (resultadoEstado2) {
            resultadoElement.innerHTML += resultadoEstado2;
            break;
        }

        var resultadoAtaque2 = atacar(luchador2, luchador1);
        resultadoElement.innerHTML += resultadoAtaque2 + "<br>";
        var resultadoEstado1 = estadoLuchador(luchador1);
        if (resultadoEstado1) {
            resultadoElement.innerHTML += resultadoEstado1;
            break;
        }
    }
}

var comenzarButton = document.getElementById("comenzarButton");
comenzarButton.addEventListener("click", comenzarLucha);