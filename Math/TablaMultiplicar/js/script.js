// Ejercicio :
// Pedir al usuario usuario un numero entre 1 y 10
// Imprimir la tabla de multiplicar de ese número
let TablaMultiplicar = prompt('ingresa un numero');

function multiplicacion(numeroTabla){
     Number(numeroTabla)
    for (let numero = 1; numero <= 12; numero++) {
        multiplicacion = numeroTabla * numero;
        console.log(numeroTabla + "x" + numero + "=" + multiplicacion + " ");
    }
}
multiplicacion(TablaMultiplicar)