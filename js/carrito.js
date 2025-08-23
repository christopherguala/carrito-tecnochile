let productos = localStorage.getItem("originalProducts");
let isCheckingStock = false;

document.addEventListener("DOMContentLoaded", () => {
  const cartOverlay = document.getElementById("cartOverlay");
  const cartModal = document.getElementById("cartModal");
  const openCartBtn = document.querySelector(".tc-btn__icon");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartItemsContainer = document.querySelector(".cartItems");
  const cartTotalPrice = document.querySelector(".cartTotalPrice");
  const cartCounter = document.getElementById("cart-counter");

  let cart = [];
  let productosOriginales = [...productos];

  const storedProductos = localStorage.getItem("productos");
  if (storedProductos) {
    productos = JSON.parse(storedProductos);
  } else {
    productos = [...productosOriginales];
  }

  const saveCart = () => localStorage.setItem("cart", JSON.stringify(cart));
  const loadCart = () => {
    const savedCart = localStorage.getItem("cart");
    cart = savedCart ? JSON.parse(savedCart) : [];
  };
  loadCart();

  openCartBtn.addEventListener("click", () => {
    cartOverlay.hidden = false;
    cartOverlay.classList.add("visible");
    cartModal.classList.add("visible");
  });

  const closeCart = () => {
    cartOverlay.classList.remove("visible");
    cartModal.classList.remove("visible");
    setTimeout(() => (cartOverlay.hidden = true), 300);
  };

  closeCartBtn.addEventListener("click", closeCart);
  cartOverlay.addEventListener(
    "click",
    (e) => e.target === cartOverlay && closeCart()
  );

  const addItemToCart = async (title, price, imgSrc, stock = Infinity, id = null) => {
  if (isCheckingStock) return;
  isCheckingStock = true;

  const existingItem = cart.find((i) => i.title === title);
  const currentQty = existingItem ? existingItem.quantity : 0;

  try {
    await verificarStockDisponible(currentQty, stock);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ title, price, imgSrc, quantity: 1, stock, id });
    }

    saveCart();
    renderCart();
  } catch (error) {
    alert(error);
  } finally {
    isCheckingStock = false;
  }
};

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".tc-btn__primary");
    if (!btn) return;

    const itemCard = btn.closest(".tc-productCard");
    if (!itemCard) return;

    const title = itemCard
      .querySelector(".tc-productCard__body--title")
      .innerText.trim();
    const priceText = itemCard
      .querySelector(".tc-productCard__price")
      .innerText.trim();
    const imgSrc = itemCard.querySelector("img.tc-productCard__img").src;
    const producto = productos.find((p) => p.titulo === title);
    const stock = producto ? producto.stock : Infinity;
    const id = producto ? producto.id : null;
    addItemToCart(title, priceText, imgSrc, stock, id);
  });

  const renderCart = () => {
    cartItemsContainer.innerHTML = "";

    cart.forEach(({ title, price, imgSrc, quantity, stock }) => {
      const item = document.createElement("div");
      item.classList.add("cartItem");
      item.innerHTML = `
        <img src="${imgSrc}" alt="${title}" />
        <div>
          <span class="cartItemTitle">${title}</span>
          <div class="quantitySelector">
            <i class="fa-solid fa-minus restar-cantidad"></i>
            <input type="text" class="cartItemQuantity" value="${quantity}" disabled />
            <i class="fa-solid fa-plus sumar-cantidad"></i>
            <span class="cartPrice">${price}</span>
          </div>
        </div>
        <button class="btnDelete" title="Eliminar"><i class="fa-solid fa-trash"></i></button>
      `;

      item
        .querySelector(".sumar-cantidad")
        .addEventListener("click", () =>
          updateQuantity(title, quantity + 1, stock)
        );
      item
        .querySelector(".restar-cantidad")
        .addEventListener("click", () =>
          quantity > 1
            ? updateQuantity(title, quantity - 1, stock)
            : removeItem(title)
        );
      item
        .querySelector(".btnDelete")
        .addEventListener("click", () => removeItem(title));

      cartItemsContainer.appendChild(item);
    });

    updateCartTotal();
    renderCartButtons();
    updateCartCounter();
  };

  const updateQuantity = (title, newQty, stock) => {
    if (newQty > stock)
      return alert(
        "No puedes agregar más unidades de este producto. Stock limitado."
      );
    const item = cart.find((i) => i.title === title);
    if (!item) return;
    item.quantity = newQty;
    saveCart();
    renderCart();
  };

  const removeItem = (title) => {
    cart = cart.filter((i) => i.title !== title);
    saveCart();
    renderCart();
  };

  const updateCartTotal = () => {
    const total = cart.reduce((sum, { price, quantity }) => {
      const numPrice = parseFloat(
        price
          .replace(/[^\d,.-]/g, "")
          .replace(/\./g, "")
          .replace(",", ".")
      );
      return sum + numPrice * quantity;
    }, 0);
    cartTotalPrice.innerText = `$${total.toLocaleString("es-CL", {
      minimumFractionDigits: 2,
    })}`;
  };

  const renderCartButtons = () => {
    let buttonsContainer = document.querySelector(".cartButtons");
    if (!buttonsContainer) {
      buttonsContainer = document.createElement("div");
      buttonsContainer.classList.add("cartButtons");

      const payBtn = document.createElement("button");
      payBtn.classList.add("btnPay");
      payBtn.innerText = "Pagar";

      const clearBtn = document.createElement("button");
      clearBtn.classList.add("btnClearCart");
      clearBtn.innerText = "Limpiar carrito";
      clearBtn.addEventListener("click", clearCart);

    
      function simularActualizacionServidor() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("Actualización de stock completada");
          }, 2000); 
        });
      }

      payBtn.addEventListener("click", async () => {
        if (!cart.length) return alert("El carrito está vacío");

        payBtn.disabled = true;
        payBtn.innerText = "Procesando...";

        try {
          await simularActualizacionServidor(); 

          for (const item of cart) {
        const producto = productos.find((p) => p.titulo === item.title);
        if (producto && item.id != null) {
        const nuevoStock = producto.stock - item.quantity;
        producto.stock = nuevoStock;
        await actualizarStockEnAPI(item.id, nuevoStock);
        }
    }
          localStorage.setItem("productos", JSON.stringify(productos));
          window.dispatchEvent(new Event("inventory:updated"));

          alert("¡Gracias por su compra!");
          clearCart();

          if (typeof aplicarFiltros === "function") {
            aplicarFiltros();
          }
        } finally {
          payBtn.disabled = false;
          payBtn.innerText = "Pagar";
        }
      });

      buttonsContainer.append(payBtn, clearBtn);
      cartModal
        .querySelector(".cartModalContent")
        .appendChild(buttonsContainer);
    }
  };

  const clearCart = () => {
    cart = [];
    saveCart();
    renderCart();
  };

  const updateCartCounter = () => {
    if (!cartCounter) return;
    const count = cart.reduce((acc, { quantity }) => acc + quantity, 0);
    cartCounter.textContent = count > 0 ? count : "";
  };

  renderCart();
});

function verificarStockDisponible(currentQty, stock) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (currentQty >= stock) {
        reject("No puedes agregar más unidades de este producto. Stock limitado.");
      } else {
        resolve();
      }
    }, 500); 
  });
}

async function actualizarStockEnAPI(id, nuevoStock) {
  try {
    const response = await fetch(`https://68a8eeb4b115e67576ea102a.mockapi.io/productos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ stock: nuevoStock }),
    });

    if (!response.ok) throw new Error("Error actualizando producto en API");

    const data = await response.json();
    console.log("Producto actualizado:", data);
  } catch (err) {
    console.error("Error al actualizar stock:", err);
  }
}