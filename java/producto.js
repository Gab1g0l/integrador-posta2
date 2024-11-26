const hamburgerMenu = document.getElementById("hamburgerMenu");
const navLinks = document.getElementById("navLinks");

hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

function comprarProducto(url) {
    window.location.href = url;
}

function irADetalles(idProducto) {
    if (!idProducto) {
        console.error("No se proporcionó un ID de producto válido.");
        return;
    }
    localStorage.setItem("productoSeleccionadoId", idProducto); // Guardar el ID del producto
    window.location.href = "detalle producto.html"; // Cambia por la URL real
}



const productosS = [
    {
        id: 1,
        nombre: "Cámara Fotográfica Canon Rebel T100",
        descripcion: "Cámara ideal para principiantes en fotografía.",
        detalles: "Se conecta por Wi-Fi. Tiene flash incorporado.",
        precio: "$1.382.789",
        imagen: "../assets/Producto1.png",
    },
    {
        id: 2,
        nombre: "Cámara Nikon D3500",
        descripcion: "Alta calidad para fotografía y video.",
        detalles: "Resolución de 24.2 MP, conectividad Bluetooth.",
        precio: "$1.479.999",
        imagen: "../assets/Producto2.png",
    },
    // Agrega más productos aquí
];

// Guarda los productos en localStorage si no están ya guardados
if (!localStorage.getItem("productos")) {
    localStorage.setItem("productos", JSON.stringify(productos));
}


function seleccionarProducto(idProducto) {
    localStorage.setItem("productoSeleccionadoId", idProducto);
    window.location.href = "detalle producto 1.html"; // Cambia al nombre real de tu página de detalles
}


 // Función para cargar productos desde el localStorage
        function cargarProductos() {
            const productGrid = document.getElementById('product-grid2');
            const productos = JSON.parse(localStorage.getItem('productos')) || [];

            if (productos.length === 0) {
                console.warn("No se encontraron productos en el localStorage.");
                return;
            }
        
            productos.forEach((producto, index) => {
                // Asegurar que cada producto tenga un ID único
                if (!producto.id) {
                    producto.id = `producto-${index}`; // Generar un ID único basado en el índice
                }

            productos.forEach(producto => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card4'; // Usa la clase para aplicar el CSS
                productCard.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>PRECIO: $${producto.precio}</p>
                    <button class="buy-button7">Comprar</button> <!-- Botón para comprar -->
                `;
                productCard.onclick = () => irADetalles(producto.id);
                productGrid.appendChild(productCard);
            });
        })}

        // Cargar productos al iniciar la página
        window.onload = cargarProductos;