
const productos = [
  {
    id: 1,
    titulo: 'Microsoft 365 Family (12 meses)',
    imagen: '../assets/productos/img10.svg',
    descuento: '-33%',
    idProducto: 'ID 54435',
    stock: '+100 Unid.',
    precio: '$69.990',
    precioAntiguo: '$104.990'
  },
  {
    id: 2,
    titulo: 'nootbook',
    imagen: './assets/productos/img1.svg',
    descuento: '-33%',
    idProducto: 'ID 54435',
    stock: '+100 Unid.',
    precio: '$133.990',
    precioAntiguo: '$200.000'
  },
  {
    id: 3,
    titulo: 'tablet',
    imagen: './assets/productos/img1.svg',
    descuento: '-33%',
    idProducto: 'ID 54435',
    stock: '+100 Unid.',
    precio: '$69.990',
    precioAntiguo: '$104.990'
  },
];

const container = document.getElementById('product-gallery');
const btn = document.getElementById('load-more');

let mostrados = 0;
const porCarga = 12;

function crearCard(producto) {
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
            <p class="tc-productCard__subtitle">${producto.stock}</p>
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

function cargarProductos() {
  const limite = Math.min(mostrados + porCarga, productos.length);
  for (let i = mostrados; i < limite; i++) {
    container.insertAdjacentHTML('beforeend', crearCard(productos[i]));
  }
  mostrados = limite;
  if (mostrados >= productos.length) {
    btn.style.display = 'none';
  }
}

cargarProductos();

btn.addEventListener('click', cargarProductos);