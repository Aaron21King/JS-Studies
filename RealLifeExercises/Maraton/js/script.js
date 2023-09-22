const distanciaMaraton = 30000;

let posicionCorredor = 0;

const velocidadCorredor = 2.5; 

function correrMaraton() {
  const tiempoTranscurrido = posicionCorredor / velocidadCorredor;

  posicionCorredor += velocidadCorredor;

  console.log(`Tiempo transcurrido: ${tiempoTranscurrido.toFixed(2)} segundos`);
  console.log(`Distancia recorrida: ${posicionCorredor.toFixed(2)} metros`);

  if (posicionCorredor >= distanciaMaraton) {
    console.log("¡El corredor ha terminado el maratón!");
    clearInterval(intervalo); 
  }
}

const intervalo = setInterval(correrMaraton, 1000);
