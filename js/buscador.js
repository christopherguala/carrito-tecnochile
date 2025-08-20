import { filterProducts } from "./products.js";

const form = document.querySelector("form");
const inputSearch = document.querySelector("input.form-control.me-2");
const errorElement = document.querySelector(".errorPlaceholder");

inputSearch.addEventListener("search", (event) => {
  const products = localStorage.getItem("productos");
  errorElement.setAttribute("class", "d-none");
  filterProducts(JSON.parse(products));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = inputSearch.value;
  const products = localStorage.getItem("productos");
  const parsedProducts = JSON.parse(products);
  const search = parsedProducts.filter((producto) =>
    producto.titulo.toLowerCase().includes(inputValue.toLowerCase())
  );

  if (search.length === 0) {
    errorElement.setAttribute("class", "d-block");
    errorElement.innerHTML = `<h3 class="text-center text-secondary pt-5">No se han encontrado resultados para tu búsqueda 📉 <br> Busca otra vez 💌 </h3>`;
  }

  filterProducts(search);
});

const getAndSaveProducts = async () => {
  try {
    const response = await fetch("../js/productos.json");
    const data = await response.json();
    localStorage.setItem("productos", JSON.stringify(data));
  } catch (error) {
    console.log("Error al cargar los productos: ", error);
  } finally {
    console.log("El intento de obtener y guardar los productos ha finalizado.");
  }
};

setTimeout(() => getAndSaveProducts(), 1000);
