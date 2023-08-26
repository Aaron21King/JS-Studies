// Ejercio 1
// -Pedir al usuarui un numero entre el 1 y el 10
// -imprimir todos los numeros pares que existen entre 1 y el numero seleccionado
/*let numero = prompt('ingresa un numero entre el 1 y 10');
let index =2;
while(index <=numero){
    console.log(index);
    index+=2;
}*/
// Ejercicio 2
// imprimir en consla la sumaa total de todos los digitos de una cantidad
// input: 1234
// output: 10

let entryE2 = prompt("Escribe un número de más de dos cifras");
let suma = 0;
console.log("Número ingresado: " + entryE2)
for (let k = 0; k < entryE2.length; k++){
  suma += Number(entryE2[k]);
}
console.log("La suma de los dígitos del número ingresado es: " + suma);
/*const digitosDelUsuario = prompt('ingrese algunos numeros');
function sumar(digitos){
  let array = digitos.split("");
  let acumulando = 0;

  for (let index = 0; index < array.length; index++) {
     acumulando += Number (array[index]);
  }
  return acumulando
};

console.log(sumar(digitosDelUsuario));*/



// Ejercicio 3
// mostar en consola el sigueinte patron
// *
// **
// ***
// ****
// *****
// ******
// *******


function piramide(numeroAsteriscos) {
    for (let index = 1; index <= numeroAsteriscos; index++) {
      let espacio = '';
      for (let index2 = 1; index2 <= index ; index2++) {
       espacio = espacio + '*';
      }
      console.log(espacio)
    }
  }
  
  piramide(25);