const pintores = [
  "Adolf Hitler",
  "Joseph Stalin",
  "Benito Mussolini",
  "Kim Jong-il",
  "Saddam Hussein"
];

// Preguntas y opciones
const preguntas = [
  {
    pregunta: "¿Cómo organizas tu escritorio?",
    opciones: [
      "Perfectamente ordenado, cada cosa en su lugar",
      "Lo limpio cada año... si acaso",
      "Con estilo clásico y elegante",
      "Tengo asistentes que lo hacen por mí",
      "Lleno de objetos dorados y lujosos"
    ]
  },
  {
    pregunta: "Si fueras un animal, ¿cuál serías?",
    opciones: [
      "Un lobo solitario pero estratégico",
      "Un oso: fuerte pero impredecible",
      "Un águila imperial, majestuosa",
      "Un tigre blanco, raro y poderoso",
      "Un león, porque soy el rey"
    ]
  },
  {
    pregunta: "¿Cuál es tu estilo de liderazgo?",
    opciones: [
      "Planificación meticulosa y disciplina",
      "Mando colectivo... pero yo decido",
      "Carisma y discursos apasionados",
      "Culto a la personalidad, obviamente",
      "Autocrático, pero con buen gusto"
    ]
  },
  {
    pregunta: "En una fiesta, ¿qué haces?",
    opciones: [
      "Hablar de mis grandes planes en un rincón",
      "Dar discursos improvisados a quien me escuche",
      "Llegar tarde pero con estilo dramático",
      "Exigir que todos canten mis canciones favoritas",
      "Vestir el traje más caro y brillante"
    ]
  },
  {
    pregunta: "¿Cuál es tu película favorita?",
    opciones: [
      "Documentales históricos",
      "Cualquiera donde el pueblo se levante",
      "Ben-Hur o Gladiator",
      "Propaganda... digo, cine patriótico",
      "Algo con mucho oro y lujo"
    ]
  },
  {
    pregunta: "¿Qué harías si alguien no sigue tus ideas?",
    opciones: [
      "Lo aparto discretamente del grupo",
      "Lo convenzo... o lo elimino del debate",
      "Grito hasta que entienda mi grandeza",
      "Lo mando a un 'campamento de reeducación'",
      "Lo ignoro, no merece mi atención"
    ]
  },
  {
    pregunta: "Tu bebida favorita es...",
    opciones: [
      "Agua mineral, nada de excesos",
      "Vodka, como todo buen revolucionario",
      "Vino tinto italiano, de calidad",
      "Coñac importado... solo lo mejor",
      "Champán, porque soy fancy"
    ]
  },
  {
    pregunta: "¿Cómo manejas el estrés?",
    opciones: [
      "Hago listas y más listas",
      "Gritando un poco... o mucho",
      "Con un discurso épico frente al espejo",
      "Negando que exista el problema",
      "Comprando cosas caras"
    ]
  },
  {
    pregunta: "¿Qué frase dirías siempre?",
    opciones: [
      "Todo debe estar en orden",
      "El fin justifica los medios",
      "¡Roma no se construyó en un día!",
      "La lealtad es lo más importante",
      "El lujo es un derecho, no un privilegio"
    ]
  },
  {
    pregunta: "Tu pasatiempo secreto es...",
    opciones: [
      "Pintar paisajes tranquilos",
      "Escribir poesía revolucionaria",
      "Practicar discursos en el baño",
      "Ver mi propia colección de películas",
      "Contar mi dinero... por diversión"
    ]
  }
];


// Puntuación de cada pintor
let puntajes = new Array(pintores.length).fill(0);

let preguntaActual = 0;

const contenedor = document.getElementById("quiz-container");
const resultadoDiv = document.getElementById("resultado");

// Función para mostrar la pregunta actual con opciones
function mostrarPregunta() {
  const p = preguntas[preguntaActual];
  contenedor.innerHTML = `<div class="pregunta"><strong>Pregunta ${preguntaActual + 1}:</strong> ${p.pregunta}</div>`;
  
  p.opciones.forEach((opcion, index) => {
    const boton = document.createElement("button");
    boton.className = "opcion";
    boton.textContent = opcion;
    boton.onclick = () => responder(index);
    contenedor.appendChild(boton);
  });
}

// Función que se llama al elegir una opción
function responder(indiceOpcion) {
  // Sumar punto al pintor correspondiente
  puntajes[indiceOpcion]++;
  preguntaActual++;

  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}

