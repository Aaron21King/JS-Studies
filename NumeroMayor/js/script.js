function encontrarNumeroMayor(array) {
    
    if (array.length === 0) {
      return undefined; 
    }
  
    let numeroMayor = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > numeroMayor) {
        numeroMayor = array[i];
      }
    }
  
    return numeroMayor;
  }
  
  console.log(encontrarNumeroMayor([10, 45, 12, 28, 68, 52])); 