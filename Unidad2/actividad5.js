
/*
  ACTIVIDAD FORMATIVA 5
  Jerarquía de clientes
  Coquito Amarillo S.A.S.
*/

// Clase base
class Cliente {
  #historialCompras;

  constructor(id, nombre, correo, historialCompras = []) {
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.#historialCompras = historialCompras;
  }

  calcularDescuento() {
    return 0;
  }

  agregarCompra(compra) {
    this.#historialCompras.push(compra);
  }

  consultarHistorial() {
    return this.#historialCompras;
  }

  mostrarInformacion() {
    return `${this.nombre} - ${this.correo}`;
  }
}

// Subclase para clientes frecuentes
class ClienteFrecuente extends Cliente {
  calcularDescuento() {
    return 0.10;
  }
}

// Subclase para clientes mayoristas
class ClienteMayorista extends Cliente {
  calcularDescuento() {
    return 0.15;
  }
}

// Crear objetos de prueba
const cliente1 = new ClienteFrecuente(
  1,
  "Carlos Pérez",
  "carlos@ejemplo.com",
  ["Compra de café"]
);

const cliente2 = new ClienteMayorista(
  2,
  "Laura Gómez",
  "laura@ejemplo.com",
  ["Compra al por mayor"]
);

// Mostrar información
console.log("=== JERARQUÍA DE CLIENTES ===");

console.log(cliente1.mostrarInformacion());
console.log(
  `Descuento cliente frecuente: ${cliente1.calcularDescuento() * 100}%`
);

console.log(cliente2.mostrarInformacion());
console.log(
  `Descuento cliente mayorista: ${cliente2.calcularDescuento() * 100}%`
);

// Probar encapsulamiento
cliente1.agregarCompra("Nueva compra de café");
console.log("Historial del cliente frecuente:");
console.log(cliente1.consultarHistorial());
