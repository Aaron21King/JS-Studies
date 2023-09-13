const tipodeMoneda = {
    USD: 1,       
    EUR: 0.93,     
    GBP: 0.80,     
    MXN: 17.24    
  };
  
  function convertirMoneda() {
    
    let cantidadOrigen = parseFloat(document.getElementById("cantidadOrigen").value);
    let monedaDestino = document.getElementById("monedaDestino").value;
    let montoConvertido = cantidadOrigen * tipodeMoneda[monedaDestino];
  
    document.getElementById("resultado").innerHTML = `Monto convertido: ${montoConvertido.toFixed(2)} ${monedaDestino}`;
  }
  