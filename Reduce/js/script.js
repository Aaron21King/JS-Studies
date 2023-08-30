/* ------------------------------------------------------------------------------------- */
const numbers = [1, 5, 9, 6, 2, 4];


const resultReduce = numbers.reduce(( accum, item, index, arr ) => {
    // console.log(accum)
    return item % 2 === 0 ? accum + item : accum;
}, 0);

// console.log(resultReduce)



// const resultadoDeMentores = mentorsArray.map(( mentor ) => {
//     let accum = 0;
//     mentor.scores.forEach((calificacion) => {
//         accum += calificacion.score
//     });
//     const promedio = accum / mentor.scores.length;

//     const mentorInfo = {
//         nombre: mentor.name,
//         promedio,
//     };

//     return mentorInfo;
// });


const mentorsList = mentorsArray.map(( item, index) => {
    const { scores } = item;
    const resultMentor = scores.reduce(( accum, item, index, arr) => {
        return accum + item.score
    }, 0)

    const primedio = resultMentor / item.scores.length;

    return primedio;
});

// console.log(mentorsList)




const estudiantes = [
    {
        nombre: 'jason',
        edad: 18,
    },
    {
        nombre: 'freddy',
        edad: 9,
    },
    {
        nombre: 'Penny',
        edad: 21,
    }, 
    {
        nombre: 'Arnold',
        edad: 6,
    }
];



// spread operator
// const mergeArray = [ ...estudiantes, ...estudiantesExternos ];


const personaInfo = {
    name: 'asdas',
    lastName: 'lastname'
}

const details = {
    height: 1.90,
    age: 20,
    name: 'Aaron',
    lastName: 'Enciso',
    direccion:{
        calle: 'calle cualquera',
        numero: 123
    },
}

// destructuring Objetos
const name = 'otherName'
const { direccion,  lastName, age, name: nombre } = details;

// details.name
// details.age
// details.lastName

// console.log(direccion, lastName, age, nombre,  'lastName destrucuturado')

const estudiantesExternos = [
    {
        nombre: 'Jose',
        edad: 6,
    }, 
    {
        nombre: 'Alejandra',
        edad: 6,
    }
]

const [ primerEstudiante, segundoEstudiante, tercerEstudiante ] = estudiantesExternos;
console.log(tercerEstudiante, 'primerEstudiante');



const mergeObjet = {...personaInfo, ...details, test: 'asd', test2: 'asda' }
// console.log(mergeObjet, 'mergeObjet')



const estudiantesAdultos = (estudiantesList) => {
    const result = estudiantesList.reduce((accum, item) => {
        if(item.edad >= 18) {
            return [ ...accum, item ]
        }
        return accum
    }, []);

    return result;
};

const filtro = estudiantesAdultos(estudiantes)
console.log(filtro)

// [
//     {
//         nombre: 'Aaron',
//         edad: 22,
//     },

// ]