const personajes = ["Aaron", "William", "Jose", "Alejandra"];
const lugares = ["el bosque", "la playa", "una montaña", "una ciudad"];
const objetos = ["un mapa", "una espada", "un cofre del tesoro", "un pergamino"];
const eventos = ["encontró un tesoro escondido", "derrotó a un dragón", "rescató a un gato perdido", "exploró un mundo mágico"];

function generarHistoria() {
  const personaje = personajes[Math.floor(Math.random() * personajes.length)];
  const lugar = lugares[Math.floor(Math.random() * lugares.length)];
  const objeto = objetos[Math.floor(Math.random() * objetos.length)];
  const evento = eventos[Math.floor(Math.random() * eventos.length)];

  const historia = `${personaje} fue a ${lugar} con ${objeto} y ${evento}.`;

  console.log(historia);
}

generarHistoria();
