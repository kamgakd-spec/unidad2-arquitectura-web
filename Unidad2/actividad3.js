
/*
Actividad formativa 3: Estructuras decisionales
Empresa: Coquito Amarillo S.A.S.
*/

// 1. if / else if / else: clasificar el inventario
function clasificarStock(stock) {
    if (stock === 0) {
        return "Agotado";
    } else if (stock < 20) {
        return "Stock bajo";
    } else if (stock < 100) {
        return "Stock medio";
    } else {
        return "Stock alto";
    }
}

// 2. switch: calcular el descuento según el cliente
function calcularDescuento(tipoCliente) {
    switch (tipoCliente) {
        case "mayorista":
            return 0.15;
        case "frecuente":
            return 0.10;
        case "nuevo":
            return 0.05;
        default:
            return 0;
    }
}

// 3. Operador ternario: determinar disponibilidad
const stock = 8;
const estado = stock > 0 ? "Disponible" : "Agotado";

// 4. Operadores lógicos: validar un pedido
const cantidad = 5;
const correo = "cliente@ejemplo.com";

const pedidoValido = cantidad > 0 && correo.includes("@");

// 5. Operador ?? : asignar un valor por defecto
const nombreCliente = null;
const nombreMostrado = nombreCliente ?? "Cliente sin nombre";

// Mostrar resultados
console.log("=== COQUITO AMARILLO S.A.S. ===");

console.log("\nClasificación del inventario:");
console.log("Stock de 0 unidades:", clasificarStock(0));
console.log("Stock de 15 unidades:", clasificarStock(15));
console.log("Stock de 50 unidades:", clasificarStock(50));
console.log("Stock de 120 unidades:", clasificarStock(120));

console.log("\nDescuento según tipo de cliente:");
console.log("Mayorista:", calcularDescuento("mayorista") * 100 + "%");
console.log("Frecuente:", calcularDescuento("frecuente") * 100 + "%");
console.log("Nuevo:", calcularDescuento("nuevo") * 100 + "%");
console.log("Otro cliente:", calcularDescuento("otro") * 100 + "%");

console.log("\nDisponibilidad:");
console.log("Producto:", estado);

console.log("\nValidación del pedido:");
console.log("¿El pedido es válido?", pedidoValido);

console.log("\nNombre del cliente:");
console.log(nombreMostrado);
