function calcularFactorial(n) {
    
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
      console.log("La entrada debe ser un número entero positivo");
      return;
    }
  
    if (n === 0) {
      console.log("0! = 1");
      return;
    }
  
    let resultado = 1;
  
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
  
    console.log(n + "! = " + resultado);
  }
  
  calcularFactorial(5);   