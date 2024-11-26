document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const navLinks = document.getElementById("navLinks");

    hamburgerMenu.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
});

const form = document.getElementById('product-form');
const productTableBody = document.getElementById('product-table-body');


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const nombre = document.getElementById('nombre-producto').value;
    const descripcion = document.getElementById('descripcion-producto').value;
    const precio = document.getElementById('precio-producto').value;
    const imagen = document.getElementById('imagen-producto').files[0];
 

    
    const producto = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        imagen: URL.createObjectURL(imagen),
    };

   
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    
    productos.unshift(producto);
   
    localStorage.setItem('productos', JSON.stringify(productos));

   
    form.reset();
    alert('Producto guardado exitosamente!');
    
    window.location.href = "carga de productos.html";
});
// Función para cargar productos desde el localStorage
function cargarProductos() {
    const productGrid = document.getElementById('product-grid');
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    productos.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card'; // Usa la clase para aplicar el CSS
        productCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>PRECIO: $${producto.precio}</p>
            <button class="buy-button">Comprar</button> <!-- Botón para comprar -->
        `;
        productCard.onclick = () => irADetalles(producto.detalleLink);
        productGrid.appendChild(productCard);
    });
}

// Simulación de función de detalles de producto
function irADetalles(url) {
    window.location.href = url;
}
// Función para cargar productos desde el localStorage
function cargarProductos() {
const productGrid = document.getElementById('product-grid');
const productos = JSON.parse(localStorage.getItem('productos')) || [];

// Limpiar el grid antes de agregar productos para evitar duplicados
productGrid.innerHTML = '';

// Crear la tabla HTML y el encabezado
const table = document.createElement('table');
table.className = 'product-table';

const tableHeader = `
<tr>
    <th>Imagen</th>
    <th>Nombre</th>
    <th>Descripción</th>
    <th>Precio</th>
    <th>Acciones</th>
</tr>
`;
table.innerHTML = tableHeader;

// Agregar cada producto como una fila en la tabla
productos.forEach((producto, index) => {
const row = document.createElement('tr');
row.innerHTML = `
    <td><img src="${producto.imagen}" alt="${producto.nombre}" width="50" height="50"></td>
    <td>${producto.nombre}</td>
    <td>${producto.descripcion}</td>
    <td>$${producto.precio}</td>
    <td>
    
        <button class="delete-button" onclick="eliminarProducto(${index})">Eliminar</button>
    </td>
`;
table.appendChild(row);
});

productGrid.appendChild(table);
}

// Función para eliminar un producto
function eliminarProducto(index) {
const productos = JSON.parse(localStorage.getItem('productos')) || [];
productos.splice(index, 1); // Eliminar el producto seleccionado
localStorage.setItem('productos', JSON.stringify(productos)); // Guardar los cambios en localStorage
cargarProductos(); // Recargar la lista de productos
}

// Cargar productos al iniciar la página
window.onload = cargarProductos();



