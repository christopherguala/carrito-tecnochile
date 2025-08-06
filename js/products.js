
const productos = [
  {
    id: 1,
    titulo: 'Notebook Gamer Asus TUF A15 Rizen 5 RTX 2050',
    imagen: 'https://assets.pcfactory.cl/public/foto/51462/1_200.jpg?t=1754498935',
    descuento: '-41%',
    idProducto: 'ID 54435',
    stock: '+100 Unid.',
    precio: '$619.990',
    precioAntiguo: '$1.049.990',
    sb: true,
    bu: true,
    ec: false,
    tipe: `noot`,
    marca: `asus`,
  },
  {
    id: 2,
    titulo: 'Nootbook Asus VivoBook 15 Intel Core i7 15.6"',
    imagen: 'https://assets.pcfactory.cl/public/foto/53757/1_200.jpg?t=1754498935',
    descuento: '-22%',
    idProducto: 'ID 24435',
    stock: '+100 Unid.',
    precio: '$717.790',
    precioAntiguo: '$919.990',
    sb: false,
    bu: false,
    ec: true,
    tipe: `noot`,
    marca: `asus`,
  },
  {
    id: 3,
    titulo: 'Notebook Asus VivoBook GO 14 Intel Core i3 14"',
    imagen: 'https://assets.pcfactory.cl/public/foto/48743/1_200.jpg?t=1754498935',
    descuento: '-35%',
    idProducto: 'ID 34435',
    stock: '+100 Unid.',
    precio: '$368.590',
    precioAntiguo: '$569.990',
    sb: false,
    bu: true,
    ec: false,
    tipe: `noot`,
    marca: `asus`,
  },
  {
    id: 4,
    titulo: 'Nootbook Dell Inspiron 3535 AMD Ryzen 5 15.6"',
    imagen: 'https://assets.pcfactory.cl/public/foto/53822/1_200.jpg?t=1754514227',
    descuento: '-18%',
    idProducto: 'ID 52335',
    stock: '+100 Unid.',
    precio: '$469.990',
    precioAntiguo: '$569.990',
    sb: true,
    bu: true,
    ec: true,
    tipe: `noot`,
    marca: `dell`,
  },
  {
    id: 5,
    titulo: 'Nootbook Dell Gamer G15 5530 Intel Core i5 RTX 4050',
    imagen: 'https://assets.pcfactory.cl/public/foto/54048/1_200.jpg?t=1754514227',
    descuento: '-11%',
    idProducto: 'ID 52334',
    stock: '+100 Unid.',
    precio: '$1.241.590',
    precioAntiguo: '$1.399.990',
    sb: false,
    bu: true,
    ec: true,
    tipe: `noot`,
    marca: `dell`,
  },
  {
    id: 6,
    titulo: 'Nootbook HP AMD Ryzen 7 7730U 14"',
    imagen: 'https://assets.pcfactory.cl/public/foto/53446/1_200.jpg?t=1754514601',
    descuento: '-13%',
    idProducto: 'ID 42334',
    stock: '+100 Unid.',
    precio: '$649.890',
    precioAntiguo: '$749.990',
    sb: true,
    bu: true,
    ec: true,
    tipe: `noot`,
    marca: `hp`,
  },
  {
    id: 7,
    titulo: 'Mause Inalambrico HP 150 Negro',
    imagen: 'https://assets.pcfactory.cl/public/foto/47902/1_200.jpg?t=1754514601',
    descuento: '-29%',
    idProducto: 'ID 48334',
    stock: '+100 Unid.',
    precio: '$8.490',
    precioAntiguo: '$11.990',
    sb: true,
    bu: true,
    ec: true,
    tipe: `acc`,
    marca: `hp`,
  },
  {
    id: 8,
    titulo: 'Mause Inalambrico HP 200 Negro',
    imagen: 'https://assets.pcfactory.cl/public/foto/36215/1_200.jpg?t=1754514601',
    descuento: '-18%',
    idProducto: 'ID 22334',
    stock: '+100 Unid.',
    precio: '$12.290',
    precioAntiguo: '$14.990',
    sb: true,
    bu: true,
    ec: true,
    tipe: `acc`,
    marca: `hp`,
  },
  {
    id: 9,
    titulo: 'Funda para Nootbook Reversible 14" Negro-Plata',
    imagen: 'https://assets.pcfactory.cl/public/foto/46703/1_200.jpg?t=1754514601',
    descuento: '-10%',
    idProducto: 'ID 42334',
    stock: '+100 Unid.',
    precio: '$11.690',
    precioAntiguo: '$12.990',
    sb: true,
    bu: true,
    ec: false,
    tipe: `acc`,
    marca: `hp`,
  },
  {
    id: 10,
    titulo: 'Tablet Lenovo Tab K11 11" 8GB 128GB',
    imagen: 'https://assets.pcfactory.cl/public/foto/53676/1_200.jpg?t=1754515130',
    descuento: '-14%',
    idProducto: 'ID 42334',
    stock: '+100 Unid.',
    precio: '$274.990',
    precioAntiguo: '$319.990',
    sb: true,
    bu: true,
    ec: true,
    tipe: `tab`,
    marca: `lenovo`,
  },
  {
    id: 11,
    titulo: 'Tablet Lenovo Pro Tab 12.7" 8GB 256GB',
    imagen: 'https://assets.pcfactory.cl/public/foto/53814/1_200.jpg?t=1754515130',
    descuento: '-19%',
    idProducto: 'ID 42334',
    stock: '+100 Unid.',
    precio: '$389.990',
    precioAntiguo: '$479.990',
    sb: true,
    bu: true,
    ec: true,
    tipe: `tab`,
    marca: `lenovo`,
  },
  {
    id: 12,
    titulo: 'Desktop Asus Intrel Core i7 16GB 1TB SSD',
    imagen: 'https://assets.pcfactory.cl/public/foto/53113/1_200.jpg?t=1754515394',
    descuento: '-10%',
    idProducto: 'ID 20334',
    stock: '+100 Unid.',
    precio: '$836.990',
    precioAntiguo: '$929.990',
    sb: true,
    bu: true,
    ec: true,
    tipe: `desk`,
    marca: `asus`,
  },
   {
    id: 13,
    titulo: 'Desktop Dell Alienware DT Aurora R15 Intel Core i7 RTX 4070TI',
    imagen: 'https://assets.pcfactory.cl/public/foto/50846/1_200.jpg?t=1754515581',
    descuento: '-10%',
    idProducto: 'ID 20334',
    stock: '+100 Unid.',
    precio: '$3.239.990',
    precioAntiguo: '$3.599.990',
    sb: true,
    bu: true,
    ec: true,
    tipe: `desk`,
    marca: `dell`,
  },
   {
    id: 14,
    titulo: 'Mochile Dell para Nootbook Reflectante Waterproof 15.6"',
    imagen: 'https://assets.pcfactory.cl/public/foto/54142/1_200.jpg?t=1754515760',
    descuento: '-17%',
    idProducto: 'ID 20334',
    stock: '+100 Unid.',
    precio: '$54.090',
    precioAntiguo: '$64.990',
    sb: true,
    bu: true,
    ec: true,
    tipe: `acc`,
    marca: `dell`,
  },
   {
    id: 15,
    titulo: 'Cargador Dell de Nootbook 450-BBVB-65W usb-C Negro',
    imagen: 'https://assets.pcfactory.cl/public/foto/54145/1_200.jpg?t=1754515760',
    descuento: '-10%',
    idProducto: 'ID 20334',
    stock: '+100 Unid.',
    precio: '$26.990',
    precioAntiguo: '$29.990',
    sb: true,
    bu: true,
    ec: true,
    tipe: `acc`,
    marca: `dell`,
  },
];

