let operacion = '';
let operador = '';

function limpiar() {
    document.getElementById('display').value = '';
    operacion = '';
    operador = '';
}

function agregarCaracter(caracter) {
    document.getElementById('display').value += caracter;
    operacion += caracter;
}

function agregarOperador(op) {
    if (operador === '') {
        document.getElementById('display').value += op;
        operador = op;
        operacion += op;
    }
}

function calcular() {
    try {
        const resultado = eval(operacion);
        document.getElementById('display').value = resultado;
        operacion = resultado.toString();
        operador = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
        operacion = '';
        operador = '';
    }
}