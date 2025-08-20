# Proyecto Tienda en Línea - TecnoChile

Este proyecto consiste en el desarrollo de un prototipo funcional de tienda en línea para la empresa ficticia "TecnoChile". La aplicación web es responsiva y permite a los usuarios interactuar con un catálogo de productos, gestionar un carrito de compras y realizar operaciones básicas de filtrado y administración.

## Equipo

- Cristopher Guala
- Franco Giaverini
- Isabel Palacios
- Valentina Troncoso

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Font Awesome

## Requerimientos Implementados

### Funcionalidades para el Cliente

- **Catálogo de Productos:**
    - Carga de productos desde un archivo `productos.json`.
    - Visualización de productos en formato de tarjetas (cards).
    - Indicadores de stock: se muestra la cantidad disponible si es inferior a 4, y un mensaje de "Último producto" si el stock es 1.
    - Los productos sin stock se muestran como agotados y no pueden ser seleccionados.
- **Carrito de Compras:**
    - Implementado con lógica en ES6 y persistencia de datos en `localStorage`.
    - Permite agregar productos, modificar la cantidad de unidades y eliminar productos individuales.
    - Valida que la cantidad de productos seleccionados no supere el stock disponible.
    - Funcionalidad para limpiar todo el carrito.
    - Al realizar una compra, se descuenta el stock de los productos correspondientes.
- **Filtrado y Búsqueda:**
    - **Filtro por categoría:** Permite seleccionar una categoría de productos.
    - **Filtro por rango de precio:** Permite filtrar productos según un rango de precios.
    - **Búsqueda por texto libre:** Busca coincidencias en el nombre, descripción, categoría o etiqueta del producto.

### Panel de Administración

- **Gestión de Inventario:**
    - **Listado de productos:** Muestra una tabla con el nombre, descripción, precio, categoría y cantidad de cada producto.
    - **Crear, Modificar y Eliminar (CRUD):**
        - **Crear:** Un formulario en una página dedicada permite agregar nuevos productos al archivo JSON.
        - **Modificar:** Al seleccionar un producto, se carga un formulario con sus datos precargados para poder editarlos (a excepción del ID).
        - **Eliminar:** Un ícono en el listado permite eliminar un producto del inventario.
    - Todas las operaciones de administración actualizan la información de manera persistente usando `localStorage`.

## Ejecución

1.  Clonar o descomprimir el proyecto.
2.  Abrir el archivo `index.html` en un navegador web moderno.
3.  Interactuar con la tienda para explorar las funcionalidades de cliente y administrador.
