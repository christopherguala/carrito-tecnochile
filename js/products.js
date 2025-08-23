const container = document.getElementById("product-gallery");
const btn = document.getElementById("load-more");
const checkboxes = document.querySelectorAll(".filter-checkbox"); 

export let productos = [];
let mostrados = 0; 
const porCarga = 12; 
let productosFiltrados = [...productos];
let minRango = 0;
let maxRango = 4000000;


async function cargarProductos() {
  try {
    const response = await fetch("https://68a8eeb4b115e67576ea102a.mockapi.io/productos");
    if (!response.ok) throw new Error("Error al obtener datos de la API");
    const data = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    productos = [...data];
    productosFiltrados = [...productos];

    aplicarFiltros();
  } catch (error) {
    console.error("Error al cargar los productos:", error);

    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const inventarioVivo = JSON.parse(
      // localStorage.getItem("productos") || "[]"
    );
    productos = [...inventarioVivo];
    productosFiltrados = [...productos];
    aplicarFiltros();
  }
}


cargarProductos();

function crearCard(producto) {
 
  return `
      <article class="tc-productCard p-2 m-2 col item">
        <div class="tc-productCard__img-wrapper p-2">
          <img src="${producto.imagen}" alt="${producto.titulo}" class="tc-productCard__img" />
          <span class="tc-productCard__discount position-absolute top-0 end-0">${producto.descuento}</span>
        </div>
        <div class="tc-productCard__body flex-column pt-0 px-4 pb-4 d-flex">
          <h2 class="tc-productCard__body--title mb-1">${producto.titulo}</h2>
          <div class="tc-productCard__subtitle-wrapper pt-1 pb-3 d-flex justify-content-between">
            <p class="tc-productCard__subtitle">${producto.idProducto} •</p>
            <p class="tc-productCard__subtitle">${producto.stock} Unid</p>
          </div>
          <div class="tc-productCard__prices mb-4">
            <span class="tc-productCard__price">${producto.precio}</span>
            <span class="tc-productCard__price-old me-2 text-muted text-decoration-line-through">${producto.precioAntiguo}</span>
          </div>
          <div class="tc-btn-wrapper mt-auto">
            <button class="tc-btn__primary w-100">
              <span class="material-symbols-outlined p-1">add_shopping_cart</span>
              Agregar al carro
            </button>
          </div>
        </div>
      </article>
   
  `;
}

function crearCard1(producto) {
  
  return `
  
      <article class="tc-productCard p-2 m-2 col item">
        <div class="tc-productCard__img-wrapper p-2">
          <img src="${producto.imagen}" alt="${producto.titulo}" class="tc-productCard__img" />
          <span class="tc-productCard__discount position-absolute top-0 end-0">${producto.descuento}</span>
        </div>
        <div class="tc-productCard__body flex-column pt-0 px-4 pb-4">
          <h2 class="tc-productCard__body--title mb-1 itemTitle">${producto.titulo}</h2>
          <div class="tc-productCard__subtitle-wrapper pt-1 pb-3 d-flex justify-content-between">
            <p class="tc-productCard__subtitle">${producto.idProducto} •</p>
            <p class="tc-productCard__subtitle">${producto.stock} Ultima!!</p>
          </div>
          <div class="tc-productCard__prices mb-4">
            <span class="tc-productCard__price">${producto.precio}</span>
            <span class="tc-productCard__price-old me-2 text-muted text-decoration-line-through">${producto.precioAntiguo}</span>
          </div>
          <div class="tc-btn-wrapper mt-auto">
            <button class="tc-btn__primary w-100">
              <span class="material-symbols-outlined p-1">add_shopping_cart</span>
              Agregar al carro
            </button>
          </div>
        </div>
      </article>
    
  `;
}

function crearCard0(producto) {
  
  return `
      <article class="tc-productCard p-2 m-2 col item">
        <div class="tc-productCard__img-wrapper p-2">
          <img src="${producto.imagen}" alt="${producto.titulo}" class="tc-productCard__img" />
          <span class="tc-productCard__discount position-absolute top-0 end-0">${producto.descuento}</span>
        </div>
        <div class="tc-productCard__body flex-column pt-0 px-4 pb-4 d-flex">
          <h2 class="tc-productCard__body--title mb-1">${producto.titulo}</h2>
          <div class="tc-productCard__subtitle-wrapper pt-1 pb-3 d-flex justify-content-between">
            <p class="tc-productCard__subtitle">${producto.idProducto} •</p>
            <p class="tc-productCard__subtitle">${producto.stock} Agotado:C</p>
          </div>
          <div class="tc-productCard__prices mb-4">
            <span class="tc-productCard__price">${producto.precio}</span>
            <span class="tc-productCard__price-old me-2 text-muted text-decoration-line-through">${producto.precioAntiguo}</span>
          </div>
          <div class="tc-btn-wrapper mt-auto">
            <button class="tc-btn__primary w-100" disabled>
              <span class="material-symbols-outlined p-1">add_shopping_cart</span>
              Agregar al carro
            </button>
          </div>
        </div>
      </article>
  `;
}


function parsePrecio(precioStr) {
  return parseInt(precioStr.replace(/\./g, "").replace("$", ""));
}

