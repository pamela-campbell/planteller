//Tienda

//Array vacio para pushear los objetos de la funcion cargarProductos
const productos = [];

//Array vacio para pushear los objetos de la compra
const itemsCarrito = [];

//Ejecuto la funcion para cargar los productos al array
cargarProductos();

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
            
            <button class="btn buttonStyles" id="boton${producto.isbn}"> Lo quiero </a>
        </div>
    `;
    cards.append(card);
};