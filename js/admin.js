document.addEventListener("DOMContentLoaded", () => {
  const adminForm = document.getElementById("adminLoginForm");
  const adminMsg = document.getElementById("adminLoginMsg");

  if (adminForm) {
    adminForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const user = document.getElementById("adminUser").value;
      const pass = document.getElementById("adminPassword").value;

      if (user === "admin" && pass === "TecnoChile1") {
        localStorage.setItem("isAdmin", "true");
        adminMsg.textContent = "¡Bienvenido administrador!";
        window.location.href = "./modificar.html";
      } else {
        adminMsg.textContent = "Usuario o contraseña incorrectos.";
        adminMsg.textContent = "Usuario o contraseña incorrectos.";
        adminMsg.style.color = "red";
        adminMsg.style.textAlign = "center";
        adminMsg.style.fontSize = "18px";
      }
    });
  }
});
