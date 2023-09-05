  // -obtener el score promeddio de cada materia (HTML, CSS, JS, ReactJS)

// -obtener el promedio individual de cada mentor
// -crear un array de strings con la siguiente forma:

//     "Mi nombre es {nombre} y mi promedio es de {promedio}"
// -obtener la lista de mentores cuyo promedio sea mayor a 9.5 


const mentorsArray = [
    {
        name:"Aaron",
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
        name:"Alejandra",
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
        name:"William",
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
        name:"Jose",
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

function promedioMentorMateria (mentors){
    const numMentors = mentors.length
    let htmlTotal = 0
    let cssTotal = 0
    let jsTotal = 0
    let reactTotal = 0
    /*---------------------------------------------------*/
   
    /*--------------------------------------------------------------------------------*/

    mentors.forEach((mentor, index) => {
       // console.log(mentor)
        console.log(mentor.name)
       // console.log(mentor.scores) // scores es un array
        mentor.scores.forEach((signature)=>{
            console.log(signature)//objeto
            if(signature.signature === 'HTML') htmlTotal += signature.score 

            if(signature.signature === 'CSS') cssTotal += signature.score 

            if(signature.signature === 'JS') jsTotal += signature.score 

            if(signature.signature === 'ReactJS') reactTotal += signature.score 
        })
    })
    /*------------------------------------------------------------------------------------------*/

    /*console.log('-------totales--------')
    console.log('htmlTotal', htmlTotal)
    console.log('cssTotal', cssTotal)
    console.log('jsTotal', jsTotal)
    console.log('reactjsTotal', reactTotal)*/
    const avgHtml = htmlTotal/numMentors
    const avgCss = cssTotal/numMentors
    const avgJs = jsTotal/numMentors
    const avgReact = reactTotal/numMentors
    /*console.log('-------promedios--------')
    console.log('avgHtml', avgHtml)
    console.log('avgCss', avgCss)
    console.log('avgJs', avgJs)
    console.log('avgReact', avgReact)*/
    



    return{
        html: avgHtml,
        css: avgCss,
        js: avgJs,
        react: avgReact
    }

}

/*------------------------------------------------------------------------------------------------*/

function getAllAvgMentors (mentors) {
    let arrayMentorsAvg = []
    mentors.forEach((mentor, index) => {
        let totalMentor = 0
        let numSignature = mentor.scores.length
        mentor.scores.forEach((signature) => {
            totalMentor += signature.score
        })
        let avgMentor = totalMentor / numSignature
        // console.log(mentor.name)
        // console.log('avgMentor', avgMentor)
        const newDataMentor = {
            name: mentor.name,
            average: avgMentor
        }
        arrayMentorsAvg.push(newDataMentor)
    })
    return arrayMentorsAvg 
}


const averageMentors = getAllAvgMentors(mentorsArray)
console.log('Average de todos los mentores: ', averageMentors)

// 
// filter
function filterMentors (mentors) {
    const mentorsFiltered = []
    mentors.forEach((mentor) => {
        if(mentor.average >= 9) {
            mentorsFiltered.push(mentor)
        }
    })
    return mentorsFiltered
}

filterMentors(averageMentors)

// lista "Mi nombre es {nombre} y mi promedio es de {promedio}"
/*
Output:
[
    "Mi nombre es William y mi promedio es de 9.25",
    "Mi nombre es Aaron y mi promedio es de 9.25",
    "Mi nombre es Ale y mi promedio es de 9.25",
    "Mi nombre es Jose y mi promedio es de 9.25"
]
*/


// map
function mentorsList (mentors) {
    const mentorsLabels = []
    mentors.forEach((mentor) => {
        const label = `Mi nombre es ${mentor.name} y mi promedio es de ${mentor.average}`
        mentorsLabels.push(label)
    })
    return mentorsLabels
}

const mentorsLabels = mentorsList(averageMentors)
console.log(mentorsLabels)