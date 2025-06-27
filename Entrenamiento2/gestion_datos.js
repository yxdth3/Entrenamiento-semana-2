
//Inicializamos el programa
console.log("😃 Gestión de datos y suo de Objetos, Sets y Maps 😃");


//Definimos el objeto productos
const products = {
    1:{ id: 1, nombre: "Peluche Stitch", precio: 65000},
    2:{ id: 2, nombre: "Ramo de 30 rosas", precio:90000},
    3:{ id: 3, nombre: "Chocolates Raymmond", precio: 32000},
};

console.log("Products: ",products);

//Creamos un Set con los nombres de todos los productos 
const setProducts = new Set(Object.values(products).map(products => products.nombre))

//Usaremos map para agregar categorías a los productos
const mapProducts = new Map([
    [""]


]);
