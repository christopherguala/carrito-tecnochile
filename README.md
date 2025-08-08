Fundamentos de Programación en JavaScript
Datos del proyecto
Nombre de la empresa ficticia: Tecno Chile

Tipo de proyecto: Tienda en línea responsiva

Tecnologías utilizadas: HTML5, CSS3, JavaScript, Bootstrap 5, Font Awesome

Objetivo
Desarrollar un prototipo funcional de tienda en línea que permita gestionar un carrito de compras y realizar operaciones básicas de filtrado y cálculo, cumpliendo con los requerimientos establecidos en la evaluación final.

Requerimientos y ubicación en el código
#	Requerimiento	Ubicación / Evidencia en el código
1	Prototipo de web tipo tienda en línea responsiva	index.html, css/styles.css – Uso de meta viewport y clases Bootstrap para diseño responsivo
2	Implementar Bootstrap con al menos 1 carousel y tooltips	index.html – <script src="./js/bootstrap.bundle.min.js"> y componente <div id="carouselExample"...>
3	Componente Navbar con links a secciones	index.html – <nav class="tc-navbar navbar navbar-expand-lg bg-dark"> con enlaces internos
4	Footer con iconos de redes sociales	index.html – <footer> con íconos de Facebook, Instagram, Twitter usando Font Awesome
5	Solicitar nombre y apellido y mostrarlos en sección cliente	js/app.js – función que captura datos y los inserta en elemento HTML de bienvenida
6	Página de ventas con cards de Bootstrap y opción de agregar al carrito	index.html – <div class="card"> para cada producto; js/app.js para función agregarAlCarrito()
7	Crear estructura de datos con arreglos	js/app.js – arreglo productos[] que almacena objetos con nombre y precio
8	Mostrar datos del arreglo en pantalla	js/app.js – función renderProductos() que recorre productos y genera HTML dinámicamente
9	Input para filtrar productos	index.html – <input id="filtroProductos" ...> y js/app.js función filtrarProductos()
10	Botón para eliminar producto del carrito	js/app.js – función eliminarProducto(id) asociada a botón en cada item del carrito
11	Calcular precio total del carrito	js/app.js – función calcularTotal() que suma precios de carrito[]
12	Botón para vaciar el carrito	index.html – <button id="vaciarCarrito"> y js/app.js función vaciarCarrito()
<img width="1912" height="867" alt="image" src="https://github.com/user-attachments/assets/ffb35b68-919d-4ea9-8b3a-bc2073c0f335" />
<img width="1895" height="851" alt="image" src="https://github.com/user-attachments/assets/b179e474-1a3b-440c-8889-2e15da8c28e7" />
<img width="1898" height="862" alt="image" src="https://github.com/user-attachments/assets/d5457ee0-90f1-44d9-8fc5-1bb56add29a8" />
<img width="1894" height="818" alt="image" src="https://github.com/user-attachments/assets/96f636cd-e663-478c-884f-8a66a117322c" />
<img width="1903" height="834" alt="image" src="https://github.com/user-attachments/assets/bff8b1d1-cb62-4742-878e-63adf7b24096" />

Ejecución
Clonar o descomprimir el proyecto.

Abrir index.html en un navegador.

Interactuar con la tienda: agregar productos, filtrarlos, eliminarlos, y vaciar el carrito.


Este proyecto integra los conceptos aprendidos en el módulo de Fundamentos de Programación en JavaScript, aplicando HTML, CSS y Bootstrap para la interfaz, junto con JavaScript para la lógica de negocio, manipulación del DOM, eventos y manejo de arreglos.

