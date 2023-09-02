function generarContraseña(longitud) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let contraseña = "";
  
    for (let i = 0; i < longitud; i++) {
      const contraseñaAleatorio = Math.floor(Math.random() * caracteres.length);
      contraseña += caracteres.charAt(contraseñaAleatorio);
    }
  
    return contraseña;
  }
  
  console.log(generarContraseña(12)); 