//.map => retorna un nuevo arreglo con la misma cantidad de elementos que tiene el arreglo que se itero



// const numeros = [2, 5, 6, 1];

// const numerosConCalculo = numeros.map((item, index, arr) => {
//     if(item < 3) {
//         return item 
//     }
// });

// const numerosFiltrados = numeros.filter((item, index) => item < 3);

// const numerosFiltrados = numeros.filter((item) => {
//     if(item < 3) {
//         return item 
//     }
// });

// console.log(numerosFiltrados)
// [ 2, 1]



// const numerosConCalculoForEach = numeros.forEach((item, index, arr) => {
//     return item + 3;
// });



const personas = [
    {
        nombre: 'jason',
        edad: 9,
    },
    {
        nombre: 'freddy',
        edad: 9,
    },
    {
        nombre: 'Penny',
        edad: 9,
    }, 
    {
        nombre: 'Arnold',
        edad: 9,
    }
];

// ['jason', 'freddy', 'Penny', 'Arnold']

const nombres = personas.map((item) => {
    // const frase = `hola soy ${item.nombre} y tengo ${item.edad}`
    return {
        villano: item.nombre,
        age: item.edad
    };
});

// - Crear una lista con los proffesors y sus promedios
// -obtener la lista d proffesors cuyo promedio sea mayor a 9.5 




constproffesorArray = [
  {
      name:"Aaron Enciso",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:8
          },
          {
              signature:"ReactJS",
              score:8
          }
      ]
  },
  {
      name:"Jose William",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:7
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:10
          }
      ]
  },
  {
      name:"Alan Castillo",
      scores:[
          {
              signature:"HTML",
              score:9
          },
          {
              signature:"CSS",
              score:9
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:9
          }
      ]
  },
  {
      name:"Oscar Guzman",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:9
          },
          {
              signature:"ReactJS",
              score:10
          }
      ]
  },
  {
    name:"Pepito Pepita",
    scores:[
        {
            signature:"HTML",
            score:8
        },
        {
            signature:"CSS",
            score:10
        },
        {
            signature:"JS",
            score:9
        },
        {
            signature:"ReactJS",
            score:10
        }
    ]
}
]

const resultadodeProfesores =proffesorArray.map((profesor ) => {
    let accum = 0;
   profesor.scores.forEach((calificacion) => {
        accum += calificacion.score
    });
    const promedio = accum /profesor.scores.length;

    constprofesorInfo = {
        nombre:profesor.name,
        promedio,
    };

    returnprofesorInfo;
});

const aprovados = resultadodeProfesores.filter(( promedio ) => {
    if(promedio.promedio > 9) {
        return promedio;
    }
});


console.log(resultadodeProfesores);
console.log(aprovados);
// [
//     {
//         nombre: 'asdas',
//         promedio: 9,
//     },
//     {
//         nombre: 'adfdf',
//         promedio: 9,
//     }
// ]


// - Crear un nuevo arreglo con losproffesors cuyo nombre inicien con una vocal 
// - Crear un nuevo arreglo con las inciales de cadaprofesor 

// input : [
//     'Aaron Enciso'
// ]

// outpu: [
//     I.D.A
// ] 
const resultado =proffesorArray.filter((proffesor)=>{
if(proffesor.name[0].match(/[aeiou]/i)){
    returnprofesor;
}

})
//-----------------------------------------------------------------------------------------------------------------------------------------
console.log(resultado)

const formaterNombre = (proffesors) =>{
    const result =proffesors.map((item)=>{
      const arrayName = item.name.split(" ");
      let accum = '';

      arrayName.forEach((firstletter)=>{
         accum += firstletter.charAt(0) + '.'
      });
      return accum;
    })
    return result;


};

const formatted = formaterNombre(proffesorsArray)
console.log(formatted)