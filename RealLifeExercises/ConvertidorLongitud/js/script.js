function convertirLongitud() {
    let longitudMetros = parseFloat(document.getElementById("longitudMetros").value);

    let unidadDestino = document.getElementById("unidadDestino").value.toLowerCase();

    let resultado;

    switch (unidadDestino) {
        case "centímetros":
            resultado = longitudMetros * 100;
            document.getElementById("resultado").innerHTML = `${longitudMetros} metros equivalen a ${resultado} centímetros.`;
            break;
        case "pies":
            resultado = longitudMetros * 3.28084;
            document.getElementById("resultado").innerHTML = `${longitudMetros} metros equivalen a ${resultado} pies.`;
            break;
        case "pulgadas":
            resultado = longitudMetros * 39.3701;
            document.getElementById("resultado").innerHTML = `${longitudMetros} metros equivalen a ${resultado} pulgadas.`;
            break;
        default:
            document.getElementById("resultado").innerHTML = "Unidad de destino no válida. Por favor, elija entre centímetros, pies o pulgadas.";
    }
}