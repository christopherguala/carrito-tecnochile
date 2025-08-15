const inputSearch = document.querySelector("input.form-control.me-2");

document.addEventListener("submit", (event) => {
  event.preventDefault();
  //console.log(event.target[0].value);

  const inputValue = event.target[0].value;
  console.log(inputValue);

  const products = localStorage.getItem("productos");

  const parsedProducts = JSON.parse(products);
  console.log(parsedProducts);

  const search = parsedProducts.filter((producto) =>
    producto.titulo.includes(inputValue)
  );

  console.log(search);
});

const getAndSaveProducts = () => {
  fetch("./js/productos.json")
    .then((response) => response.json())
    .then((data) => {
      //       console.log(data);
      localStorage.setItem("productos", JSON.stringify(data));
    })
    .catch((error) => {
      console.error("Error al cargar los productos:", error);
    });
};

getAndSaveProducts();
