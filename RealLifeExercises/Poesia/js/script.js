const sustantivos = ["luna", "rosa", "mar", "sol", "montaña"];
const adjetivos = ["brillante", "silenciosa", "misteriosa", "inmensa", "tranquila"];
const verbos = ["brilla", "susurra", "llama", "acaricia", "envuelve"];

function palabraAleatoria(lista) {
  const indiceAleatorio = Math.floor(Math.random() * lista.length);
  return lista[indiceAleatorio];
}

function generarLineaDePoesia() {
  const sustantivo = palabraAleatoria(sustantivos);
  const adjetivo = palabraAleatoria(adjetivos);
  const verbo = palabraAleatoria(verbos);
  return `${sustantivo} ${adjetivo} ${verbo}`;
}

function generarPoesia(cantidadLineas) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  for (let i = 0; i < cantidadLineas; i++) {
    const linea = generarLineaDePoesia();
    resultado.innerHTML += `<p>${linea}</p>`;
  }
}

const botonGenerarPoesia = document.getElementById("generarPoesia");
botonGenerarPoesia.addEventListener("click", function () {
  const cantidadLineas = parseInt(document.getElementById("cantidadLineas").value);
  if (!isNaN(cantidadLineas)) {
    generarPoesia(cantidadLineas);
  } else {
    alert("Por favor, ingrese un número válido.");
  }
});
