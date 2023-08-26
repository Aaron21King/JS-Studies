//aplicar filtro por signature
/*input : 'Js'

output:
  {
       signature: 'Js',
       koders:  ["Aaron", "Freddy"],
       mentor: 'Aaron Enciso'
  }*/

/*input: "Freddy";
output: ["Js", "HTML", "React"];*/

const generacion18 = [
    {
      signature: "Js",
      koders: ["Aaron", "Freddy"],
      mentor: "Aaron Enciso"
    },
    {
      signature: "HTML",
      koders: ["Jason", "Penny", "Freddy"],
      mentor: "Alan "
    },
    {
      signature: "CSS",
      koders: ["Arnold", "Gerald"],
      mentor: "David "
    },
    {
      signature: "Introduccion",
      koders: ["Steve", "Charlie"],
      mentor: "Elvira "
    },
    {
      signature: "React",
      koders: ["Aaron", "Harry", "Freddy"],
      mentor: "Alejandra"
    }
  ];
  
  /*-Crear una funcion que hara el filtrado y que reciba la materia
  -iterar el arreglo de generacion 18
  -hacer una comparacion de signature con la materia que pide usuario
  -si es igual imprimir en consola*/
  
  function filtrarPorMateria() {
      let materia = prompt('Ingrese una materia');
      for (let index = 0; index < generacion18.length; index++) {
          if(materia=== generacion18[index].signature){
          console.log(generacion18[index])
          }
          
      }
  };
  filtrarPorMateria()
  
  
  
  
  
  /*function generateKoders(){
      let newKoders = [];
  
      for (let index = 0; index < koders.length; index++) {
          let infoKoder ={      
          nombre :koders[index][0],
          apellido :koders[index][1],
          id: index+1
          };
          newKoders.push(newKoders);
      }
      console.log(newKoders)
      return newKoders;
  }*/