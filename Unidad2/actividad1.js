
const producto = "Portátil";
const precio = 2500000;
const disponible = true;
let descuento;
const proveedor = null;
const unidades = 5;

console.log("=== INFORMACIÓN DEL PRODUCTO ===");
console.log("Producto:", producto);
console.log("Precio:", precio);
console.log("Disponible:", disponible);
console.log("Descuento:", descuento);
console.log("Proveedor:", proveedor);
console.log("Unidades:", unidades);

console.log("\n=== TIPOS DE DATOS ===");
console.log("Tipo de producto:", typeof producto);
console.log("Tipo de precio:", typeof precio);
console.log("Tipo de disponible:", typeof disponible);
console.log("Tipo de descuento:", typeof descuento);
console.log("Tipo de proveedor:", typeof proveedor);
console.log("Tipo de unidades:", typeof unidades);

const informacion = {
    nombre: producto,
    precio: precio,
    disponible: disponible
};

console.log("\n=== OBJETO DEL PRODUCTO ===");
console.log(informacion);

console.log(
    `El producto ${producto} cuesta $${precio} y hay ${unidades} unidades.`
);
