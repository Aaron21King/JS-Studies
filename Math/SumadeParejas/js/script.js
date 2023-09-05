function SumadeParejas(arr, objetivo) {
    const parejas = [];
    const posicionNumero = {};

    for (let i = 0; i < arr.length; i++) {
        const numeroActual = arr[i];
        const complemento = objetivo - numeroActual;

        if (posicionNumero[complemento] !== undefined) {
            parejas.push([numeroActual, complemento]);
        }

        posicionNumero[numeroActual] = i;
    }

    return parejas;
}

console.log(SumadeParejas([1, 2, 3, 4, 5, 6, 7], 8));