const imagenMascota = document.getElementById("imagenMascota");
const estadoMascota = document.getElementById("estadoMascota");
const botonAlimentar = document.getElementById("alimentar");
const botonJugar = document.getElementById("jugar");

let nivelHambre = 50;
let nivelFelicidad = 50;

function actualizarEstado() {
  if (nivelHambre > 70 && nivelFelicidad > 70) {
    imagenMascota.src = "../happy.jpg";
    estadoMascota.textContent = "¡Soy una mascota feliz!";
  } else if (nivelHambre > 70) {
    imagenMascota.src = "../hungry.jpg";
    estadoMascota.textContent = "Tengo hambre. ¡Aliméntame!";
  } else if (nivelFelicidad > 70) {
    imagenMascota.src = "../happy.jpg";
    estadoMascota.textContent = "Estoy contento. ¿Quieres jugar más?";
  } else {
    imagenMascota.src = "../neutral.jpg";
    estadoMascota.textContent = "Estoy bien. Puedes alimentarme o jugar conmigo.";
  }
}

function alimentar() {
  if (nivelHambre < 100) {
    nivelHambre += 10;
    nivelFelicidad -= 5;
    actualizarEstado();
  }
}

function jugar() {
  if (nivelFelicidad < 100) {
    nivelFelicidad += 10;
    nivelHambre -= 5;
    actualizarEstado();
  }
}

botonAlimentar.addEventListener("click", alimentar);
botonJugar.addEventListener("click", jugar);

actualizarEstado();
