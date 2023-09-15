document.addEventListener("DOMContentLoaded", function () {
    const contrasenaInput = document.getElementById("contrasena");
    const validarButton = document.getElementById("validar");
    const resultadoElement = document.getElementById("resultado");
  
    validarButton.addEventListener("click", function () {
      const contrasena = contrasenaInput.value;
      const esValida = validarContraseña(contrasena);
  
      if (esValida) {
        resultadoElement.textContent = "Contraseña válida.";
      } else {
        resultadoElement.textContent = "Contraseña no válida. Asegúrate de que cumple con los criterios.";
      }
    });
  
    function validarContraseña(contrasena) {
      const longitudMinima = 8;
      const contieneMayuscula = /[A-Z]/.test(contrasena);
      const contieneMinuscula = /[a-z]/.test(contrasena);
      const contieneNumero = /\d/.test(contrasena);
      const contieneCaracterEspecial = /[!@#$%^&*]/.test(contrasena);
  
      return (
        contrasena.length >= longitudMinima &&
        contieneMayuscula &&
        contieneMinuscula &&
        contieneNumero &&
        contieneCaracterEspecial
      );
    }
  });
  