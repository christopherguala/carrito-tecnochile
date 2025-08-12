document.addEventListener('DOMContentLoaded', () => {
  const cartOverlay = document.getElementById('cartOverlay');
  const cartModal = document.getElementById('cartModal');
  const openCartBtn = document.querySelector('.tc-btn__icon');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartItemsContainer = document.querySelector('.cartItems');
  const cartTotalPrice = document.querySelector('.cartTotalPrice');
  const cartCounter = document.getElementById('cart-counter');

  let cart = [];
  const productosOriginales = [...productos]; 

  function asignarListenersAgregarCarrito() {// Agregar productos con botones .tc-btn__primary se pasa a funcion para usarla 2 veces, una al principio y cada ves despues de pagar
  const addToCartButtons = document.querySelectorAll('.tc-btn__primary');
  addToCartButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const itemCard = btn.closest('.tc-productCard');
      const title = itemCard.querySelector('.tc-productCard__body--title').innerText.trim();
      const priceText = itemCard.querySelector('.tc-productCard__price').innerText.trim();
      const imgSrc = itemCard.querySelector('img.tc-productCard__img').src;

      addItemToCart(title, priceText, imgSrc);
    });
  });
}

  // Abrir carrito: mostrar overlay y modal
  openCartBtn.addEventListener('click', () => {
    cartOverlay.hidden = false;
    cartOverlay.classList.add('visible');
    cartModal.classList.add('visible');
  });

  // Cerrar carrito  overlay y modal se van 
   function closeCart() {
    cartOverlay.classList.remove('visible');
    cartModal.classList.remove('visible');

    // Ocultar overlay 
    setTimeout(() => {
      cartOverlay.hidden = true;
    }, 300);
  }

  closeCartBtn.addEventListener('click', closeCart);

  // Cerrar carrito clic fuera por el overlay
  cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) {
      closeCart();
    }
  });

  
    asignarListenersAgregarCarrito();

  function addItemToCart(title, price, imgSrc) { //se modifica la funcion para que no se pueda agregar mas de lo que haya en stock
  const producto = productos.find(p => p.titulo === title);
  if (!producto) return;

  const existingItem = cart.find(i => i.title === title);
  const currentQtyInCart = existingItem ? existingItem.quantity : 0;

  if (currentQtyInCart >= producto.stock) {
    alert('No puedes agregar más unidades de este producto. Stock limitado.');
    return;
  }

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id: producto.id, title, price, imgSrc, quantity: 1 });
  }

  renderCart();
}

  function renderCart() {
    cartItemsContainer.innerHTML = '';

    cart.forEach(({ title, price, imgSrc, quantity }) => {
      const item = document.createElement('div');
      item.classList.add('cartItem');
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

      // botones para aumentar y reducir dentro del carro ( si intentamos reducir de 1 se va el producto)
      item.querySelector('.sumar-cantidad').addEventListener('click', () => {
        updateQuantity(title, quantity + 1);
      });
    item.querySelector('.restar-cantidad').addEventListener('click', () => {
  if (quantity > 1) {
    updateQuantity(title, quantity - 1);
  } else {
    removeItem(title); 
  }
});

      // eliminar prudcto del carrito al hacer click al basurero 
      item.querySelector('.btnDelete').addEventListener('click', () => {
        removeItem(title);
      });

      cartItemsContainer.appendChild(item);
    });

    updateCartTotal();
    renderCartButtons();
    updateCartCounter();
  }

  function updateQuantity(title, newQty) { // se modifica para no superar el stock
  const producto = productos.find(p => p.titulo === title);
  const item = cart.find((i) => i.title === title);

  if (!producto || !item) return;

  if (newQty > producto.stock) {
    alert('No puedes agregar más unidades de este producto. Stock limitado.');
    return;
  }

  item.quantity = newQty;
  renderCart();
}

  function removeItem(title) {
    cart = cart.filter((i) => i.title !== title);
    renderCart();
  }

  function updateCartTotal() {
    const total = cart.reduce((sum, item) => {
      let numPrice = parseFloat(item.price.replace(/[^\d,.-]/g, '').replace(/\./g, '').replace(',', '.'));
      return sum + numPrice * item.quantity;
    }, 0);

    cartTotalPrice.innerText = `$${total.toLocaleString('es-CL', { minimumFractionDigits: 2 })}`;
  }

  function renderCartButtons() {
    let buttonsContainer = document.querySelector('.cartButtons');
    if (!buttonsContainer) {
      buttonsContainer = document.createElement('div');
      buttonsContainer.classList.add('cartButtons');

      const payBtn = document.createElement('button');  // boton para pagar
      payBtn.classList.add('btnPay');
      payBtn.innerText = 'Pagar';
      payBtn.addEventListener('click', () => {
        if (cart.length === 0) {
          alert('El carrito está vacío');
          return;
        }

        // Actualiza el stock de productos
        cart.forEach(item => {
          const producto = productos.find(p => p.title === item.title || p.titulo === item.title);
          if (producto) {
            producto.stock -= item.quantity;
          }
        });

        alert('¡Gracias por su compra!');
        clearCart();

        // Re-renderizar productos (cards)
        aplicarFiltros(); // esta función ya renderiza con el stock actualizado
        asignarListenersAgregarCarrito();
      });

      const clearBtn = document.createElement('button');  // boton para eliminar todo
      clearBtn.classList.add('btnClearCart');
      clearBtn.innerText = 'Limpiar carrito';
      clearBtn.addEventListener('click', () => {
        clearCart();
      });

      buttonsContainer.appendChild(payBtn);
      buttonsContainer.appendChild(clearBtn);

      cartModal.querySelector('.cartModalContent').appendChild(buttonsContainer);
    }
  }
  
  function clearCart() {
    cart = [];
    renderCart();
   // closeCart();            despues de probar es mejor que no se cierre automaticamente , decidi comentar esperando feedback
  }
  // contador productos 
  function updateCartCounter() {
    if (!cartCounter) return;
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCounter.textContent = count > 0 ? count : '';
  }

  // Inicializar
  renderCart();
});