function aplicarFiltros() {

  // const live = JSON.parse(localStorage.getItem("productos") || "[]");
  // if (Array.isArray(live) && live.length) {
  //   productos = live;
  // }


  const filtros = {
    tiendas: [],
    marcas: [],
    tipos: [],
  };

  checkboxes.forEach((cb) => {
    
    if (cb.checked) {
      const valor = cb.value;
      if (["sb", "bu", "ec"].includes(valor)) {
      
        filtros.tiendas.push(valor);
      } else if (["asus", "dell", "hp", "lenovo"].includes(valor)) {
        filtros.marcas.push(valor);
      } else if (["noot", "tab", "desk", "acc"].includes(valor)) {
        filtros.tipos.push(valor);
      }
    }
  });

 
  const minPriceValue = parseInt(document.getElementById("minPrice").value, 10);
  const maxPriceValue = parseInt(document.getElementById("maxPrice").value, 10);

 
  productosFiltrados = productos.filter((producto) => {
    const precioNum = parsePrecio(producto.precio);
    const tiendaOK =
      filtros.tiendas.length === 0 ||
      filtros.tiendas.some((tienda) => producto[tienda]); 
    const marcaOK =
      filtros.marcas.length === 0 || filtros.marcas.includes(producto.marca); 
    const tipoOK =
      filtros.tipos.length === 0 || filtros.tipos.includes(producto.tipe);
    const precioOK = precioNum >= minPriceValue && precioNum <= maxPriceValue; 
    return tiendaOK && marcaOK && tipoOK && precioOK; 
  });


  const ordenSeleccionado = document.getElementById("inputGroupSelect01").value;
  if (ordenSeleccionado === "1") {
    productosFiltrados.sort(
      (a, b) => parsePrecio(a.precio) - parsePrecio(b.precio)
    );
  } else if (ordenSeleccionado === "2") {
    productosFiltrados.sort(
      (a, b) => parsePrecio(b.precio) - parsePrecio(a.precio)
    );
  }

  container.innerHTML = ""; 
  mostrados = 0; 

  const primerLote = productosFiltrados.slice(0, porCarga); 
  primerLote.forEach((p) =>
    container.insertAdjacentHTML("beforeend", crearCardSegunStock(p))
  ); 
  mostrados = primerLote.length;


  if (productosFiltrados.length > mostrados) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function crearCardSegunStock(producto) {

  if (producto.stock === 0) {
    return crearCard0(producto); 
  } else if (producto.stock === 1) {
    return crearCard1(producto); 
  } else {
    return crearCard(producto); 
  }
}


btn.addEventListener("click", () => {
  const siguienteLote = productosFiltrados.slice(
    mostrados,
    mostrados + porCarga
  );
  siguienteLote.forEach((p) =>
    container.insertAdjacentHTML("beforeend", crearCardSegunStock(p))
  );
  mostrados += siguienteLote.length;

  if (mostrados >= productosFiltrados.length) {
    btn.style.display = "none";
  }
});


checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", aplicarFiltros);
});
document
  .getElementById("inputGroupSelect01")
  .addEventListener("change", aplicarFiltros);


document.getElementById("minPrice").addEventListener("input", aplicarFiltros);
document.getElementById("maxPrice").addEventListener("input", aplicarFiltros);



document.addEventListener("DOMContentLoaded", function () {
 
  const minPriceInput = document.getElementById("minPrice");
  const maxPriceInput = document.getElementById("maxPrice");
  const minValueLabel = document.getElementById("minValue");
  const maxValueLabel = document.getElementById("maxValue");

  function formatCurrency(value) {
    return `$${value.toLocaleString("es-CO")}`;
  }

  function syncPriceRanges() {
    let minValue = parseInt(minPriceInput.value, 10);
    let maxValue = parseInt(maxPriceInput.value, 10);

    
    if (minValue > maxValue) {
      minValue = maxValue;
      minPriceInput.value = minValue;
    }

   
    if (maxValue < minValue) {
      maxValue = minValue;
      maxPriceInput.value = maxValue;
    }

    
    minValueLabel.textContent = formatCurrency(minValue);
    maxValueLabel.textContent = formatCurrency(maxValue);
  }

  
  minPriceInput.addEventListener("input", syncPriceRanges);
  maxPriceInput.addEventListener("input", syncPriceRanges);

  
  syncPriceRanges();
});

export const filterProducts = (filteredProducts) => {
 
  const live = JSON.parse(localStorage.getItem("productos") || "[]");
  if (Array.isArray(live) && live.length) {
    productos = live;
  }


  productosFiltrados = Array.isArray(filteredProducts)
    ? filteredProducts
    : productos;


  container.innerHTML = "";
  mostrados = 0;
  const primerLote = productosFiltrados.slice(0, porCarga);
  primerLote.forEach((p) =>
    container.insertAdjacentHTML("beforeend", crearCardSegunStock(p))
  );
  mostrados = primerLote.length;
  btn.style.display = productosFiltrados.length > mostrados ? "block" : "none";
};



window.addEventListener("inventory:updated", () => {
  aplicarFiltros();
});

 
window.addEventListener("storage", (e) => {
  if (e.key === "productos") {
    aplicarFiltros();
  }
});
export function refreshProductsFromStorage() {
  aplicarFiltros();
}
