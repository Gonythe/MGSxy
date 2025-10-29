const button = document.getElementById("marietomaria");
const maria = document.getElementById("maria");
const marie = document.getElementById("marie");

button.addEventListener("click", () => {
  maria.classList.toggle("visible");
  marie.classList.toggle("invisible");
});
