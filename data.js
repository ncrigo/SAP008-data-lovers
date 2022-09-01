/* filtro por nome dos Pokémons */
const sortByName = (data, valor) => {
  const newData = [].concat(data);
  if (valor === "A-Z") {
    newData.sort((a, b) =>
      a.name.localeCompare(b.name)
    ); /* localeCompare compara sequências em uma localidade específica */
  } else {
    newData.sort((a, b) => b.name.localeCompare(a.name));
  }
  return newData;
};

/* filtro pelo número do Pokémon */
const sortByNum = (data, valor) => {
  const newData = [].concat(data);
  if (valor === "0-9") {
    newData.sort((a, b) => {
      /* sort para ordenar os items da array */
      if (a.num > b.num) {
        /* Se compare(a, b) for maior que zero, o método sort() classificará b com um índice menor que a, ou seja, b virá primeiro.*/
        return 1;
      } else {
        /* e compare(a, b) for menor que zero, o método sort() classifica a para um índice menor que b. Ou seja, o a virá antes de b.*/
        return -1;
      }
    });
  } else {
    newData.sort((a, b) => {
      if (a.num < b.num) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  return newData;
};

//* filtro por tipo *//
const filterByType = (data, valor) => {
  /* definindo os parâmetros */
  const filterPkmnByType = data.filter(
    /* abrindo uma const para receber o filtro */
    (pokemon) =>
      pokemon.type.indexOf(valor.toLowerCase()) >
      -1 /* buscando valor que queremos pelo indexOf */
  );
  return filterPkmnByType;
};

const searchByName = (pokemon, name) => {
  return pokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(name.toLowerCase());
  });
};

function percentageCalculation(filtered, all) {
  const percentageType = (filtered * 100) / all;
  const formattedPercentage = percentageType.toFixed(0);
  return formattedPercentage;
}

export {
  sortByName,
  sortByNum,
  filterByType,
  searchByName,
  percentageCalculation,
};
