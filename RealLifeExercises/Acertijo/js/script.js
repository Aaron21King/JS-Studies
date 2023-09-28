const acertijos = [
    {
      pregunta: "Si tienes 3 manzanas y comes 2, ¿cuántas manzanas te quedan?",
      respuesta: "2",
    },
    {
      pregunta: "Si un avión se estrella justo en la frontera entre EE. UU. y Canadá, ¿dónde entierran a los sobrevivientes?",
      respuesta: "No entierran a los sobrevivientes.",
    },
    {
      pregunta: "¿Qué pesa más, un kilogramo de plumas o un kilogramo de plomo?",
      respuesta: "Ambos pesan igual, un kilogramo.",
    },
  ];
  
  function seleccionarAcertijoAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * acertijos.length);
    return acertijos[indiceAleatorio];
  }
  
  const acertijo = seleccionarAcertijoAleatorio();
  const respuestaUsuario = prompt(acertijo.pregunta);
  
  if (respuestaUsuario.toLowerCase() === acertijo.respuesta.toLowerCase()) {
    console.log("¡Correcto! Eres un maestro de los acertijos.");
  } else {
    console.log("Oops, esa no es la respuesta correcta. La respuesta es: " + acertijo.respuesta);
  }
  