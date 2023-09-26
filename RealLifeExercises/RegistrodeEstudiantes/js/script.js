function Estudiante(nombre, edad, calificaciones) {
    this.nombre = nombre;
    this.edad = edad;
    this.calificaciones = calificaciones;
  }
  
  Estudiante.prototype.calcularPromedio = function () {
    const sumaCalificaciones = this.calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    return sumaCalificaciones / this.calificaciones.length;
  };
  
  function mostrarInformacionEstudiante(estudiante) {
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Edad: ${estudiante.edad}`);
    console.log(`Calificaciones: ${estudiante.calificaciones.join(', ')}`);
    console.log(`Promedio de Calificaciones: ${estudiante.calcularPromedio()}`);
  }
  
  const estudiante1 = new Estudiante("Aaron", 22, [85, 90, 78, 92, 88]);
  const estudiante2 = new Estudiante("William", 28, [75, 82, 90, 88, 94]);
  
  mostrarInformacionEstudiante(estudiante1);
  console.log("------------------");
  mostrarInformacionEstudiante(estudiante2);
  