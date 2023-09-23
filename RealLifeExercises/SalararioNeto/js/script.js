function calcularSalarioNeto(salarioBruto) {
    const tasasDeImpuestos = {
      rango1: { limite: 10000, tasa: 0.1 },
      rango2: { limite: 20000, tasa: 0.2 },
      rango3: { limite: 30000, tasa: 0.3 },
      rango4: { limite: Infinity, tasa: 0.4 },
    };
  
    const deducciones = {
      seguroSocial: 1000,
      seguroMedico: 500,
      otrosDeducciones: 200,
    };
  
    let impuesto = 0;
    for (const rango in tasasDeImpuestos) {
      if (salarioBruto <= tasasDeImpuestos[rango].limite) {
        impuesto = salarioBruto * tasasDeImpuestos[rango].tasa;
        break;
      }
    }
    const salarioNeto = salarioBruto - impuesto - deducciones.seguroSocial - deducciones.seguroMedico - deducciones.otrosDeducciones;
  
    return salarioNeto;
  }
  
  const salarioBrutoEjemplo = 25000;
  const salarioNetoEjemplo = calcularSalarioNeto(salarioBrutoEjemplo);
  console.log(`Salario neto después de impuestos y deducciones: $${salarioNetoEjemplo}`);
  