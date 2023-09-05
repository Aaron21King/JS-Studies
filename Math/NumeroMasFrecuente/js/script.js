function numeroMasFrecuente(arr) {
    let frecuencia = {};
    let numeroMasFrecuente = arr[0];
    let maxFrecuencia = 1;

    for (let i = 0; i < arr.length; i++) {
        const numero = arr[i];

        if (frecuencia[numero]) {
            frecuencia[numero]++;
        } else {
            frecuencia[numero] = 1;
        }
        if (frecuencia[numero] > maxFrecuencia) {
            maxFrecuencia = frecuencia[numero];
            numeroMasFrecuente = numero;
        }
    }

    return numeroMasFrecuente;
}

console.log(numeroMasFrecuente([3, 2, 2, 1, 3, 2, 4, 5, 5, 5, 4, 1, 4, 4, 6, 8, 4]));