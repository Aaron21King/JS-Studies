document.addEventListener('DOMContentLoaded', function() {
    var registroForm = document.getElementById('registroForm');
    var mensaje = document.getElementById('mensaje');

    registroForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (validarNombre(nombre) && validarEmail(email) && validarPassword(password)) {
            mensaje.textContent = 'Registro exitoso.';
            mensaje.className = 'success';
        } else {
            mensaje.textContent = 'Por favor, corrija los errores en el formulario.';
            mensaje.className = 'error';
        }
    });

    function validarNombre(nombre) {
        return nombre.length >= 3;
    }

    function validarEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validarPassword(password) {
        return password.length >= 6;
    }
});
