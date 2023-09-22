document.addEventListener("DOMContentLoaded", function () {
  const dado1 = document.getElementById("dado1");
  const dado2 = document.getElementById("dado2");
  const lanzarBtn = document.getElementById("lanzarBtn");

  lanzarBtn.addEventListener("click", function () {
    lanzarDado(dado1);
    lanzarDado(dado2);
  });

  function lanzarDado(dado) {
    const valorAleatorio = obtenerValorAleatorio(1, 6);
    dado.style.animation = "giro 1s ease-out";
    setTimeout(function () {
      dado.style.animation = "";
      dado.textContent = valorAleatorio;
    }, 1000);
  }

  function obtenerValorAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
