document.addEventListener('DOMContentLoaded', function() {
    var calcularBtn = document.getElementById('calcularBtn');

    calcularBtn.addEventListener('click', function() {
        calcularPagosMensuales();
    });

    function calcularPagosMensuales() {
        var montoPrestamo = parseFloat(document.getElementById('montoPrestamo').value);
        var tasaInteres = parseFloat(document.getElementById('tasaInteres').value);
        var plazoAnos = parseFloat(document.getElementById('plazoAnos').value);

        if (!isNaN(montoPrestamo) && !isNaN(tasaInteres) && !isNaN(plazoAnos)) {
            var tasaInteresMensual = tasaInteres / 12 / 100;
            var plazoMeses = plazoAnos * 12;

            var pagosMensuales = (montoPrestamo * tasaInteresMensual) /
                (1 - Math.pow(1 + tasaInteresMensual, -plazoMeses));

            document.getElementById('pagosMensuales').textContent = pagosMensuales.toFixed(2);
        } else {
            alert('Por favor, ingrese valores válidos para el monto del préstamo, la tasa de interés y el plazo.');
        }
    }
});
