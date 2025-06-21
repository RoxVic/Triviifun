// Número secreto entre 1 y 10
let secreto = Math.floor(Math.random() * 10) + 1;

function adivinar() {
  let intento = parseInt(document.getElementById("entrada").value);
  let mensaje = document.getElementById("mensaje");

  if (isNaN(intento) || intento < 1 || intento > 10) {
    mensaje.textContent = "Por favor ingresa un número válido del 1 al 10.";
    mensaje.style.color = "orange";
    return;
  }

  if (intento < secreto) {
    mensaje.textContent = "Demasiado bajo.";
    mensaje.style.color = "red";
  } else if (intento > secreto) {
    mensaje.textContent = "Demasiado alto.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "¡Correcto! 🎉";
    mensaje.style.color = "green";
  }
}
