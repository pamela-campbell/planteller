"use strict";


//Codigo quiz

// function sumar(entrada,entradaDos,entradaTres,entradaCuatro,entradaCinco,entradaSeis,entradaSiete, entradaOcho,entradaNueve, entradaDiez){
//     let suma=entrada + entradaDos + entradaTres + entradaCuatro + entradaCinco + entradaSeis + entradaSiete + entradaOcho + entradaNueve + entradaDiez;
// return suma;
// };
// let resultado=sumar;
// let cantidadRespuesta = 0;

// alert("¿Cuánto sabes de plantas? A Continuación ingresa el número 1, 2 o 3 para tu respuesta. Ready, set, go!");


// while ((cantidadRespuesta !== 1)) {
//     cantidadRespuesta++

//     let entrada = parseInt(prompt("¿Cuál es la temperatura promedio del ambiente para tener una bonita y muy sana planta?" + "\n 1. Ambiente a 10*C" + "\n 2. Ambiente a 12*C" + "\n 3. Ambiente a 15*C"));
//     if (entrada == 2) {
//         entrada = 10
//     }
//     else {
//         entrada = 0
//     };
//     let entradaDos = parseInt(prompt("¿Luz o no luz?, esa es la cuestión." + "\n 1. Luz directa." + "\n 2. Luz indirecta." + "\n 3. No sabe, no contesta."));
//     if (entradaDos == 2) {
//         entradaDos = 10
//     }
//     else {
//         entradaDos = 0
//     }
//     let entradaTres = parseInt(prompt("Agua, ¿Cuánto regar?" + "\n 1. Cuanto más, mejor! Las plantas son 70% agua." + "\n 2. Ella me lo dirá." + "\n 3. Mejor dejar secar un poco entre riego y riego."));
//     if (entradaTres == 3) {
//         entradaTres = 10
//     }
//     else {
//         entradaTres = 0
//     };
//     let entradaCuatro = parseInt(prompt("Suelos, ¿cuál es la mejor mezcla?" + "\n 1. Turba 1 parte y 2 partes de perlita." + "\n 2. Turba 2 partes y 1 parte de perlita." + "\n 3. Turba 1 parte y 1 parte de perlita."));
//     if (entradaCuatro == 2) {
//         entradaCuatro = 10
//     }
//     else {
//         entradaCuatro = 0
//     };
//     let entradaCinco = parseInt(prompt("DIY, ¿Cuántos días tarda en emerger una semilla?" + "\n 1. De 1 a 7 días." + "\n 2. De 7 a 14 días." + "\n 3. De 7 a 28 días."));
//     if (entradaCinco == 3) {
//         entradaCinco = 10
//     }
//     else {
//         entradaCinco = 0
//     };
//     let entradaSeis = parseInt(prompt(" ¿Qué causa hojas pálidas en las plantas?" + "\n 1. Mucha luz." + "\n 2. Poca agua." + "\n 3. Fácil, es porque le bajó la presión."));
//     if (entradaSeis == 1) {
//         entradaSeis = 10
//     }
//     else {
//         entradaSeis = 0
//     };
//     let entradaSiete = parseInt(prompt("Una difícil, ¿cuando un esqueje está listo para plantar?" + "\n 1. Cuando sus raíces miden 1,5 cm." + "\n 2. Cuando sus raíces miden 2,5 cm." + "\n 3. Esque…que? Next…"));
//     if (entradaSiete == 2) {
//         entradaSiete = 10
//     }
//     else {
//         entradaSiete = 0
//     };
//     let entradaOcho = parseInt(prompt("¡Plagas! ¿Cuál es el remedio natural para detenerlas?" + "\n 1. Canela." + "\n 2. Mezcal." + "\n 3. Sal."));
//     if (entradaOcho == 1) {
//         entradaOcho = 10
//     }
//     else {
//         entradaOcho = 0
//     };
//     let entradaNueve = parseInt(prompt("Las plantas todo lo pueden y purificar los ambientes es una de sus características. ¿Cuál de estas plantas será?" + "\n 1. Lirio de la paz." + "\n 2. Ficus" + "\n 3. Potus."));
//     if (entradaNueve == 1) {
//         entradaNueve = 10
//     }
//     else {
//         entradaNueve = 0
//     };
//     let entradaDiez = parseInt(prompt("¿Cuál de las siguientes plantas no necesita tanta luz?" + "\n 1. Monstera." + "\n 2. Cactus." + "\n 3. Geranio."));
//     if (entradaDiez == 1) {
//         entradaDiez = 10
//     }
//     else {
//         entradaDiez = 0
//     };
//     let resultado = entrada + entradaDos + entradaTres + entradaCuatro + entradaCinco + entradaSeis + entradaSiete + entradaOcho + entradaNueve + entradaDiez;

//     if ((resultado >= 10) && (resultado <= 30)) {
//         alert("Sumaste " + resultado + " puntos." + "\nNivel" + "\nVoldemort Plant, te recomendamos esta guía para que tus plantas dejen de sufrir.");
//     }
//     else if ((resultado >= 40) && (resultado <= 50)) {
//         alert("Sumaste " + resultado + " puntos." + "\nNivel" + "\nHay una chispa en ti, deja salir es@ jardiner@. La práctica hace al maestro.");
//     }
//     else if ((resultado >= 60) && (resultado <= 70)) {
//         alert("Sumaste " + resultado + " puntos." + "\nNivel" + "\nCasi lo tienes, seguí así tus plantas te lo agradecerán.");
//     }
//     else if ((resultado >= 80) && (resultado <= 90)) {
//         alert("Sumaste " + resultado + " puntos." + "\nNivel" + "\nJardiner@ en potencia, estás a un paso de la excelencia.");
//     }
//     else if (resultado == 100) {
//         alert("Sumaste " + resultado + " puntos." + "\nNivel" + "\nLover Plant! Tus plantas viven una vida de lujo. Felicitaciones!!! ");
//     }
//     else if ((resultado <= 10) || (resultado >= 100)) { alert("Oops...algo salió mal." + "\nRecuerda solo puedes ingresar 1, 2 o 3 para tus respuestas"); }
// }



