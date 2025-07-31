function createList(listId, titulo, listArray) {
  const div = document.createElement("div");
  div.classList.add(listId);
  const ul = document.createElement("ul");
  const h2 = document.createElement("h2");
  document.body.append(div);
  div.append(h2);
  h2.textContent = titulo;
  div.append(ul);

  const candidatos = listArray;
  candidatos.forEach((candidato) => {
    const li = document.createElement("li");
    li.textContent = candidato;
    ul.append(li);
  });

  ul.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("selected");
    }
  });
}

const list1 = createList("listId", "quien ganara las elecciones?", [
  "Porky",
  "Vizcarra",
  "Antauro",
  "Keiko",
  "Butters",
]);
const list2 = createList("listId", "Cual es tu postre favorito?", [
  "Pie de limon",
  "3 leches",
  "leche asada",
  "torta de chocolate",
]);
