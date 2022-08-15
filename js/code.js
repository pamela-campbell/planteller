"use strict";

//codigo tarot

//Defino el dorso de la carta
class Dorso {
    constructor(numero, foto) {
        this.numero = numero;
        this.foto = foto;
    }
}

//Array vacio para pushear los objetos de la funcion cargarProductos
const barajasDorso = [];

//Ejecuto la funcio para cargar la baraja
cargarCartasDorso();


// Defino funcion para cargar la baraja al array
function cargarCartasDorso() {
    barajasDorso.push(new Dorso(1, '../icons/bk_card.png'));
    barajasDorso.push(new Dorso(2, '../icons/bk_card.png'));
    barajasDorso.push(new Dorso(3, '../icons/bk_card.png'));
}

// creo las cards del  Dorso de la barajas
let cartasDorso = document.getElementById("cartasDorso");
for (const dorso of barajasDorso) {
    let cartaDorso = document.createElement("div");
    cartaDorso.className = "card col-md-3";
    cartaDorso.innerHTML = `
        <div class="card-body">
        <img class="card-img-top" src="${dorso.foto}" alt="Card image cap">
     <button class="btn" id="miBoton"> ver mi destino </a>
        </div>
    `;
    cartasDorso.append(cartaDorso);
}


//Defino el objeto carta
class Carta {
    constructor(numero, nombre, foto, descripcion) {
        this.numero = numero;
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
    }
}

//Array vacio para pushear los objetos de la funcion cargarProductos
const barajas = [];

//Ejecuto la funcio para cargar la baraja
cargarCartas();

// Defino funcion que cargara las cartas al array
function cargarCartas() {
    barajas.push(new Carta(1, 'El Proceso', '../icons/card_1.png', 'Estas en camino a encontrar tu planta ideal. Mira las señales, un potus esta por entrar a tu vida.'));
    barajas.push(new Carta(2, 'El Suelo', '../icons/card_2.png', 'Estas list@ para dar un salto en tu vida. Atrévete a grandes planes y plantas, como el Ficus.'));
    barajas.push(new Carta(3, 'El Crecimiento', '../icons/card_3.png', 'Estas en una etapa de contemplar los logros conseguidos. Agradecételo con una hermosa Calathea.'));
}


//creo las cards de la baraja 
let cartasTarot = document.getElementById("cartasTarot");
for (const carta of barajas) {
    let cartaTarot = document.createElement("div");
    cartaTarot.className = "card col-md-3";
    cartaTarot.innerHTML = `
        <div class="card-body">
        <img class="card-img-top" src="${carta.foto}" alt="Card image cap">
            <h5 class="card-title">${carta.nombre}</h5>
            <p class="card-text"> ${carta.descripcion}</p>
            <button class="btn" id="miBoton"> link a cada planta </a>
        </div>
    `;
    cartasTarot.append(cartaTarot);
}


///////////////////////////////////////////////////////////////////////////////////
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
//Array vacio para pushear los objetos de la funcion cargarProductos
const productos = [];
//Array vacio para pushear los objetos de la compra
const itemsCarrito = [];

//Ejecuto las funciones
cargarProductos();

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
            <button class="btn" id="miBoton"> Lo quiero </a>
        </div>
    `;
    cards.append(card);
}