//codigo tienda

//Defino mi objeto
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

// Defino funciones
function cargarProductos() {
    productos.push(new Producto(122111, 'Sansevieria', 1200, './images/img_1.jpg'));
    productos.push(new Producto(122112, 'Potus', 800, './images/img_2.jpg'));
    productos.push(new Producto(122113, 'Dracaena fragrans', 1100, './images/img_3.jpg'));
    productos.push(new Producto(122114, 'Ficus robusta', 2100, './images/img_4.jpg'));
    productos.push(new Producto(122115, 'Aloe vera', 1300, './images/img_5.jpg'));
    productos.push(new Producto(122116, 'Monstera deliciosa', 1800, './images/img_6.jpg'));
    productos.push(new Producto(122117, 'Helecho pata de canguro', 1400, './images/img_7.jpg'));
    productos.push(new Producto(122118, 'Calathea ', 1500, './images/img_8.jpg'));
    productos.push(new Producto(133111, 'Set Planteller', 4000, './images/img_9.jpg'));
    productos.push(new Producto(133112, 'Set cuidados', 3000, './images/img_10.jpg'));
    productos.push(new Producto(133113, 'Maceta de barro vintage', 800, './images/img_11.jpg'));
    productos.push(new Producto(133114, 'Gift card Planteller', 1500, './images/img_12.jpg'));
}

console.table(cargarProductos());


let cards = document.querySelector(".cards");
cards.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${productos.foto}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${productos.nombre}</h5>
                <p class="card-text">$ ${productos.precio}</p>
                <a href="#" id="miBoton" class="btn btn-primary">lo quiero</a>
            </div>
        </div>
`;

// const plantas = [{
//         isbn: "122111",
//         tipo: "Planta de interior",
//         nombre: "Monstera",
//         precio: 1500
//     },
//     {
//         isbn: "122112",
//         tipo: "Planta de interior",
//         nombre: "Ficus",
//         precio: 1800
//     },
//     {
//         isbn: "122113",
//         tipo: "Planta de interior",
//         nombre: "Potus",
//         precio: 1000
//     },
//     {
//         isbn: "122114",
//         tipo: "Planta de interior",
//         nombre: "Lazo de amor",
//         precio: 1000
//     },
//     {
//         isbn: "122115",
//         tipo: "Planta de interior",
//         nombre: "Hiedra variegada",
//         precio: 800
//     },
//     {
//         isbn: "122116",
//         tipo: "Planta de interior",
//         nombre: "Palo de agua",
//         precio: 1200
//     },
//     {
//         isbn: "122117",
//         tipo: "Planta de interior",
//         nombre: "Sansevieria enana",
//         precio: 1700
//     },
//     {
//         isbn: "122118",
//         tipo: "Planta de interior",
//         nombre: "Calathea makoyana",
//         precio: 1400
//     }
// ];
// const kitDeArticulos = [{
//         isbn: "133111",
//         tipo: "Kit",
//         nombre: "Kit inicial jardineria",
//         precio: 1700
//     },
//     {
//         isbn: "133112",
//         tipo: "Kit",
//         nombre: "Kit de semillas",
//         precio: 800
//     },
//     {
//         isbn: "133113",
//         tipo: "Kit",
//         nombre: "Kit decoración",
//         precio: 2500
//     }
// ]

// const articulosVarios = [{
//     isbn: "134111",
//     tipo: "card",
//     nombre: "Gift card",
//     precio: " "
// }]

// //concateno los 3 arrays

// const todosLosProductos = plantas.concat(kitDeArticulos, articulosVarios);
// console.table(todosLosProductos);


// //filter productos por precios 

// function filtroPrecio(todosLosProductos, precio) {
//     const precioEncontrado = todosLosProductos.filter((producto) => producto.precio == precio);
//     return precioEncontrado;
// }

// let precio = prompt("Ingresa el precio a buscar");
// const listaDePrecio = filtroPrecio(todosLosProductos, precio);
// if (listaDePrecio.lenght == 0) {
//     console.log("no lo tenemos");
// } else {
//     console.table(listaDePrecio);
// }

// // find producto por isbn sin parametros

// function buscarIsbn() {
//     const isbnEncontrado = todosLosProductos.find((producto) => producto.isbn == numero);
//     return isbnEncontrado;
// }

// let numero = prompt("ingresa el numero isbn del producto a buscar");
// const isbn = buscarIsbn();
// if (isbn == 0) {
//     console.log("el número isbn ingresado no corresponde");
// } else {
//     console.table(isbn);
// }


// find producto por isbn con paranetros

// function buscarIsbn(todosLosProductos, numero) {
//     const isbnEncontrado = todosLosProductos.find((producto) => producto.isbn == numero);
//     return isbnEncontrado;
// }

// let numero = prompt("ingresa el numero isbn del producto a buscar");
// const isbn = buscarIsbn (todosLosProductos, numero);
// if (isbn == 0) {
//     console.log("el número isbn ingresado no corresponde");
// } else {
//     console.table(isbn);
// }