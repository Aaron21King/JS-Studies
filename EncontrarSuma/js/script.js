function encontrarSuma(array, objetivo) {
  let numerosArray = [];

  function buscarSuma(actual, indice) {
    if (actual.reduce((a, b) => a + b, 0) === objetivo) {
      numerosArray = actual.slice();
      return;
    }

    for (let i = indice; i < array.length; i++) {
      actual.push(array[i]); 
      buscarSuma(actual, i + 1); 
      actual.pop(); 
    }
  }

  buscarSuma([], 0);

  if (numerosArray.length > 0) {
    return numerosArray;
  } else {
    return "No se encontró ninguna suma que de el resultado del numero elegido.";
  }
}

console.log(encontrarSuma([2, 20, 15, 7, 5, 57], 14)); 
console.log(encontrarSuma([2, 20, 15, 7, 5, 57], 1)); 