function piramide(numeroAsteriscos) {
    for (let index = 1; index <= numeroAsteriscos; index++) {
      let espacio = '';
      for (let index2 = 1; index2 <= index ; index2++) {
       espacio = espacio + '*';
      }
      console.log(espacio)
    }
  }
  
  piramide(5);
  piramide(20);