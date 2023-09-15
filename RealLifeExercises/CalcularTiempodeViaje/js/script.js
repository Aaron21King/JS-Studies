document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcular");
    calcularButton.addEventListener("click", function () {
      const distanciaInput = document.getElementById("distancia");
      const velocidadInput = document.getElementById("velocidad");
      const unidadSelect = document.getElementById("unidad");
      const resultadoElement = document.getElementById("resultado");
  
      const distancia = parseFloat(distanciaInput.value);
      const velocidad = parseFloat(velocidadInput.value);
      const unidadVelocidad = unidadSelect.value;
  
      const tiempoDeViaje = calcularTiempoDeViaje(distancia, velocidad, unidadVelocidad);
  
      resultadoElement.textContent = `El tiempo de viaje estimado es: ${tiempoDeViaje}`;
    });
  
    function calcularTiempoDeViaje(distancia, velocidadPromedio, unidadVelocidad) {
      if (unidadVelocidad === "mph") {
        velocidadPromedio *= 1.60934;
      }
  
      const tiempoEnHoras = distancia / velocidadPromedio;
      const horas = Math.floor(tiempoEnHoras);
      const minutos = Math.round((tiempoEnHoras - horas) * 60);
  
      let tiempoLegible = "";
      if (horas > 0) {
        tiempoLegible += `${horas} ${horas === 1 ? "hora" : "horas"}`;
      }
      if (minutos > 0) {
        tiempoLegible += `${horas > 0 ? " y " : ""}${minutos} ${minutos === 1 ? "minuto" : "minutos"}`;
      }
  
      return tiempoLegible;
    }
  });
  