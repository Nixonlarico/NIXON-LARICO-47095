let carrito = [];
let total = 0.00;
let nombre = '';
let celular = '';
let direccion = '';

function solicitarInformacion() {
    // Solicitar información solo si no se ha ingresado previamente
    if (!nombre) {
        nombre = prompt('Ingrese su nombre:');
        document.getElementById("nombre").textContent = nombre;
    }

    if (!celular) {
        celular = prompt('Ingrese su número de celular:');
        document.getElementById("celular").textContent = celular;
    }

    if (!direccion) {
        direccion = prompt('Ingrese su dirección de entrega:');
        document.getElementById("direccion").textContent = direccion;
    }
}

function agregarAlCarrito(producto, precio) {
    solicitarInformacion();

    const cantidad = parseInt(prompt(`Ingrese la cantidad de "${producto}" que desea comprar:`));

    if (!isNaN(cantidad) && cantidad > 0) {
        const indiceExistente = carrito.findIndex(item => item.producto === producto);

        if (indiceExistente !== -1) {
            // Si el producto ya está en el carrito, actualiza la cantidad
            carrito[indiceExistente].cantidad = cantidad;
        } else {
            // Si el producto no está en el carrito, agrégalo
            carrito.push({ producto, precio, cantidad });
        }

        actualizarCarrito();
    } else {
        alert('Por favor, ingrese una cantidad válida.');
    }
}

function actualizarCarrito() {
    const carritoElement = document.getElementById("carrito");
    const totalElement = document.getElementById("total");

    carritoElement.innerHTML = "";
    total = 0;

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.producto} (Cantidad: ${item.cantidad}) - PEN ${(item.precio * item.cantidad).toFixed(2)}`;
        carritoElement.appendChild(li);

        // Actualiza el total
        total += item.precio * item.cantidad;
    });

    totalElement.textContent = total.toFixed(2);
}

function reiniciarProceso() {
    carrito = [];
    total = 0.00;
    nombre = '';
    celular = '';
    direccion = '';

    // Limpiar elementos en el DOM
    document.getElementById("nombre").textContent = '';
    document.getElementById("celular").textContent = '';
    document.getElementById("direccion").textContent = '';
    document.getElementById("carrito").innerHTML = '';
    document.getElementById("total").textContent = '0.00';
}
