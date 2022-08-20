import data from "./data/pokemon/pokemon.js";

import { filterByType, filterByName, filterByNum, searchByName } from "./data.js";

//* let para termos o datalist dos Pokémons *//
let pkmnDataList = data.pokemon;
let searchSpace = document.getElementById('inputToNameSearch');

/* Aparecer os pokemons no card */
const scrollCard = document.getElementById("cardScroll");

function pokemonList(pokemons) {
  scrollCard.innerHTML = "";

  pokemons.forEach((pokemon) => {
    const card = document.createElement("div");

    card.innerHTML = `
    <div class="card">
    <img src=${pokemon.img} alt="Foto pokémon">
    <p>${pokemon.num}</p>
    <p>${pokemon.name}</p>
    <p>${pokemon.type}</p>
    </div>
    `;

    scrollCard.appendChild(card);
  });
}

pokemonList(pkmnDataList);

/* Acionando os filtros */
const alphabeticOrdenation = document.getElementById("pokemonOrder");
const numberAscDescOrdenation = document.getElementById("numOrder");
const typeFilter = document.getElementById("typeOrder");

alphabeticOrdenation.addEventListener("change", function () {
  if (alphabeticOrdenation.value == "A-Z") {
    filterByName(pkmnDataList, "A-Z");
  } else {
    filterByName(pkmnDataList, "Z-A");
  }
  pokemonList(pkmnDataList);
});

numberAscDescOrdenation.addEventListener("change", function () {
  if (numberAscDescOrdenation.value == "0-9") {
    filterByNum(pkmnDataList, "0-9");
  } else {
    filterByNum(pkmnDataList, "9-0");
  }
  pokemonList(pkmnDataList);
});

typeFilter.addEventListener("change", function () {
  pkmnDataList = data.pokemon;
  if (typeFilter.value != "all") {
    pkmnDataList = filterByType(pkmnDataList, typeFilter.value);
  }
  pokemonList(pkmnDataList);
});

