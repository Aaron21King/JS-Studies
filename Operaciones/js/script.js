/*------------- verdadero/falso 1----------------*/
/*if('a' > 'b'){
    console.log('entro el caso verdadero')
}else{
    console.log('entro el caso falso')
}*/

/*------------- verdadero/falso 2----------------*/
/*let nombre;
let apellido='Enciso';
let segundoApellido ='Guzman';

if(nombre){
    console.log('si existe la variable nombre')
}else if(apellido){
    console.log('si existeApellido')
}else if(segundoApellido){
    console.log('si existe segundo apellido')
}else{
    console.log('No existe ningun dato')
}


if(nombre && apellido){
    console.log('el usuario si tiene nombre y apellido')
}
else{
    console.log('no hay datos')
}*/
/*-------------------------------------------------------------------------------------------------------*/ 
/*------------------Ejercicios----------------------------------- */
/*1. Pedir al usuario dos letras, y determinar si la primera aparece antes o después en el alfabeto.*/

let letra = prompt ('Ingresa la primera letra')
let letra2 = prompt ('Ingresa la segunda letra')

function ordenAlfabeto(a,b){

    if(a<b){
        console.log('La letra',letra,'aparece antes que la letra ', letra2);
    }
    else{
        console.log('La letra',letra,' no aparece antes que la letra' , letra2);
    }
}
ordenAlfabeto(letra,letra2)

/*2. Pedir 2 datos por prompt:
- Si a > b dividir a entre b
- Si a < b sumar a más b
- si a == b multiplicar ambos numeros
Imprimir el resultado en consola*/

let numero = prompt ('Ingresa el primer numero')
let numero1 = prompt ('Ingresa el segundo numero')

numero=Number(numero);
numero1=Number(numero1);

function Operacion(a,b){

    if(a>b){
        console.log('El resultado es ', a/b);
    }else if(a<b){
        console.log('El resultado es ', a+b);
    } else if(a==b){
            console.log('El resultado es ', a*b);
     }else{
            console.log('No existe ningun dato')
        }
    
   
}
Operacion(numero, numero1)

/*3. Pedir al usuario por prompt un numero entre 1 y 100
 - Verificar si es un par o impar e imprimir en resultado en consola*/
 let numero2 = prompt ('Ingresa un numero entre 1 a 100')
 numero2=Number(numero2);

 function Par(numero2){
    if(numero2%2==0){
        
        console.log("El número "+numero2+" es par");
    
    }else{
        
        console.log("El número "+numero2+" es impar");
        
    }

 }
 
Par(numero2)

/*4- Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):

 - Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola */

 let nombre = prompt ('Ingresa tu nombre')
 let peso = prompt ('Ingresa tu peso')
 peso=Number(peso);
 Luna=Number((peso/9.81)*1.62);
 function pesolunar(peso){

        console.log(nombre, 'Tu peso en la luna es de: ', Luna,' kg')
    
    

 }
 pesolunar(peso)