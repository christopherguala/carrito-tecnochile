let productos = [];

document.addEventListener("DOMContentLoaded", async () => {
  await inicializarProductos();
  renderTabla();
});

async function inicializarProductos() {
  try {
    const res = await fetch("https://68a8eeb4b115e67576ea102a.mockapi.io/productos");
    productos = await res.json();
  } catch (error) {
    console.error("Error cargando productos:", error);
    productos = [];
  }
}

function guardarEnLocalStorage() {
  localStorage.setItem("productos", JSON.stringify(productos));
}

function renderTabla() {
  const tabla = document.getElementById("tablaProductos");
  tabla.innerHTML = "";

  productos.forEach((p, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${index + 1}</td>
      <td contenteditable="false">${p.titulo}</td>
      <td contenteditable="false">${p.precio}</td>
      <td contenteditable="false">${p.marca}</td>
      <td contenteditable="false">${p.stock}</td>
      <td>
        <button class="btn btn-sm btn-warning" onclick="editarProducto('${p.id}', this)">Modificar</button>
      </td>
      <td>
        <button class="btn btn-sm btn-danger" onclick="eliminarProducto(${p.id})">Eliminar</button>
      </td>
    `;
    tabla.appendChild(fila);
  });
}

async function eliminarProducto(id) {
  try {
    await fetch(`https://68a8eeb4b115e67576ea102a.mockapi.io/productos/${id}`, {
      method: "DELETE",
    });
    productos = productos.filter(p => p.id !== id);
    renderTabla();
  } catch (error) {
    console.error("Error eliminando producto:", error);
  }
}

async function editarProducto(id, btn) {
  const fila = btn.closest("tr");
  const celdas = fila.querySelectorAll("td");
  const esEditable = celdas[1].isContentEditable;

  if (esEditable) {
    const producto = productos.find(p => p.id === id);
    producto.titulo = celdas[1].innerText;
    producto.precio = celdas[2].innerText;
    producto.marca = celdas[3].innerText;
    producto.stock = parseInt(celdas[4].innerText);

    btn.textContent = "Modificar";
    celdas.forEach((td, i) => {
      if (i >= 1 && i <= 4) td.contentEditable = "false";
    });

    try {
      await fetch(`https://68a8eeb4b115e67576ea102a.mockapi.io/productos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
    } catch (error) {
      console.error("Error actualizando producto:", error);
    }
  } else {
    btn.textContent = "Guardar";
    celdas.forEach((td, i) => {
      if (i >= 1 && i <= 4) td.contentEditable = "true";
    });
  }
}

document.getElementById("formAgregar").addEventListener("submit", async function (e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const nuevoProducto = Object.fromEntries(data.entries());

  nuevoProducto.stock = parseInt(nuevoProducto.stock);
  nuevoProducto.sb = data.get("sb") === "on";
  nuevoProducto.bu = data.get("bu") === "on";
  nuevoProducto.ec = data.get("ec") === "on";

  try {
    const res = await fetch("https://68a8eeb4b115e67576ea102a.mockapi.io/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoProducto),
    });

    const productoCreado = await res.json();
    productos.push(productoCreado);
    renderTabla();
  } catch (error) {
    console.error("Error agregando producto:", error);
  }

  e.target.reset();
  const modal = bootstrap.Modal.getInstance(document.getElementById("modalAgregar"));
  modal.hide();
});