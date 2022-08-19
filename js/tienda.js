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

