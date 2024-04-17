document.addEventListener("DOMContentLoaded", function() {
  const listaCarrito = document.getElementById("lista-carrito");
  const botonVaciarCarrito = document.getElementById("vaciar-carrito");

  // Mostrar los productos en el carrito
  let productosEnCarrito = JSON.parse(localStorage.getItem("productos")) || [];
  productosEnCarrito.forEach(function(producto) {
    const nuevoProducto = document.createElement("li");
    nuevoProducto.innerHTML = `
      <img src="${producto.imagenSrc}" alt="${producto.nombre}">
      <span>${producto.nombre} - ${producto.precio}</span>
      <button class="eliminar-producto">Eliminar</button>
    `;
    listaCarrito.appendChild(nuevoProducto);
  });

  // Vaciar el carrito al hacer clic en el botón correspondiente
  botonVaciarCarrito.addEventListener("click", function() {
    listaCarrito.innerHTML = "";
    localStorage.removeItem("productos");
    alert("El carrito se ha vaciado correctamente.");
  });

  // Eliminar productos individuales del carrito
  listaCarrito.addEventListener("click", function(event) {
    if (event.target.classList.contains("eliminar-producto")) {
      event.target.parentElement.remove();
      // Actualizar el localStorage
      const nombreProducto = event.target.parentElement.querySelector("span").textContent.split(" - ")[0];
      productosEnCarrito = productosEnCarrito.filter(producto => producto.nombre !== nombreProducto);
      localStorage.setItem("productos", JSON.stringify(productosEnCarrito));
    }
  });
});


