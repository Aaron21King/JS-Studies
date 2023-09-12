function convertirTemperatura() {
    const temperaturaInput = document.getElementById('temperatura');
    const unidadSelect = document.getElementById('unidad');
    const resultadoParrafo = document.getElementById('resultado');

    const temperatura = parseFloat(temperaturaInput.value);
    const unidad = unidadSelect.value;

    if (isNaN(temperatura)) {
        resultadoParrafo.textContent = 'Ingrese una temperatura válida.';
        return;
    }

    if (unidad === 'celsius') {
        const fahrenheit = (temperatura * 9/5) + 32;
        resultadoParrafo.textContent = `${temperatura}°C es igual a ${fahrenheit.toFixed(2)}°F.`;
    } else if (unidad === 'fahrenheit') {
        const celsius = (temperatura - 32) * 5/9;
        resultadoParrafo.textContent = `${temperatura}°F es igual a ${celsius.toFixed(2)}°C.`;
    }
}
