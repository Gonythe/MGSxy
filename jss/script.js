const buttons = document.querySelectorAll(".show-overlay-big-boss");
const overlay = document.getElementById("overlay_big_boss");

const buttons_the_boss = document.querySelectorAll(".show-overlay-the-boss");
const overlay_the_boss = document.getElementById("overlay_the_boss");

const buttons_raiden = document.querySelectorAll(".show-overlay-raiden");
const overlay_raiden = document.getElementById("overlay_raiden");

// Afficher / cacher avec les boutons
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay_big_boss.classList.toggle("visible");
  });
});

buttons_the_boss.forEach((btntb) => {
  btntb.addEventListener("click", () => {
    overlay_the_boss.classList.toggle("visible");
  });
});

buttons_raiden.forEach((btnr) => {
  btnr.addEventListener("click", () => {
    overlay_raiden.classList.toggle("visible");
  });
});

// Fermer avec Échap
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    overlay.classList.remove("visible");
    overlay_the_boss.classList.remove("visible");
    overlay_raiden.classList.remove("visible");
  }
});
