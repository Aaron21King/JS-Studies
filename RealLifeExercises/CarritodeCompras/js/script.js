var agregarProducto = document.querySelectorAll(".agregar");
var carrito = document.getElementById("carrito");
var total1 = document.getElementById("total");

var total = 0;

agregarProducto.forEach(function (boton) {
    boton.addEventListener("click", function () {
        var producto = boton.parentElement;
        var nombre = producto.querySelector("p:nth-child(2)").textContent;
        var precio = producto.querySelector("p:nth-child(3)").textContent;
        precio = parseFloat(precio.replace("Precio: $", ""));

        var nuevoItem = document.createElement("li");
        nuevoItem.innerHTML = `${nombre} - $${precio}`;
        carrito.appendChild(nuevoItem);

        total += precio;
        total1.textContent = total.toFixed(2);
    });
});