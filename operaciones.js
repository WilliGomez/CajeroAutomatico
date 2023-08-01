const maxSaldo = 900;
const minSaldo = 10;

document.addEventListener("DOMContentLoaded", function () {
  // Obtener el nombre de usuario y saldo del usuario que inició sesión
  const username = sessionStorage.getItem("username");
  const saldo = parseFloat(sessionStorage.getItem("saldo"));

  // Verificar si el usuario ha iniciado sesión y el saldo cumple con la regla de negocio
  if (username && !isNaN(saldo) && saldo >= minSaldo && saldo <= maxSaldo) {
    // Actualizar el elemento del HTML con el nombre de usuario
    const usernameElement = document.getElementById("username");
    if (usernameElement) {
      usernameElement.textContent = username;
    } else {
      console.error('No se encontró el elemento con el ID "username".');
    }
  } else {
    // Redirigir al usuario de vuelta a la página de inicio de sesión
    window.location.href = "index.html";
  }
});

function consultarSaldo() {
  // Obtener el saldo del usuario que inició sesión
  const saldo = parseFloat(sessionStorage.getItem("saldo"));

  // Mostrar el saldo en un cuadro de diálogo o en un elemento del HTML
  alert("Saldo actual: $" + saldo);
}

function ingresarMonto() {
  // Obtener el monto a ingresar del campo de entrada
  const montoIngresarElement = document.getElementById("montoIngresar");
  const montoIngresar = parseFloat(montoIngresarElement.value);

  // Verificar si el monto ingresado es un número válido
  if (isNaN(montoIngresar) || montoIngresar < 0) {
    alert("Por favor, ingresa un monto válido.");
    return;
  }

  // Obtener el saldo actual del usuario que inició sesión
  let saldo = parseFloat(sessionStorage.getItem("saldo"));

  // Actualizar el saldo sumando el monto ingresado
  saldo += montoIngresar;

  // Verificar si el saldo cumple con la regla de negocio
  if (saldo > maxSaldo) {
    alert("El saldo ingresado excede el límite permitido de $ " + maxSaldo);
    return;
  }

  // Almacenar el nuevo saldo en sessionStorage
  sessionStorage.setItem("saldo", saldo);

  // Mostrar un mensaje de éxito
  alert("Monto ingresado correctamente. Nuevo saldo: $" + saldo);

  // Vaciar el campo de entrada
  montoIngresarElement.value = "";
}

function retirarMonto() {
  // Obtener el monto a retirar del campo de entrada
  const montoRetirarElement = document.getElementById("montoRetirar");
  const montoRetirar = parseFloat(montoRetirarElement.value);

  // Verificar si el monto a retirar es un número válido
  if (isNaN(montoRetirar) || montoRetirar < 0) {
    alert("Por favor, ingresa un monto válido.");
    return;
  }

  // Obtener el saldo actual del usuario que inició sesión
  let saldo = parseFloat(sessionStorage.getItem("saldo"));

  // Verificar si hay suficiente saldo para realizar el retiro
  if (montoRetirar > saldo) {
    alert("No tienes suficiente saldo para realizar el retiro.");
    return;
  }

  // Verificar si el saldo cumple con la regla de negocio
  if (saldo - montoRetirar < minSaldo) {
    alert("El saldo resultante no puede ser inferior a $" + minSaldo + ".");
    return;
  }

  // Actualizar el saldo restando el monto a retirar
  saldo -= montoRetirar;

  // Almacenar el nuevo saldo en sessionStorage
  sessionStorage.setItem("saldo", saldo);

  // Mostrar un mensaje de éxito
  alert("Retiro realizado correctamente. Nuevo saldo: $" + saldo);

  // Vaciar el campo de entrada
  montoRetirarElement.value = "";
}

function salir() {
  // Redirigir al usuario a la página de inicio de sesión
  window.location.href = "index.html";
}
