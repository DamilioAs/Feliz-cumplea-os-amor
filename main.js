document.addEventListener("DOMContentLoaded", () => {
  // Estrellas animadas
  const numStars = 100;
  for (let i = 0; i < numStars; i++) {
    const estrella = document.createElement("div");
    estrella.classList.add("star");
    estrella.style.top = `${Math.random() * 100}vh`;
    estrella.style.left = `${Math.random() * 100}vw`;
    estrella.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(estrella);
  }

  // Imágenes en cascada
  const imagenes = [
    "imagenes/imagen.webp",
    "imagenes/imagen1.jpg",
    "imagenes/imagen2.jpg",
    "imagenes/imagen3.webp",
    "imagenes/imagen4.webp",
    "imagenes/imagen5.webp",
    "imagenes/imagen6.webp",
    "imagenes/imagen7.jpg",
    "imagenes/imagen8.webp",
    "imagenes/imagen9.webp",
    "imagenes/imagen10.webp",
    "imagenes/imagen11.webp",
    "imagenes/imagen12.jpg",
    "imagenes/imagen13.webp",
    "imagenes/imagen14.webp",
    "imagenes/imagen15.jpg",
    "imagenes/imagen16.webp",
    "imagenes/imagen17.webp",
    "imagenes/imagen18.webp",
    "imagenes/imagen19.webp",
    "imagenes/imagen20.webp",
    "imagenes/imagen21.webp",
    "imagenes/imagen22.webp",
    "imagenes/imagen23.webp",
    "imagenes/imagen24.webp",
    "imagenes/imagen25.webp",
    "imagenes/imagen26.webp",
    "imagenes/imagen27.webp",
    "imagenes/imagen28.webp",
    "imagenes/imagen29.webp",
    "imagenes/imagen30.webp"
  ];

  const intervalo = 1000;
  const posicionesActivas = [];

  function cascadaImagenes() {
    const img = document.createElement("img");
    const imgIndex = Math.floor(Math.random() * imagenes.length);
    img.src = imagenes[imgIndex];
    img.classList.add("falling-image");

    let posX;
    let intentos = 10;
    let valido = false;

    while (intentos-- > 0) {
      posX = Math.round(Math.random() * 90);
      if (!posicionesActivas.some((pos) => Math.abs(pos - posX) < 10)) {
        valido = true;
        break;
      }
    }

    if (!valido) return;

    img.style.left = `${posX}vw`;
    document.body.appendChild(img);
    posicionesActivas.push(posX);

    img.addEventListener("animationend", () => {
      img.remove();
      const index = posicionesActivas.indexOf(posX);
      if (index > -1) posicionesActivas.splice(index, 1);
    });
  }

  setInterval(cascadaImagenes, intervalo);

  // Reproductor de música
  const audio = document.getElementById("audio");
  const canciones = [
    "musica/cancion1.mp3",
    "musica/cancion2.mp3",
    "musica/cancion3.mp3",
    "musica/cancion4.mp3",
    "musica/cancion5.mp3",
    "musica/cancion6.mp3",
    "musica/cancion7.mp3",
    "musica/cancion8.mp3"
  ];
  let indice = 0;
  let reproduciendo = false;

  const btnPrev = document.getElementById("btn-prev");
  const btnToggle = document.getElementById("btn-toggle");
  const btnNext = document.getElementById("btn-next");
  const imgToggle = btnToggle.querySelector("img");

  function cargarCancion() {
    audio.src = canciones[indice];
  }

  function reproducir() {
    cargarCancion();
    audio.play();
    reproduciendo = true;
    imgToggle.src = "imagenes/pause.png";
  }

  function pausar() {
    audio.pause();
    reproduciendo = false;
    imgToggle.src = "imagenes/start.png";
  }

  btnToggle.addEventListener("click", () => {
    if (reproduciendo) {
      pausar();
    } else {
      reproducir();
    }
  });

  btnNext.addEventListener("click", () => {
    indice = (indice + 1) % canciones.length;
    reproducir();
  });

  btnPrev.addEventListener("click", () => {
    indice = (indice - 1 + canciones.length) % canciones.length;
    reproducir();
  });

  audio.addEventListener("ended", () => {
    indice = (indice + 1) % canciones.length;
    reproducir();
  });

  // Mensajes que se escriben
  const mensaje = document.getElementById("mensaje-escrito");
  const frases = [
    "Hola mi vida, quiero desearte un Feliz Cumpleaños.",
    "Deseo que este día esté lleno de alegrías para ti, Kiara.",
    "Me alegra saber que puedo compartir este cumpleaños contigo.",
    "Incluso si es a la distancia, estoy feliz de estar acá.",
    "Cada día que pasa me enamoro mucho más de ti.",
    "Siempre voy a agradecer a la vida por haberte conocido.",
    "Estoy feliz de poder verte crecer, de verte madurar.",
    "Pero recuerda, no hay prisa por crecer.",
    "No tengas prisa por madurar. Tú eres tú.",
    "Tú eres especial como eres, no necesitas cambiar.",
    "Te amo mucho, mi amor, mi vida, mi todo.",
    "Feliz cumpleaños mi niña consentida, te amo 💗🎂"
  ];

  let fraseIndex = 0; 
  let letraIndex = 0;

  function escribirFrase() {
    if (letraIndex < frases[fraseIndex].length) {
      mensaje.textContent += frases[fraseIndex].charAt(letraIndex);
      letraIndex++;
      setTimeout(escribirFrase, 50);
    } else {
      setTimeout(() => {
        fraseIndex = (fraseIndex + 1) % frases.length;
        mensaje.textContent = "";
        letraIndex = 0;
        escribirFrase();
      }, 2000);
    }
  }
  escribirFrase();
});