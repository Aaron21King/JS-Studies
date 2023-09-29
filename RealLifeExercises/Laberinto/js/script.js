const tamañoLaberinto = 11;

function crearLaberinto(tamaño) {
  const laberinto = [];
  for (let i = 0; i < tamaño; i++) {
    laberinto[i] = [];
    for (let j = 0; j < tamaño; j++) {
      laberinto[i][j] = 1; 
    }
  }
  return laberinto;
}

function imprimirLaberinto(laberinto) {
  for (let i = 0; i < laberinto.length; i++) {
    console.log(laberinto[i].join(' '));
  }
}

function generarLaberintoDFS(laberinto, fila, columna) {
  const direcciones = [[-2, 0], [0, 2], [2, 0], [0, -2]];
  const aleatorias = [0, 1, 2, 3].sort(() => Math.random() - 0.5);

  for (let i = 0; i < 4; i++) {
    const dirección = direcciones[aleatorias[i]];
    const nuevaFila = fila + dirección[0];
    const nuevaColumna = columna + dirección[1];

    if (nuevaFila >= 0 && nuevaFila < laberinto.length && nuevaColumna >= 0 && nuevaColumna < laberinto[0].length && laberinto[nuevaFila][nuevaColumna] === 1) {
      laberinto[nuevaFila][nuevaColumna] = 0;
      laberinto[fila + dirección[0] / 2][columna + dirección[1] / 2] = 0;
      generarLaberintoDFS(laberinto, nuevaFila, nuevaColumna);
    }
  }
}

const laberinto = crearLaberinto(tamañoLaberinto);
const inicioFila = 0;
const inicioColumna = 0;
laberinto[inicioFila][inicioColumna] = 0;
generarLaberintoDFS(laberinto, inicioFila, inicioColumna);

imprimirLaberinto(laberinto);
