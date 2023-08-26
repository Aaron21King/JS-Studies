/*const persona ={
    calcular: function(){

    }
}
let nombre ='aaron';
console.log(nombre);

let nombrePersona='aaron';
let Apellido='enciso';
let char =`${nombrePersona.charAt()} ${apellido.charAt()}`

let nombreCompleto = 'Aaron Armando Enciso Guzman'
console.log(nombreCompleto.slice(5,9))

console.log(nombrePersona.length);*/
/*----------------------------------------------------------------------------------*/


/*
Ejercicio 1:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/
let nombre =prompt('Ingresa nombre')

function contarNombre(nombreCompleto){
    console.log(nombreCompleto.replaceAll('','').length)

}
contarNombre(nombre);
/*
Ejercicio 2:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/
let vocales =prompt('Ingresa frase')

function contarVocales(vocalesContadas){
    /*Al poner aeiou dentro de la cadena solo cuenta esa letras por que son las que estan dentro de la cadena 
    y g me ayuda a encontrar las letras en la cadena de match y i no hace diferencia entre mayusculas y minusculas*/
    console.log(vocalesContadas.match(/[aeiou]/gi).length)
}
contarVocales(vocales);