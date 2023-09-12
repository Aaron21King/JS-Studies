function calcularEdad() {
    const fechaNacimientoInput = document.getElementById('fechaNacimiento');
    const resultadoParrafo = document.getElementById('resultado');

    const fechaNacimiento = new Date(fechaNacimientoInput.value);
    const hoy = new Date();

    if (isNaN(fechaNacimiento.getTime())) {
        resultadoParrafo.textContent = 'Ingrese una fecha de nacimiento válida.';
        return;
    }

    const diferencia = hoy - fechaNacimiento;
    const edad = Math.floor(diferencia / (365. * 24 * 60 * 60 * 1000));

    resultadoParrafo.textContent = `Tienes ${edad} años de edad.`;
}
