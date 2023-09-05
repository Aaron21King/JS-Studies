function arrayCuadrado(arr) {
    const Cuadrado = arr.map(function(number) {
        return number * number;
    });

    return Cuadrado; 
}

console.log(arrayCuadrado([1, 2, 3, 4, 5, 6, 7]));