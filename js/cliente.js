document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const registroSection = document.getElementById("registro-section");
  const userSection = document.getElementById("user-section");
  const mensaje = document.getElementById("mensaje-bienvenida");

  if (user) {
    registroSection.style.display = "none";
    userSection.style.display = "block";
    mensaje.textContent = `Hola ${user.nombre} ${user.apellido} (${user.email})`;
  }

  const form = document.getElementById("registroForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const apellido = document.getElementById("apellido").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (!validateEmail(email)) {
        alert("Correo inválido.");
        return;
      }

      if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }

      // sesion con datos y localStorage
      const userData = { nombre, apellido, email };
      localStorage.setItem("user", JSON.stringify(userData));
      location.reload();
    });
  }
});

function logout() {
  localStorage.removeItem("user");
  location.reload();
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
// Datos en duro para luego poner dinamicos
const compras = [
  { producto: "Laptop Asus", fecha: "2025-08-01", total: "$850.000" },
  { producto: "Mouse Gamer RGB", fecha: "2025-08-03", total: "$25.000" }
];

const pedidos = [
  { producto: "Laptop Asus", estado: "En preparación" },
  { producto: "Mouse Gamer RGB", estado: "Enviado" }
];

// Aqui las compras
const comprasList = document.getElementById("lista-compras");
compras.forEach(c => {
  const li = document.createElement("li");
  li.innerHTML = `<span>${c.producto} (${c.fecha})</span><strong>${c.total}</strong>`;
  comprasList.appendChild(li);
});

// pedidos en duro
const pedidosList = document.getElementById("lista-pedidos");
pedidos.forEach(p => {
  const li = document.createElement("li");
  li.innerHTML = `<span>${p.producto}</span><em>${p.estado}</em>`;
  pedidosList.appendChild(li);
});
