const button = document.getElementById("marietomaria");
const maria = document.getElementById("maria");
const marie = document.getElementById("marie");

const btn = document.getElementById("lettre");
const overlay = document.getElementById("overlay");

const audio = document.getElementById("silent-hill");
const lettre_audio = document.getElementById("lettre-audio");

button.addEventListener("click", () => {
  maria.classList.toggle("visible");
  marie.classList.toggle("invisible");

  audio.muted = false;
  audio.play();
});

btn.addEventListener("click", () => {
  overlay.classList.toggle("visible");
  marie.classList.toggle("invisible");
  lettre_audio.currentTime = 0;

  if (lettre_audio.paused) {
    lettre_audio.play();       // lance l'audio
    lettre_audio.muted = false; // s'assure que ce n'est pas en mute
  } else {
    lettre_audio.muted = !lettre_audio.muted; // toggle mute
  }
});
