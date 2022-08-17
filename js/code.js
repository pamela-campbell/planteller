//codigo tarot
//Defino el objeto carta tarot
class Carta {
    constructor(numero, nombre, foto, descripcion) {
        this.numero = numero;
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
    }
}

//Array vacio para pushear los objetos de la funcion cargarCartas
const barajas = [];

//Ejecuto la funcion para cargar la baraja
cargarCartas();

// Defino funcion que cargara las cartas al array
function cargarCartas() {
    barajas.push(new Carta(1, 'El Proceso', '../icons/card_1.png', 'Estas en camino a encontrar tu planta ideal. Mira las señales, un potus esta por entrar a tu vida.'));
    barajas.push(new Carta(2, 'El Suelo', '../icons/card_2.png', 'Estas list@ para dar un salto en tu vida. Atrévete a grandes planes y plantas, como el Ficus.'));
    barajas.push(new Carta(3, 'El Crecimiento', '../icons/card_3.png', 'Estas en una etapa de contemplar los logros conseguidos. Agradecételo con una hermosa Calathea.'));
}
//funcion para mezclar las cartas
function mezclar(numero) {
    let mezclarCartas = Math.floor(Math.random() * numero);
    return mezclarCartas;
}

//tomo el boton para sacar una carta

document.getElementById("sacarCarta").onclick = function () {
    let posicionCarta = mezclar(3);
    let cartaActual = barajas[posicionCarta];

    //creo las cartas de la baraja con la funcion mezclar
    document.getElementById("cartasTarot").innerHTML = `
    <div class="container-fluid">
    <div class= "row align-items-center">
    <div class="card">
    <div class="card-body col-lg-12">
    <img class="card-img-top" src="${cartaActual.foto}" alt="Card image cap">
    <h5 class="card-title">${cartaActual.nombre}</h5>
    <p class="card-text"> ${cartaActual.descripcion}</p>
    <a href="../pages/tienda.html"><p class="text-center enlaceTexto">Encontrala acá </p></a>
    </div>
    </div>
    </div>
    </div>
`;
};