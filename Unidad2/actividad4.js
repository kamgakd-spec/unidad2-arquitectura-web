
/*
  ACTIVIDAD FORMATIVA 4
  Panel de consulta interactivo
  Coquito Amarillo S.A.S.
*/

// Catálogo de productos
const inventario = [
  { id: 1, nombre: "Café Especial", precio: 18500, stock: 120 },
  { id: 2, nombre: "Café Orgánico", precio: 21000, stock: 30 },
  { id: 3, nombre: "Café Descafeinado", precio: 19500, stock: 45 },
  { id: 4, nombre: "Café Tradicional", precio: 15000, stock: 80 },
  { id: 5, nombre: "Café Premium", precio: 25000, stock: 10 }
];

// 1. Funciones flecha: consultar y formatear productos
const formatearProducto = ({ nombre, precio }) => {
  return `${nombre} - $${precio.toLocaleString("es-CO")}`;
};

const buscarPorNombre = (nombre) => {
  return inventario.find(
    producto => producto.nombre.toLowerCase() === nombre.toLowerCase()
  );
};

// 2. map: calcular los precios con IVA del 19 %
const preciosConIva = inventario.map(producto => ({
  nombre: producto.nombre,
  precioConIva: producto.precio * 1.19
}));

console.log("=== PRECIOS CON IVA ===");
preciosConIva.forEach(producto => {
  console.log(
    `${producto.nombre}: $${producto.precioConIva.toLocaleString("es-CO", {
      maximumFractionDigits: 0
    })}`
  );
});

// 3. filter: encontrar productos con stock bajo
const productosBajoStock = inventario.filter(
  producto => producto.stock < 50
);

console.log("\n=== PRODUCTOS CON STOCK BAJO ===");
productosBajoStock.forEach(producto => {
  console.log(`${producto.nombre}: ${producto.stock} unidades`);
});

// 4. reduce: calcular el valor total del inventario
const valorTotal = inventario.reduce(
  (acumulado, producto) =>
    acumulado + producto.precio * producto.stock,
  0
);

console.log("\n=== VALOR TOTAL DEL INVENTARIO ===");
console.log(`$${valorTotal.toLocaleString("es-CO")}`);

// 5. Manejo de errores con try/catch
function obtenerProducto(id) {
  try {
    const producto = inventario.find(producto => producto.id === id);

    if (!producto) {
      throw new Error(`No se encontró un producto con el ID ${id}`);
    }

    return producto;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

console.log("\n=== BÚSQUEDA DE PRODUCTO ===");
console.log(obtenerProducto(1));
obtenerProducto(999); // ID inexistente para probar el error

// 6. Manipulación del DOM para el panel interactivo
if (typeof document !== "undefined") {
  const boton = document.getElementById("btnConsultar");
  const campoId = document.getElementById("idProducto");
  const resultado = document.getElementById("resultado");

  boton.addEventListener("click", () => {
    const id = Number(campoId.value);
    const producto = obtenerProducto(id);

    if (producto) {
      resultado.textContent =
        `${formatearProducto(producto)} | Stock: ${producto.stock}`;
    } else {
      resultado.textContent =
        "No se encontró el producto. Verifica el ID ingresado.";
    }
  });
}
