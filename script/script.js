document.addEventListener("DOMContentLoaded", function() {
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");

  sidebarToggle.addEventListener("click", function() {
    if (sidebar.style.left === "-250px") {
      sidebar.style.left = "0";
      document.body.classList.remove("sidebar-collapsed");
      document.body.classList.add("sidebar-opened");
    } else {
      sidebar.style.left = "-250px";
      document.body.classList.add("sidebar-collapsed");
      document.body.classList.remove("sidebar-opened");
    }
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const botonesComprar = document.querySelectorAll(".btn-comprar");

  botonesComprar.forEach(function(boton) {
    boton.addEventListener("click", function() {
      const producto = boton.closest(".producto");
      const nombre = producto.querySelector("h3").textContent;
      const precio = producto.querySelector(".precio").textContent;

      // Crear un objeto representando el producto
      const nuevoProducto = {
        nombre: nombre,
        precio: precio
      };

      // Obtener los productos del localStorage (si existen)
      let productosEnCarrito = JSON.parse(localStorage.getItem("productos")) || [];

      // Agregar el nuevo producto al arreglo
      productosEnCarrito.push(nuevoProducto);

      // Guardar los productos en localStorage
      localStorage.setItem("productos", JSON.stringify(productosEnCarrito));

      // Limpiar el input de búsqueda
      document.getElementById("search-bar").value = "";

      // Mostrar una alerta de éxito
      alert("El producto se ha agregado al carrito correctamente.");
    });
  });
});

