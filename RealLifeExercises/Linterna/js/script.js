document.addEventListener("DOMContentLoaded", function () {
  const foco = document.getElementById("foco");
  const interruptor = document.getElementById("interruptor");

  let linternaEncendida = false;

  interruptor.addEventListener("click", function () {
    if (linternaEncendida) {
      linternaEncendida = false;
      foco.style.backgroundColor = "black";
    } else {
      linternaEncendida = true;
      foco.style.backgroundColor = "white";
    }
  });
});
