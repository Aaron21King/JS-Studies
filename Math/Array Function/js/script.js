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

const alumnos = [
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
  -iterar el arreglo de alumnos
  -hacer una comparacion de signature con la materia que pide usuario
  -si es igual imprimir en consola*/
  
  function filtrarMateria() {
      let materia = prompt('Ingrese una materia');
      for (let index = 0; index < alumnos.length; index++) {
          if(materia=== alumnos[index].signature){
          console.log(alumnos[index])
          }
          
      }
  };
  filtrarMateria()
  
  
