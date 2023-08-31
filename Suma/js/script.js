let solicitarNumero = prompt("Escribe un número de más de dos cifras");
let suma = 0;
console.log("Número ingresado: " + solicitarNumero)
for (let i = 0; i < solicitarNumero.length; i++){
  suma += Number(solicitarNumero[i]);
}
console.log("La suma de los dígitos del número ingresado es: " + suma);