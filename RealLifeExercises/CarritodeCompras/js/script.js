var agregarBotones = document.querySelectorAll(".agregar");
var carrito = document.getElementById("carrito");
var totalSpan = document.getElementById("total");

var total = 0;

agregarBotones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        var producto = boton.parentElement;
        var nombre = producto.querySelector("p:nth-child(2)").textContent;
        var precio = producto.querySelector("p:nth-child(3)").textContent;
        precio = parseFloat(precio.replace("Precio: $", ""));

        var nuevoItem = document.createElement("li");
        nuevoItem.innerHTML = `${nombre} - $${precio}`;
        carrito.appendChild(nuevoItem);

        total += precio;
        totalSpan.textContent = total.toFixed(2);
    });
});