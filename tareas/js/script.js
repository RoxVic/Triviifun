// Creamos un arreglo inicial con tres tareas de ejemplo
let tareas = ["Estudiar ciclos", "Hacer ejercicio", "Leer un libro"];

// Función que se encarga de mostrar todas las tareas en la lista HTML
function mostrarTareas() {
  // Obtenemos el elemento <ul> con el id 'lista-tareas'
  let lista = document.getElementById("lista-tareas");

  // Limpiamos el contenido actual de la lista para evitar duplicados
  lista.innerHTML = "";

  // Recorremos cada tarea del arreglo
  for (let tarea of tareas) {
    // Creamos un nuevo elemento <li> para cada tarea
    let li = document.createElement("li");

    // Asignamos el texto de la tarea al contenido del <li>
    li.textContent = tarea;

    // Agregamos el <li> a la lista <ul> en el HTML
    lista.appendChild(li);
  }
}

// Función que agrega una nueva tarea escrita por el usuario
function agregarTarea() {
  // Obtenemos el valor que el usuario escribió en el input
  let nueva = document.getElementById("nueva-tarea").value;

  // Verificamos que la tarea no esté vacía (ni solo espacios)
  if (nueva.trim() !== "") {
    // Agregamos la nueva tarea al arreglo
    tareas.push(nueva);

    // Limpiamos el campo de texto para que quede listo para la siguiente tarea
    document.getElementById("nueva-tarea").value = "";

    // Actualizamos la lista en pantalla para incluir la nueva tarea
    mostrarTareas();
  }
}

// Llamamos a la función una vez al cargar la página para mostrar las tareas iniciales
mostrarTareas();
