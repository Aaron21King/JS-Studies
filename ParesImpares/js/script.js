function sumarParesImpares(arr) {
    
    let sumaPares = 0;
    let sumaImpares = 0;

    arr.forEach(function(numero) {
        if (numero % 2 === 0) {
            sumaPares += numero;
        } else {
            sumaImpares += numero;
        }
    });

    return {
        sumaPares: sumaPares,
        sumaImpares: sumaImpares
    };
}
console.log(sumarParesImpares([1, 2, 3, 4, 5, 6]));