// Función para mostrar resultado final con texto inspirador
function mostrarResultado() {
  event.preventDefault(); // evitar que el formulario recargue la página
  
  contenedor.style.display = "none";        // Oculta el quiz
  resultadoDiv.style.display = "block";     // Muestra el resultado
  const maxPuntaje = Math.max(...puntajes);
  const indiceGanador = puntajes.indexOf(maxPuntaje);
  const pintor = pintores[indiceGanador];

  let mensajeInspirador = "";

  switch (pintor) {
    case "Adolf Hitler":
      mensajeInspirador = "¡Eres el alma de la fiesta! Bueno, en realidad prefieres organizar reuniones *muy estrictas* donde todos siguen tus reglas. Te encanta el orden, los discursos apasionados y, sobre todo, que nadie hable mientras tú hablas. <strong>¿Un picnic? Solo si es en las montañas y con menú vegano.</strong> 🌄✋";
      imagen = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejA4OGJiZ3BzZXozdWRvcHMxNDdtMm85YTd6dGc4a2VuZmVqcXpydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TlK63EVskgPi1HRmu08/giphy.gif"; // GIF de alguien dando un discurso exagerado
      break;
    case "Joseph Stalin":
      mensajeInspirador = "Eres el amigo que siempre lleva *juegos de mesa* a las reuniones... pero si pierdes, accidentalmente desaparecen las fichas. Te gusta el control, las listas de invitados aprobados y que todos canten tus canciones favoritas. <strong>¿Karaoke? Solo si es el himno soviético. ¡En coro!</strong> 🎤🚩";
      imagen = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejA4OGJiZ3BzZXozdWRvcHMxNDdtMm85YTd6dGc4a2VuZmVqcXpydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TlK63EVskgPi1HRmu08/giphy.gif"; // GIF de un coro cantando seriamente
      break;
    case "Benito Mussolini":
      mensajeInspirador = "¡Fashionista del siglo XX! Te encanta posar, los trajes militares con accesorios dorados y que las fotos te capturen *perfil izquierdo*. Tu lema: <strong>'Si no hay drama, no es historia.'</strong> ¿Planes para el fin de semana? Un desfile. Solo porque sí. 🎖️📸";
      imagen = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejA4OGJiZ3BzZXozdWRvcHMxNDdtMm85YTd6dGc4a2VuZmVqcXpydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TlK63EVskgPi1HRmu08/giphy.gif"; // GIF de alguien posando exageradamente
      break;
    case "Kim Jong-il":
      mensajeInspirador = "Eres el rey de los *hobbies excéntricos*: coleccionas películas, escribes óperas y crees que el golf es demasiado fácil (¿300 hoyos en uno? ¡Normal!). Tu cumpleaños debería ser festivo mundial. <strong>¿Modesto? Nunca. ¿Legendario? Obvio.</strong> ⛳🎬";
      imagen = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejA4OGJiZ3BzZXozdWRvcHMxNDdtMm85YTd6dGc4a2VuZmVqcXpydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TlK63EVskgPi1HRmu08/giphy.gif"; // GIF de alguien "jugando" golf épicamente
      break;
    case "Saddam Hussein":
      mensajeInspirador = "Eres el que lleva el *drip* en la familia: trajes impecables, bigote iconico y una colección de armas... digo, *objetos de decoración*. Te gusta escribir poesía (épica, claro) y que tu nombre esté en todos lados. <strong>¿Ego? No, solo realidad.</strong> ✍️💼";
      imagen = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejA4OGJiZ3BzZXozdWRvcHMxNDdtMm85YTd6dGc4a2VuZmVqcXpydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TlK63EVskgPi1HRmu08/giphy.gif"; // GIF de alguien ajustándose un traje con estilo
      break;
    default:
      mensajeInspirador = "¡Eres un misterio como un meme sin contexto! Nadie sabe cómo clasificarte, pero sin duda eres el/la que lleva el caos al grupo. <strong>¿Fondo de pantalla? Una foto tuya. ¿Himno? Tu propia risa.</strong> 🤪🎉";
      imagen = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejA4OGJiZ3BzZXozdWRvcHMxNDdtMm85YTd6dGc4a2VuZmVqcXpydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TlK63EVskgPi1HRmu08/giphy.gif"; // GIF de alguien bailando absurdamente
  }
  resultadoDiv.innerHTML = `<h2>¡Eres ${pintor}!</h2><p>${mensajeInspirador}</p>
  ${imagen ? `<div class="imagen-pintor" style="background-image: url('${imagen}')"></div>` : ''}`;
}

// Inicia el quiz mostrando la primera pregunta
mostrarPregunta();

// Compartir en Facebook
document.getElementById("btn-facebook").addEventListener("click", () => {
  const url = encodeURIComponent(window.location.href);
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(facebookUrl, "_blank");
});

// Copiar enlace
document.getElementById("btn-enlace").addEventListener("click", () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert("¡Enlace copiado al portapapeles!");
  }).catch(() => {
    alert("No se pudo copiar el enlace.");
  });
});

