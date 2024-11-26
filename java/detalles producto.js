const hamburgerMenu = document.getElementById("hamburgerMenu");
const navLinks = document.getElementById("navLinks");

hamburgerMenu.addEventListener("click", () => {
    console.log("hamburguesa clickeada");
    navLinks.classList.toggle("show");
});

function cargarDetallesProducto() { const productoId = localStorage.getItem("productoSeleccionadoId"); 
    const productos = JSON.parse(localStorage.getItem("productos")) || []; 
    const productoSeleccionado = productos.find(producto => producto.id == productoId); 
    if (!productoSeleccionado) { console.error("Producto no encontrado."); 
        document.querySelector(".container").innerHTML = "<p>Producto no encontrado.</p>"; 
        return; } 
        
document.querySelector(".product-image img").src = productoSeleccionado.imagen; 
document.querySelector(".product-image img").alt = productoSeleccionado.nombre; 
document.querySelector(".product-info h1").textContent = productoSeleccionado.nombre; 
document.querySelector(".product-info .description").textContent = productoSeleccionado.descripcion; 
document.querySelector(".product-info .details").textContent = productoSeleccionado.detalles; 
document.querySelector(".product-info .price").textContent = `PRECIO: ${productoSeleccionado.precio}`; } 
window.onload = cargarDetallesProducto; 
 //Código adicional para manejar el caso en que el producto no se encuentre 

const productoId = localStorage.getItem("productoSeleccionadoId"); 
const productos = JSON.parse(localStorage.getItem("productos")) || []; 
const productoSeleccionado = productos.find(p => p.id === productoId); if (productoSeleccionado) { 

     //Carga los detalles del producto seleccionado 
    console.log(productoSeleccionado); } 
    else { console.error("No se encontró el producto seleccionado."); 
        document.querySelector(".container").innerHTML = "<p>Producto no encontrado.</p>"; }

