


const container = document.getElementById('product-gallery');
const btn = document.getElementById('load-more');
const checkboxes = document.querySelectorAll('.filter-checkbox'); // guarda los checkbox en la función

let productos = [];
let mostrados = 0; // guarda cuántos productos se han mostrado
const porCarga = 12; // aqui modificas de a cuantos productos se muestran al principio y al apretar el boton
let productosFiltrados = [...productos]; 

fetch('../js/productos.json')
  .then(response => response.json())
  .then(data => {
    productos = data;
    productosFiltrados = [...productos];
    aplicarFiltros(); // ejecuta la lógica una vez cargados los productos
  })
  .catch(error => {
    console.error('Error al cargar los productos:', error);
  });

function crearCard(producto) { // crea la card en html con los valores de los objetos
  return `
    <div class="col-12 col-sm-6 col-lg-3 d-flex">
      <article class="tc-productCard p-2 w-100">
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
    </div>
  `;
}

function crearCard1(producto) { // crea la card en html con los valores de los objetos
  return `
    <div class="col-12 col-sm-6 col-lg-3 d-flex">
      <article class="tc-productCard p-2 w-100">
        <div class="tc-productCard__img-wrapper p-2">
          <img src="${producto.imagen}" alt="${producto.titulo}" class="tc-productCard__img" />
          <span class="tc-productCard__discount position-absolute top-0 end-0">${producto.descuento}</span>
        </div>
        <div class="tc-productCard__body flex-column pt-0 px-4 pb-4 d-flex">
          <h2 class="tc-productCard__body--title mb-1">${producto.titulo}</h2>
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
    </div>
  `;
}

function crearCard0(producto) { // crea la card en html con los valores de los objetos
  return `
    <div class="col-12 col-sm-6 col-lg-3 d-flex">
      <article class="tc-productCard p-2 w-100">
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
    </div>
  `;
}

// convierte el string de precio a numero, ya que esta en string primero
function parsePrecio(precioStr) {
  return parseInt(precioStr.replace(/\./g, '').replace('$', ''));
}


function aplicarFiltros() { // aqui guardaran los filtros que se seleccionan
  const filtros = {
    tiendas: [],
    marcas: [],
    tipos: [],
  };

  checkboxes.forEach(cb => { // revisa cada checkbox y si está marcado lo guarda en valor (ejemplo valor = asus)
    if (cb.checked) {
      const valor = cb.value;
      if (['sb', 'bu', 'ec'].includes(valor)) { // si el valor revisado es uno de los 3 lo guardara en tiendas, lo mismo con los otros 2
        filtros.tiendas.push(valor);
      } else if (['asus', 'dell', 'hp', 'lenovo'].includes(valor)) {
        filtros.marcas.push(valor);
      } else if (['noot', 'tab', 'desk', 'acc'].includes(valor)) {
        filtros.tipos.push(valor);
      }
    }
  });

  // se queda solo con los productos que cumplen con los filtros
  productosFiltrados = productos.filter(producto => {
    const tiendaOK = filtros.tiendas.length === 0 || filtros.tiendas.some(tienda => producto[tienda]);// si no hay filtro aqui seleccionado todos los productos cuentan
    const marcaOK = filtros.marcas.length === 0 || filtros.marcas.includes(producto.marca);// lo mismo aplica aqui y abajo
    const tipoOK = filtros.tipos.length === 0 || filtros.tipos.includes(producto.tipe);
    return tiendaOK && marcaOK && tipoOK; //si el producto cumple con los 3 filtros se guarda para mostrar
  });

  // ordena según el valor del select de precios, esto es igual ana de las tareas que hicimos en js
  const ordenSeleccionado = document.getElementById('inputGroupSelect01').value;
  if (ordenSeleccionado === '1') {
    productosFiltrados.sort((a, b) => parsePrecio(a.precio) - parsePrecio(b.precio));
  } else if (ordenSeleccionado === '2') {
    productosFiltrados.sort((a, b) => parsePrecio(b.precio) - parsePrecio(a.precio));
  }

  
  container.innerHTML = ''; //borra todos lso productos
  mostrados = 0;//resetea el contador para volver a usar la funcion y cargar nuevos productos filtrados

  
  const primerLote = productosFiltrados.slice(0, porCarga);// muestra los primeros productos filtrados
  primerLote.forEach(p => container.insertAdjacentHTML('beforeend', crearCardSegunStock(p))); //crea la card
  mostrados = primerLote.length;

  // muestra u oculta el botón si no hay mas productos en el array de los filtrados
  if (productosFiltrados.length > mostrados) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}
function crearCardSegunStock(producto) {
  if (producto.stock === 0) {
    return crearCard0(producto); // sin stock
  } else if (producto.stock === 1) {
    return crearCard1(producto); // solo una unidad
  } else {
    return crearCard(producto); // stock normal
  }
}

// funcion para el boton, al hacer click llamaa lso siguientes productos hasta completar 12 o que se acaben
btn.addEventListener('click', () => {
  const siguienteLote = productosFiltrados.slice(mostrados, mostrados + porCarga);
  siguienteLote.forEach(p => container.insertAdjacentHTML('beforeend', crearCardSegunStock(p)));
  mostrados += siguienteLote.length;

  if (mostrados >= productosFiltrados.length) {
    btn.style.display = 'none';
  }
});

// llama a la funcion para los productos cada ves que un checkbox cambia, esto mantiene actualizado todo
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', aplicarFiltros);
});
document.getElementById('inputGroupSelect01').addEventListener('change', aplicarFiltros);

// Aqui llamamos primeramente a la funcion para cargar los primeros 12 productos de la pagina
aplicarFiltros();





