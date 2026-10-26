
/*
Actividad formativa 2: Reporte de inventario
Empresa: Coquito Amarillo S.A.S.
*/

// Arreglo con cinco productos
const productos = [
    { nombre: "Cafe especial", precio: 12000, stock: 20 },
    { nombre: "Cafe tradicional", precio: 8000, stock: 35 },
    { nombre: "Cafe premium", precio: 18000, stock: 10 },
    { nombre: "Chocolate", precio: 6000, stock: 0 },
    { nombre: "Cafe molido", precio: 10000, stock: 15 }
];

// 1. Ciclo for: calcular el valor total del inventario
let valorTotal = 0;

for (let i = 0; i < productos.length; i++) {
    valorTotal += productos[i].precio * productos[i].stock;
}

console.log("=== REPORTE DE INVENTARIO ===");
console.log("Valor total del inventario: $" + valorTotal);

// 2. Ciclo for...of: mostrar el estado de cada producto
console.log("\n=== ESTADO DE LOS PRODUCTOS ===");

for (const producto of productos) {
    const estado = producto.stock > 0 ? "Disponible" : "Agotado";

    console.log(
        producto.nombre + " - " + estado +
        " - Stock: " + producto.stock
    );
}

// 3. Ciclo while: reducir el stock de un producto en promoción
console.log("\n=== PRODUCTO EN PROMOCION ===");

let stockPromocion = 5;
let iteraciones = 0;

while (stockPromocion > 0) {
    stockPromocion--;
    iteraciones++;

    console.log("Unidades restantes: " + stockPromocion);
}

console.log("Iteraciones realizadas: " + iteraciones);
console.log("Promocion finalizada: stock agotado.");
