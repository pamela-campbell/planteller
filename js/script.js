//Tienda

//carrito 
class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

//Array vacio para almacenar el push de los objetos de la funcion cargarProductos
const productos = [];

//Array vacio  para almacenar el push de los objetos de agregarAlCarrito 
let carrito = [];

// Storage guardar la info de la selección de productos
if (localStorage.getItem("carrito") != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

//Ejecuto la funcion para cargar los productos al array
cargarProductos();

//Ejecuto la funcion para dibujar las cards de los productos ya cargados
dibujarProductos();

//Funcion para cards  de productos de la tienda 

function dibujarProductos() {
    let cards = document.getElementById("cards");
    for (const producto of productos) {
        let card = document.createElement("div");
        card.className = "card col-md-3";
        card.innerHTML = `
        <div class="card-body">
        <img class="card-img-top" src="${producto.foto}" alt="Card image cap">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$ ${producto.precio}</p>
            
            <button class="btn buttonStyles" id="botonIsbn${producto.isbn}"> Lo quiero </button>
        </div>
    `;
        cards.append(card);
    }

    //Funcion para  dibujar, pushear al array vacio los de productos seleccionados y guardarlos
    function agregarAlCarrito(producto) {
        carrito.push(producto);
        document.getElementById("tablabody").innerHTML += `
            <tr>
                <td>${producto.isbn}</td>
                <td>${producto.nombre}</td>
                <td><input id="cantidad-producto-${producto.isbn}" type="number" value="${1}" min="1" max="20" step="1" style="width: 70px;"/></td>
                <td>$ ${producto.precio}</td>
                <td>$ ${producto.precio*1}</td>
                </tr>
        `;
        sumaCarrito+=elemento.cantidad*elemento.producto.precio;

            //agregamos evento a carrito
            let cantidadProductos = document.getElementById(`cantidad-producto-${producto.isbn}`);
            
            cantidadProductos.addEventListener("change", (e) => {
                let nuevaCantidad = e.target.value;
                elemento.cantidad = nuevaCantidad;
                dibujarCarrito();
            });

            let borrarProducto = document.getElementById(`eliminar-producto-${elemento.producto.isbn}`);

            borrarProducto.addEventListener("click", (e) => {
                removerProductoCarrito(elemento);
                dibujarCarrito();
            });
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }


    //Eventos para el boton LO QUIERO
    productos.forEach(producto => {
        document.getElementById(`botonIsbn${producto.isbn}`).addEventListener('click', function () {
            agregarAlCarrito(producto);
        });
    });
}



//PARA EL CONFIRMA PRODUCTO
//     let confirma = document.getElementById("ok").innerHTML+=`
//     <div>
//         <p> Producto: ${producto.isbn} fue agregado</p>
//     </div>
// `;


// let ok = confirma;
// if (localStorage.getItem("carrito") != null) {
//     carrito = JSON.parse(localStorage.getItem("carrito"));
//     //cargarlo a la tabla
// }