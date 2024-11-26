const hamburgerMenu = document.getElementById("hamburgerMenu");
const navLinks = document.getElementById("navLinks");

hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

function comprarProducto(url) {
    window.location.href = url;
}

        // Función para redirigir a la página de detalles del producto
function irADetalles(idProducto) {
    if (!idProducto) {
        console.error("No se proporcionó un ID de producto válido.");
        return;
    }
    localStorage.setItem("productoSeleccionadoId", idProducto); // Guardar el ID en localStorage
    window.location.href = "detalle producto 1.html"; // Cambia por la URL real
}

// Función para cargar productos desde localStorage
function cargarProductos() {
    const productGrid = document.getElementById('product-grid2');
    const productos = JSON.parse(localStorage.getItem('productos')) || []; // Recuperar productos

    if (productos.length === 0) {
        console.warn("No se encontraron productos en el localStorage.");
        return;
    }

    productos.forEach((producto, index) => {
        // Asegurar que cada producto tenga un ID único
        if (!producto.id) {
            producto.id = `producto-${index}`; // Generar un ID único basado en el índice
        }

        // Crear la tarjeta del producto
        const productCard = document.createElement('div');
        productCard.className = 'product-card4'; // Clase CSS para el estilo

        // Contenido de la tarjeta
        productCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>PRECIO: $${producto.precio}</p>
            <button class="buy-button7">Comprar</button> <!-- Botón para comprar -->
        `;

        // Asignar evento click a la tarjeta
        productCard.onclick = () => irADetalles(producto.id);

        // Agregar la tarjeta al contenedor
        productGrid.appendChild(productCard);
    });

    // Guardar nuevamente los productos con los IDs generados (si no existían previamente)
    localStorage.setItem('productos', JSON.stringify(productos));
}

// Cargar productos al iniciar la página
window.onload = cargarProductos;