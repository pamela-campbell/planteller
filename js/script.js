//Tienda

//Array vacio para pushear los objetos de la funcion cargarProductos
const productos = [];

//Array vacio para pushear los objetos de la compra
let carrito = [];
if (localStorage.getItem("carrito") != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    //cargarlo a la tabla
}

//Ejecuto la funcion para cargar los productos al array
cargarProductos();

//Ejecuto la funcion para dibujar las cards de los productos ya cargados
dibujarProductos();

//Funcion para cards  de productos de la tienda 

function dibujarProductos (){
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
    //eventos boton
    productos.forEach(producto => {
        //evento para cada boton
        document.getElementById(`botonIsbn${producto.isbn}`).addEventListener('click',function(){
            agregarAlCarrito(producto);
        });
    });
}

function agregarAlCarrito(producto){
    carrito.push(producto);
   
    //agrego una fila nueva a la tabla body
    document.getElementById("tablabody").innerHTML+=`
        <tr>
            <td>${producto.isbn}</td>
            <td>${producto.nombre}</td>
            <td>$ ${producto.precio}</td>
        </tr>
    `;

    //alert("Producto: "+producto.nombre+" agregado al carrito!"); hacer un boton para aceptar
    localStorage.setItem("carrito", JSON.stringify(carrito));
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