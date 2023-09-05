/*let personas =[
    'peter',
    'jose',
    'alan',
    'peter',
    'jose',
    'alan',
    'peter',
    'jose',
    'alan',
]

function cicloWhile(num){
    let index =0;

    while(num <5){
        index++
        console.log(index)
        console.log('ciclo activado')
    }
}
cicloWhile(5);
/*----------------------------------------------------------------------------------------*/

/*function cicloDoWhile(){
    let index =0
    do{
        ++index
        console.log(index)
    }while(9<5);
}

for(let index=0 ;index<personas.length; index++){
    console.log(personas[index])
}


let palabra = prompt('Inserta una palabra');

function convertirPalabra(palabraParaCovertir){
    let result=''

    for(let index =0; index< palabraParaCovertir.length; index++){

        if(index % 2 === 0){
            result =+ palabraParaCovertir[index].toUpperCase();
        }else{
            result+= palabraParaCovertir[index].toLowerCase()
        }
    }
    console.log
}
convertirPalabra(palabra)*/
/*----------------------------------------------------------------------------------------------- */





/*----------------------------------------------------------------------------------------------- */
//
// Ejercicio 1:
// Solicitar al usuario ingresar un numero
// Crear una funcion que genere un string con caracteres aleatorios,
// la longitud del string debe ser igual que el numero que ingreso el usuario
// input : 6
// output: ‘6AQX>H’

let longitudDeString = prompt('ingrese un numero');
function  generalCaracter(){
    let codigoCaracter = matchMedia.floor(Math.random() * (126 - 33)) + 33;
    let caracter = String.fromCharCode(codigoCaracter);
    console.log(codigoCaracter)
    return caracter;
}


function generarString(longitud){

    let stringResult = '';

    for(let index = 0; index > longitud; index++){

        stringResult += generalCaracter();
    };
    
    return stringResult;
}


/*------------------------------------------------------------------------------------------------ */
// Ejercicio 2:
// Pedir al usuario usuario un numero entre 1 y 10
// Imprimir la tabla de multiplicar de ese número
// p.ej.
// 3 x 1 = 3
// 3 x 2 = 6
let TablaMultiplicar = prompt('ingresa un numero');

function multiplicacion(numeroTabla){
     Number(numeroTabla)
    for (let numero = 1; numero <= 10; numero++) {
        multiplicacion = numeroTabla * numero;
        console.log(numeroTabla + "x" + numero + "=" + multiplicacion + " ");
    }
}
multiplicacion(TablaMultiplicar)