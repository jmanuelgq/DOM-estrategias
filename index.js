const libros = [
  "Primer Libro",
  "Segundo Libro",
  "Tercero Libro",
  "Cuarto Libro",
  "Quinto Libro",
  "Sexto Libro",
  "Septimo Libro",
  "Octavo Libro",
  "Noveno Libro",
];

const ul = document.getElementById("lista-libros");

libros.forEach((titulo) => {
  const li = document.createElement("li");
  li.style.color = "blue";
  li.style.fontWeight = "bold";
  li.textContent = titulo;
  ul.appendChild(li);
});

////////////// Eventphase ////////////////////////////
// // Obtenemos todos los <li>
// const items = ul.querySelectorAll("li");

// // Agregamos el evento a cada uno
// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("selected");
//   });
// });

////////////// Event Delegation ///////////////////////
const ullist = document.querySelector("#lista-libros");

ullist.addEventListener("click", function (event) {
  if (event.target.matches("li")) {
    const card = event.target;
    card.classList.toggle("selected");
  }
});