const container = document.getElementById('product-gallery');
const btn = document.getElementById('load-more');

let mostrados = 0;
const porCarga = 12;

function crearCard(producto) { //crea la card en html
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

function cargarProductos() { //funcion para cargar productos, estos se cargan de a 12, realmente cargan de a 1 hasta llegar al limite del array
  const limite = Math.min(mostrados + porCarga, productos.length);
  for (let i = mostrados; i < limite; i++) {
    container.insertAdjacentHTML('beforeend', crearCard(productos[i]));
  }
  mostrados = limite;
  if (mostrados >= productos.length) {
    btn.style.display = 'none';
  }
}

cargarProductos(); //carga los primeros 12 productos

btn.addEventListener('click', cargarProductos);// carga los siguientes 





// Filtros

const checkboxes = document.querySelectorAll('.filter-checkbox'); // guarfda los chechbox en la funcion
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', aplicarFiltros); //cada ves que cambia un flitro aplica la funcion
});

function aplicarFiltros() { //guarda que filtros estan marcados
  const filtros = {
    tiendas: [],
    marcas: [],
    tipos: [],
  };

  checkboxes.forEach(cb => { //aqui revisa cada checkbox y si esta marcado lo guarda en valor (ejemplo valor = asus)
    if (cb.checked) {
      const valor = cb.value; 
      if (['sb', 'bu', 'ec'].includes(valor)) { //si el valor revisado es uno de los 3 lo guarda en tiendas, y lo mismo para los otros 2
        filtros.tiendas.push(valor);
      } else if (['asus', 'dell', 'hp', 'lenovo'].includes(valor)) {
        filtros.marcas.push(valor);
      } else if (['noot', 'tab', 'desk', 'acc'].includes(valor)) {
        filtros.tipos.push(valor);
      }
    }
  });

  
  const filtrados = productos.filter(producto => { //se queda solo con los productos que cumplen con los filtros
    const tiendaOK = filtros.tiendas.length === 0 || filtros.tiendas.some(tienda => producto[tienda]); //verifica si tiendas tiene algun valor o es 0, si es 0 todas las tiendas tienen el producto
    const marcaOK = filtros.marcas.length === 0 || filtros.marcas.includes(producto.marca); // lo mismo de arriba pero para marcas y abajo para tipos
    const tipoOK = filtros.tipos.length === 0 || filtros.tipos.includes(producto.tipe);

    return tiendaOK && marcaOK && tipoOK; //si el producto cumple con todo se queda en el const filtrados
  });

  
  container.innerHTML = ''; // borra el contenedor de productos
  mostrados = 0; // Reinicia const mostreados

  filtrados.slice(0, porCarga).forEach(p => { //ocupa las funciones de crear las cards con los productos filtrados
    container.insertAdjacentHTML('beforeend', crearCard(p));
  });

  mostrados = Math.min(porCarga, filtrados.length); // lo mismo de arriba no sobrepasa los 12

  
  if (filtrados.length > mostrados) { // lo mismo de arriba si no hay productos desaparece el boton
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }

  
  btn.onclick = () => { // pone el boton para cargar mas productos, esta ves filtrados
    const siguienteLote = filtrados.slice(mostrados, mostrados + porCarga);
    siguienteLote.forEach(p => {
      container.insertAdjacentHTML('beforeend', crearCard(p));
    });
    mostrados += siguienteLote.length;
    if (mostrados >= filtrados.length) {
      btn.style.display = 'none';
    }
  };
}