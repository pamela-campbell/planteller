"use strict";

//codigo tarot

// tomo el elemento
let cartasTarot = document.getElementById("cartasTarot");

//Defino la funcion del array de objetos de la baraja
const obtenerCartas = () => [{
        imagen: "../icons/card_1.png",
        nombre: "El Proceso",
        descripcion: "Estas en camino a encontrar tu planta ideal. Mira las señales, un potus esta por entrar a tu vida."
    },
    {
        imagen: "../icons/card_2.png",
        nombre: "El Suelo",
        descripcion: "Estas list@ para dar un salto en tu vida. Atrévete a grandes planes y plantas, como el Ficus."
    },
    {
        imagen: "../icons/card_3.png",
        nombre: "El Crecimiento",
        descripcion: "Estas en una etapa de contemplar los logros conseguidos. Agradecételo con una hermosa Calathea."
    },
];

//evoco la funcion y la almaceno en cartas
const cartas = obtenerCartas();

//funcion para mezclar las cartas
const mezclar = () => {
    const barajaTarot = obtenerCartas();
    barajaTarot.sort(() => Math.random() - 0.5);
    return barajaTarot;
}

//creo las cartas en el HTML (DOM) usando la funcion de mezclar 

const creadorCartas = () => {
        const barajaTarot = mezclar();
        for (const carta of barajaTarot) {
            let cartaTarot = document.createElement("div");
            let frente = document.createElement ('img');
            let dorso =document.createElement ("div");
            cartaTarot.className = "cartaTarot";
            frente.className= "frente";
            dorso.className="dorso";
            //le agrego la imagen al src
            frente.src = carta.imagen;
            // le asigno un padre a los elemntos creados
            cartasTarot.append(cartaTarot);
            cartaTarot.append(frente);
            cartaTarot.append(dorso);
        };
    };
    creadorCartas();