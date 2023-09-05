/*
Ejercicio 1:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/

let contador = ('Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado')
let palabra = ('estudiante')
function contarPalabra(nombre){
    console.log(contador.replaceAll("estudiante", "Koder"));


}
let sentence = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"; 
console.log(sentence.match(/estudiante/gi)); 
let totalWords = sentence.match(/estudiante/gi); 
contarPalabra(contador);


/*
Ejercicio 2:
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/
let input1=prompt('Ingresa una oracion')
let input2=prompt('Ingresa otra oracion')

function compareString(string1,string2){
    if(string1.length>string2.length){
    console.log('la primera es mas larga');
    }else{
        console.log('la segunda es mas larga')
    }
}
console.log(compareString(input1,input2))


/*
Ejercicio 3:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/
let twoWords = prompt('Ingresa una oracion')
const myArray = twoWords.split('');
let firstWord = myArray[0]
let secondWord = myArray[1]

function compareWords(word1,word2){
    if(word1.length>word2.length){
        console.log(firstWord+ 'es mas larga');
    }else{
        console.log(secondWord+'es mas larga')
    }
}

compareWords(firstWord,secondWord)

/*
Ejercicio 4
    Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado
    output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
    "suma", 20,10 -> La suma de 20 y 10 es 30
*/
let entrada = prompt ('indicar dos valores y ejecutar la operacion seleccionada. imprimir el resultado ')
let elementoSplit = entrada.split(',');
console.log(elementoSplit);
let operacion = elementoSplit[0]

elementoSplit[1]=Number(elementoSplit[1])
elementoSplit[2]=Number(elementoSplit[2])

switch(operacion){
    case 'suma':
        console.log(elementosSplit[1]+elementoSplit[2])

        break;
    case 'resta':
        console.log(elementosSplit[1]-elementoSplit[2])
    
        break;
    case 'multiplicacion':
         console.log(elementosSplit[1]*elementoSplit[2])
        
         break;
    case 'divicion':
            console.log(elementosSplit[1]/elementoSplit[2])
        
            break;

            default: console.log('Introducir una operacion correcta')
            break;
        
}