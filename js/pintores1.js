const pintores = [
  "Leonardo da Vinci",
  "Frida Kahlo",
  "Vincent van Gogh",
  "Claude Monet",
  "Salvador Dalí",
  "Pablo Picasso",
  "Jackson Pollock"
];

// Preguntas y opciones
const preguntas = [
  {
    pregunta: "¿Qué tipo de actividad prefieres en tu tiempo libre?",
    opciones: [
      "Leer ciencia o filosofía",
      "Escribir un diario personal",
      "Caminar sin rumbo con música",
      "Pasear por un jardín o parque",
      "Soñar despierto o dibujar cosas raras",
      "Crear algo nunca antes visto",
      "Pintar con libertad sin reglas"
    ]
  },
  {
    pregunta: "¿Cómo te describen tus amigos?",
    opciones: [
      "Curioso y analítico",
      "Profundo y emocional",
      "Apasionado y sensible",
      "Tranquilo y observador",
      "Excéntrico y creativo",
      "Versátil e innovador",
      "Espontáneo y libre"
    ]
  },
  {
    pregunta: "¿Qué te inspira más?",
    opciones: [
      "La ciencia y la tecnología",
      "El dolor y la introspección",
      "La naturaleza cambiante",
      "La luz y el color en el entorno",
      "Los sueños y el subconsciente",
      "El arte de diferentes culturas",
      "El caos y la improvisación"
    ]
  },
  {
    pregunta: "¿Cuál es tu mayor fortaleza?",
    opciones: [
      "Intelecto e innovación",
      "Resiliencia emocional",
      "Intensidad y pasión",
      "Capacidad de contemplar",
      "Imaginación sin límites",
      "Adaptabilidad creativa",
      "Expresión sin filtro"
    ]
  },
  {
    pregunta: "¿Qué paleta de colores prefieres?",
    opciones: [
      "Tonos tierra y metálicos",
      "Rojos intensos y verdes profundos",
      "Naranjas y amarillos vibrantes",
      "Azules, lilas y rosas suaves",
      "Colores oníricos y contrastantes",
      "Blancos, negros y colores brillantes",
      "Manchas y salpicaduras multicolores"
    ]
  },
  {
    pregunta: "¿Cuál es tu visión del arte?",
    opciones: [
      "Una fusión entre ciencia y belleza",
      "Una herramienta para sanar y expresar",
      "Una forma de gritar lo que sientes",
      "Una manera de retratar la belleza natural",
      "Una puerta a otro mundo",
      "Un espejo de la sociedad y la mente",
      "Una experiencia sin estructura"
    ]
  },
  {
    pregunta: "¿Cómo trabajas mejor?",
    opciones: [
      "Con estructura y planes detallados",
      "Con emociones como guía",
      "Con altibajos y mucha pasión",
      "Con paciencia y observación",
      "Con sueños e ideas irracionales",
      "Explorando estilos diferentes",
      "De forma libre e intuitiva"
    ]
  },
  {
    pregunta: "¿Qué te atrae de una pintura?",
    opciones: [
      "Su técnica y precisión",
      "La historia personal que cuenta",
      "La fuerza de sus emociones",
      "La atmósfera y la luz",
      "Lo surreal y simbólico",
      "Su estilo innovador",
      "El movimiento y la espontaneidad"
    ]
  },
  {
    pregunta: "¿Qué frase te representa mejor?",
    opciones: [
      "El arte es la ciencia hecha visible",
      "Pinto autorretratos porque estoy sola",
      "La tristeza durará siempre",
      "Solo quiero capturar la luz",
      "El surrealismo soy yo",
      "Yo no busco, encuentro",
      "La pintura es una acción directa"
    ]
  },
  {
    pregunta: "¿Qué te gustaría dejar como legado?",
    opciones: [
      "Inventos y conocimiento",
      "Una historia personal auténtica",
      "Una obra apasionada y trágica",
      "La belleza en lo cotidiano",
      "Un universo de sueños",
      "Una revolución artística",
      "Una libertad sin límites"
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
    case "Leonardo da Vinci":
      mensajeInspirador = "Eres una mente brillante, curiosa y profunda. Como Leonardo, ves conexiones donde otros no, y buscas entender el mundo en todas sus dimensiones. Tu creatividad nace del conocimiento, y tu arte tiene alma científica. Nunca dejes de preguntar, observar y crear con propósito.<strong>&quot;La simplicidad es la máxima sofisticación.&quot;</strong>";
      imagen = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWNnanJ3NGN6dDVwZDhpMHE0djIxc28xcWh0Y3NpaHI4bnMxZ2FpMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lTXJRZtWvw4f6YORIN/giphy.gif";
      break;
    case "Frida Kahlo":
      mensajeInspirador = "Tienes un alma intensa y valiente. Como Frida, haces arte con tus cicatrices y encuentras belleza en el dolor. No temes mirar hacia dentro y transformar lo más íntimo en algo poderoso. Tu autenticidad es tu mayor don. <strong>&quot Pies, ¿para qué los quiero si tengo alas para volar?&quot</strong>";
      imagen = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTl3dWF3MXk1NXY4czdndWYwaXkxZWpkbHpwZ3AzOWI1NG1iNmVkdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/StFYUKHd2xTZkY9CQj/giphy.gif";
      break;
    case "Vincent van Gogh":
      mensajeInspirador = "Sientes profundamente, amas intensamente y vives con el corazón en la mano. Como Van Gogh, tus emociones te guían y tu arte es un volcán de sinceridad. A veces el mundo no te entiende, pero tú ves belleza en todo. <strong>&quot Sueño con pintar y luego pinto mis sueños.&quot</strong>";
       imagen = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGM4MDlvczVtbmJ4YXdqZ3A1Y2g4ZXU0MjM2M2Q3bnA4eGw4cTlzeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SlzrOuCExUp5ucyfDp/giphy.gif";
      break;
    case "Claude Monet":
      mensajeInspirador = "Eres paz, luz y contemplación. Como Monet, ves la magia en lo cotidiano y encuentras armonía en lo simple. Tu sensibilidad transforma un paisaje en poesía. Tienes el don de detener el tiempo con una mirada.<strong>&quot Mi único mérito es haber amado y comprendido la naturaleza.&quot</strong>";
      imagen = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGExNWowbWFzcWt5eWtjYW15cWdpd3c2YmpkeGt6OG1uZXd3aW1xaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XD4EfitvJ2CqVKr5p9/giphy.gif";
      break;
    case "Salvador Dalí":
      mensajeInspirador = "Tu mente es un universo paralelo. Como Dalí, te atreves a romper lo lógico y explorar lo imposible. Ves el arte como una puerta a mundos invisibles. Eres excéntrico, brillante y absolutamente único. <strong>&quot No temas a la perfección. Nunca la alcanzarás.&quot</strong>";
      imagen="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3B6bmw2N2p4NzFwdmV1a3pneGh6ZG14MDNtOW9sMGh4cDdiZXN3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZGRqRg62P4RIQ/giphy.gif";
      break;
    case "Pablo Picasso":
      mensajeInspirador = "Llevas el cambio en la sangre. Como Picasso, no temes destruir para volver a crear, romper las reglas para inventar nuevas. Eres energía en constante transformación, y el arte es tu forma de revolucionar el mundo. <strong> &quotTodo niño es un artista. El problema es seguir siéndolo cuando creces.&quot</strong>";
      imagen = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjN5ZGhzZ3hjcWpwNXF0czNpaG5tNGx0eWJuN3NkM2ZoZ2pscTdtZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KIwyVEbq9bFOXx8htB/giphy.gif";
      break;
    case "Jackson Pollock":
      mensajeInspirador = "Eres pura emoción convertida en movimiento. Como Pollock, no necesitas líneas para expresarte, solo impulso, libertad y verdad. Tu fuerza creativa está en tu autenticidad brutal. Eres arte en estado puro.<strong>&quotNo pinto lo que veo. Pinto lo que soy.&quot</strong>";
      imagen:"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTI3M2hjY2lqc3l4YTdocDRiZTI2ZG9wNDJtNzBrajZnanA1NW8zNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgKivm4IrFxrSdG/giphy.gif";
      break;
    default:
      mensajeInspirador = "Tu mente es un universo paralelo. Como Dalí, te atreves a romper lo lógico y explorar lo imposible. Ves el arte como una puerta a mundos invisibles. Eres excéntrico, brillante y absolutamente único. <strong>&quot No temas a la perfección. Nunca la alcanzarás.&quot</strong>";
      imagen="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3B6bmw2N2p4NzFwdmV1a3pneGh6ZG14MDNtOW9sMGh4cDdiZXN3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZGRqRg62P4RIQ/giphy.gif";
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

