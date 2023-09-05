/*let estudiantes =['Aaron Enciso', 'William Enciso', 'Alejandra Guzman']

let usuarios =[]
let numero =1
estudiantes.forEach((item, index, arr)=>{
  info=('alumno'+ (index+1) +': '+item);
  usuarios.push(info)
})

console.log(usuarios)*/




/*Ejercicio 2

input:
[
  {
    alumno: 'Aaron',
    score: 8,
  },
  {
    alumno: 'William',
    score: 8,
  },
  {
    alumno: 'Josue',
    score: 8,
  },
  {
    alumno: 'Ximena',
    score: 8,
  },
  {
    alumno: 'Brenda',
    score: 8,
  }
];*/


/*<60 F
<70 D
<80 C
<90 B
<100 A


output: {
  promedio del grupo: 90
  calificacion del grupo: A
}*/
let calificaciones =[
    {
      alumno: 'Aaron',
      score: 9,
    },
    {
      alumno: 'William',
      score: 8,
    },
    {
      alumno: 'Josue',
      score: 10,
    },
    {
      alumno: 'Ximena',
      score: 8,
    },
    {
      alumno: 'Brenda',
      score: 10,
    }
  ];
  
  let promedio = 0;
  let personas = calificaciones.length;
  
  calificaciones.forEach((item,index,arr)=>{
    calif = calificaciones[index].score
    promedio += calif
  
  })
  let promedioGeneral = (promedio/personas)
  console.log(Number(promedioGeneral))
  
  function resultadoP(promedioGeneral){
    if(promedioGeneral == 6){
      console.log('TU calificacion es F')
    }
    else if(promedioGeneral == 7){
      console.log('TU calificacion es D')
    }
    else if(promedioGeneral == 8){
      console.log('TU calificacion es C')
    }
    else if(promedioGeneral == 9){
      console.log('TU calificacion es B')
    }
    else if(promedioGeneral == 10){
      console.log('TU calificacion es A')
    }
  }
  
  resultadoP(promedioGeneral)