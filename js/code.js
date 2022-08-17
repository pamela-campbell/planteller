
   //codigo tienda

//Defino el objeto producto
class Producto {
    constructor(isbn, nombre, precio, foto) {
        this.isbn = isbn;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
    }
}

//Defino el objeto Carrito
class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}


//Definiciones de constante moneda
 
 const estandarDolaresAmericanos = Intl.NumberFormat('en-US');

//Array vacio para pushear los objetos de la funcion cargarProductos
const productos = [];
//Array vacio para pushear los objetos de la compra
const elementosCarrito = [];

const contenedorProductos = document.getElementById('contenedor-productos');

const contenedorCarritoCompras = document.querySelector("#items")

const contenedorFooterCarrito = document.querySelector("#footer");

//Ejecuto la funcion para cargar los productos al array
cargarProductos();

//Ejecuto la funcion para el carrito
//cargarCarrito();
cargarCarrito();
dibujarCarrito();
dibujarCatalogoProductos();

// Defino funcion que cargara los productos al array
function cargarProductos() {
    productos.push(new Producto(122111, 'Sansevieria', 1200, '../images/img_1.jpg'));
    productos.push(new Producto(122112, 'Potus', 800, '../images/img_2.jpg'));
    productos.push(new Producto(122113, 'Dracaena fragrans', 1100, '../images/img_3.jpg'));
    productos.push(new Producto(122114, 'Ficus robusta', 2100, '../images/img_4.jpg'));
    productos.push(new Producto(122115, 'Aloe vera', 1300, '../images/img_5.jpg'));
    productos.push(new Producto(122116, 'Monstera deliciosa', 1800, '../images/img_6.jpg'));
    productos.push(new Producto(122117, 'Helecho pata de canguro', 1400, '../images/img_7.jpg'));
    productos.push(new Producto(122118, 'Calathea', 1500, '../images/img_8.jpg'));
    productos.push(new Producto(133111, 'Set Planteller', 4000, '../images/img_9.jpg'));
    productos.push(new Producto(133112, 'Set cuidados', 3000, '../images/img_10.jpg'));
    productos.push(new Producto(133113, 'Maceta de barro vintage', 800, '../images/img_11.jpg'));
    productos.push(new Producto(133114, 'Gift card Planteller', 1500, '../images/img_12.jpg'));
}


// funcion para crear el carrito

f
function cargarCarrito() {
    /*let elementoCarrito = new ElementoCarrito(
        new Producto(1, 'Muffin', 1.99, './img/muffin.jpg'),
        1
    );

    elementosCarrito.push(elementoCarrito);*/
}

function dibujarCarrito() {

    let sumaCarrito = 0;
    contenedorCarritoCompras.innerHTML = "";

    elementosCarrito.forEach(
        (elemento) => {
            let renglonesCarrito= document.createElement("tr");
            
            renglonesCarrito.innerHTML = `
                <td>${elemento.producto.id}</td>
                <td>${elemento.producto.nombre}</td>
                <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="1000" step="1" style="width: 50px;"/></td>
                <td>$ ${elemento.producto.precio}</td>
                <td>$ ${estandarDolaresAmericanos.format(elemento.producto.precio*elemento.cantidad)}</td>
                <td><button id="eliminar-producto-${elemento.producto.id}" type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>
            `;

            contenedorCarritoCompras.append(renglonesCarrito);

            sumaCarrito+=elemento.cantidad*elemento.producto.precio;

            //agregamos evento a carrito
            let cantidadProductos = document.getElementById(`cantidad-producto-${elemento.producto.id}`);
            
            cantidadProductos.addEventListener("change", (e) => {
                let nuevaCantidad = e.target.value;
                elemento.cantidad = nuevaCantidad;
                dibujarCarrito();
            });

            let borrarProducto = document.getElementById(`eliminar-producto-${elemento.producto.id}`);

            borrarProducto.addEventListener("click", (e) => {
                removerProductoCarrito(elemento);
                dibujarCarrito();
            });

        }
    );

    //contenedorCarritoCompras.innerHTML = renglonesCarrito;
    
    if(elementosCarrito.length == 0) {
        contenedorFooterCarrito.innerHTML = `
            <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `;
    } else {
        contenedorFooterCarrito.innerHTML = `
            <th scope="row" colspan="5">Total de la compra: $${estandarDolaresAmericanos.format(sumaCarrito)}</th>
        `;
    }

}

function removerProductoCarrito(elementoAEliminar) {
    const elementosAMantener = elementosCarrito.filter((elemento) => elementoAEliminar.producto.id != elemento.producto.id);
    elementosCarrito.length = 0;

    elementosAMantener.forEach((elemento) => elementosCarrito.push(elemento));
}



//cards productos  de la tienda 
let cards = document.getElementById("cards");
for (const producto of productos) {
    let card = document.createElement("div");
    card.className = "card col-md-3";
    card.innerHTML = `
        <div class="card-body">
        <img class="card-img-top" src="${producto.foto}" alt="Card image cap">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$ ${producto.precio}</p>
            <button class="btn buttonStyles"> Lo quiero </a>
        </div>
    `;
    cards.append(card);
} 