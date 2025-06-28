const btn = document.querySelector("button");


function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

//btn.addEventListener("click", () => {
//  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//  document.body.style.backgroundColor = rndCol;
//});


function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

//btn.addEventListener("click", changeBackground);

//Esta linea desactiva la accion del botón
//btn.removeEventListener("click", changeBackground);

function showMessage() {
  alert("¡Hiciste clic en el botón!");
}

// Se agregan DOS funciones al mismo evento click
btn.addEventListener("click", changeBackground);
btn.addEventListener("click", showMessage);



