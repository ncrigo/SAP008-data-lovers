import {
  filterByType,
  sortByName,
  sortByNum,
  searchByName,
  percentageCalculation,
} from "./data.js";

import data from "./data/pokemon/pokemon.js";

let pkmnDataList = data.pokemon;

const scrollCard = document.getElementById("cardScroll");

function pokemonList(pokemons) {
  scrollCard.innerHTML = "";

  pokemons.forEach((pokemon) => {
    const card = document.createElement("div");

    let typesPkmn = "";

    pokemon.type.forEach((type) => {
      typesPkmn += `<p class="type-style ${type}">${type}</p>`;
    });

    card.innerHTML = `
    <div class="card">
      <img src=${pokemon.img} alt="Foto pokémon">
      <p class="number-style">${pokemon.num}</p>
      <p class="name-style">${pokemon.name}</p>    
      <div class="type-teste">${typesPkmn}</div>
    </div>
    `;

    card.addEventListener("click", function () {
      openModal(pokemon);
    });

    scrollCard.appendChild(card);
  });
}

pokemonList(pkmnDataList);

const alphabeticOrdenation = document.getElementById("sortName");
const numberAscDescOrdenation = document.getElementById("sortNum");
const typeFilter = document.getElementById("typeFilter");

alphabeticOrdenation.addEventListener("change", function () {
  let sortedPokemons = [];
  if (alphabeticOrdenation.value == "A-Z") {
    sortedPokemons = sortByName(pkmnDataList, "A-Z");
  } else {
    sortedPokemons = sortByName(pkmnDataList, "Z-A");
  }
  pokemonList(sortedPokemons);
});

numberAscDescOrdenation.addEventListener("change", function () {
  let sortedPokemons = [];
  if (numberAscDescOrdenation.value == "0-9") {
    sortedPokemons = sortByNum(pkmnDataList, "0-9");
  } else {
    sortedPokemons = sortByNum(pkmnDataList, "9-0");
  }
  pokemonList(sortedPokemons);
});

typeFilter.addEventListener("change", function () {
  const typePercentage = document.getElementById("typePercentageCard");

  let filteredPokemons = [];
  if (typeFilter.value != "all") {
    filteredPokemons = filterByType(pkmnDataList, typeFilter.value);

    const percentageValue = percentageCalculation(
      filteredPokemons.length,
      pkmnDataList.length
    );

    typePercentage.style.display = "block";
    typePercentage.innerHTML = `O tipo ${typeFilter.value} representa ${percentageValue}% dos pokémons da primeira e segunda geração!`;
  } else {
    typePercentage.style.display = "none";
    filteredPokemons = pkmnDataList;
  }
  pokemonList(filteredPokemons);
});

document
  .getElementById("searchByNameInput")
  .addEventListener("keyup", searchName);

function searchName(evento) {
  const name = evento.target.value;
  const result = searchByName(pkmnDataList, name);
  pokemonList(result);
}

const clearButton = document.getElementById("cleanButton");

function cleanInput() {
  FormData.reset();
}

clearButton.addEventListener("click", cleanInput);

function openModal(pokemon) {
  const modal = document.getElementById("modalKnowMore");

  let typesPkmn = "";
  let resistantPkmn = "";
  let weaknessesPkmn = "";

  pokemon.type.forEach((type) => {
    typesPkmn += `<p class="type-style ${type}">${type}</p>`;
  });

  pokemon.resistant.forEach((resistant) => {
    resistantPkmn += `<p class="type-style ${resistant}">${resistant}</p>`;
  });

  pokemon.weaknesses.forEach((weaknesses) => {
    weaknessesPkmn += `<p class="type-style ${weaknesses}">${weaknesses}</p>`;
  });

  const modalContent = document.getElementById("modalContent");

  modalContent.innerHTML = `
    <div class="modal-body">
      <div class="card-modal">
        <img src=${pokemon.img} alt="Foto pokémon">
        <p class="number-style">${pokemon.num}</p>
        <p class="name-style">${pokemon.name}</p>    
        <div class="type-teste">${typesPkmn}</div>
      </div>

      <div class="modal-stats">
        <p class="modal-height">Altura: ${pokemon.size.height}</p>
        <p class="modal-weight">Peso: ${pokemon.size.weight}</p> <br>
        <p>Ataque: ${pokemon.stats["base-attack"]}</p>
        <p>Defesa: ${pokemon.stats["base-defense"]}</p>
        <p>Energia: ${pokemon.stats["base-stamina"]}</p>
        <p>HP: ${pokemon.stats["max-hp"]}</p> <br>
      </div>
    </div>
     
    <div class="modal-types"> 
      <p class="modal-types-title">Resistências:</p>
      <div class="modal-types-display">${resistantPkmn}</div>
    </div>
    
    <div class="modal-types"> 
      <p class="modal-types-title">Fraquezas:</p>
      <div class="modal-types-display">${weaknessesPkmn}</div>
    </div>
  `;

  const footer = document.getElementById("footerText");

  modal.style.display = "block";
  footer.style.display = "none";
  document.body.style.overflow = "hidden";
}

const button = document.getElementById("closeModalKnowMore");
button.addEventListener("click", closeModal);

function closeModal() {
  const modal = document.getElementById("modalKnowMore");

  const footer = document.getElementById("footerText");

  modal.style.display = "none";
  footer.style.display = "block";
  document.body.style.overflow = "auto";
}
