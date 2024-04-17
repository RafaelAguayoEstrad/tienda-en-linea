// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Obtener todos los botones "Agregar al Carrito"
  const botonesAgregar = document.querySelectorAll(".btn-comprar");

  // Agregar evento de clic a cada botón "Agregar al Carrito"
  botonesAgregar.forEach(function(boton) {
    boton.addEventListener("click", function() {
      // Obtener la información del producto
      const producto = {
        imagenSrc: boton.parentElement.parentElement.querySelector("img").getAttribute("src"),
        nombre: boton.parentElement.querySelector("h3").textContent,
        precio: boton.parentElement.querySelector(".precio").textContent
      };

      // Agregar el producto al carrito
      agregarAlCarrito(producto);
    });
  });
});

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  let productosEnCarrito = JSON.parse(localStorage.getItem("productos")) || [];
  productosEnCarrito.push(producto);
  localStorage.setItem("productos", JSON.stringify(productosEnCarrito));
  alert("Producto agregado al carrito correctamente.");
}



//encargado de la busqueda de articulos 

document.addEventListener("DOMContentLoaded", function() {
  // Obtener el campo de búsqueda
  const searchBar = document.getElementById("search-bar");

  // Agregar evento de entrada al campo de búsqueda
  searchBar.addEventListener("input", function() {
    // Obtener el valor del campo de búsqueda
    const searchTerm = searchBar.value.toLowerCase();

    // Obtener todos los productos
    const productos = document.querySelectorAll(".producto");

    // Iterar sobre todos los productos y mostrar u ocultar según el término de búsqueda
    productos.forEach(function(producto) {
      const nombreProducto = producto.querySelector("h3").textContent.toLowerCase();
      if (nombreProducto.includes(searchTerm)) {
        producto.style.display = "block";
      } else {
        producto.style.display = "none";
      }
    });
  });
});


// Recuperar el nombre de usuario almacenado 
    var username = localStorage.getItem("username");

    // Mostrar el nombre de usuario en la interfaz
    var userInfoDiv = document.getElementById("user-info");
    if (username) {
      userInfoDiv.textContent = "Usuario: " + username;
    } else {
      userInfoDiv.textContent = "Usuario no registrado";
    }