
  // Verifica si ya hay un usuario logueado
  const user = localStorage.getItem("user");
  const loginSection = document.getElementById("login-section");
  const userSection = document.getElementById("user-section");

  if (user) {
    loginSection.style.display = "none";
    userSection.style.display = "block";
    document.getElementById("userName").textContent = user;
  }

  // Maneja el envío del formulario
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      if (username) {
        localStorage.setItem("user", username);
        location.reload(); // Recarga para mostrar la sección de compras
      }
    });
  }

  // Cerrar sesión
  function logout() {
    localStorage.removeItem("user");
    location.reload(); // Recarga para mostrar el formulario de login
  }
