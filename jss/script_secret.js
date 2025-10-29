const button = document.getElementById("marietomaria");
const maria = document.getElementById("maria");
const marie = document.getElementById("marie");

const audio = document.getElementById("silent-hill");

button.addEventListener("click", () => {
  maria.classList.toggle("visible");
  marie.classList.toggle("invisible");

  audio.muted = false;
  audio.play().catch(err => console.log(err));;
});

