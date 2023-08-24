/*----------------------------suma-------------------------------*/

function sumar(num1,num2){
    return num1 + num2
};
console.log(sumar(4,5))
/*-----------------perro ladrando----------------------------------*/

const ladrar= function (){
    console.log('Se ejecuto la funcion')
    return 'guau guau!';
};
console.log(ladrar())

/*--------------------------Nombre--------------------------------*/ 
let nombre='Aaron';
let apellido='Enciso';

function persona(){
    console.log(nombre);
    console.log(apellido);
}

persona()

/*----------------------Usuario------------------------------*/

let usuario = prompt ('Ingresa un usuario')
console.log(usuario);

let numero1 = prompt ('Ingresa un numero')
let numero2 = prompt ('Ingresa otro numero')

numero1=Number(numero1);
numero2=Number(numero2);

console.log(numero1+numero2);

/*------------------Operadores aritmeticos---------------- */

const name = 'aaron' + ' enciso';
const fullName =`${name} este es mi nombre`;
console.log(fullName)