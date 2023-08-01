// Definir los usuarios con nombre de usuario, saldo y contraseña
const users = [
  { username: "usuario1", saldo: 200, password: "contraseña1" },
  { username: "usuario2", saldo: 290, password: "contraseña2" },
  { username: "usuario3", saldo: 67, password: "contraseña3" },
];

// Función para verificar las credenciales
function verifyCredentials(username, password) {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.username === username && user.password === password) {
      return user; // Credenciales válidas
    }
  }
  return null; // Credenciales inválidas
}

// Función para manejar el envío del formulario
function handleFormSubmit() {
  // Obtener los valores de usuario y contraseña ingresados
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Verificar las credenciales
  const user = verifyCredentials(username, password);
  if (user) {
    // Almacenar el nombre de usuario y saldo en sessionStorage
    sessionStorage.setItem("username", user.username);
    sessionStorage.setItem("saldo", user.saldo);

    // Redirigir al usuario a la página de operaciones
    window.location.href = "operaciones.html";
  } else {
    alert("Credenciales incorrectas. Por favor, inténtalo nuevamente.");
  }
}
