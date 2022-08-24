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

/* filtro por nome dos Pokémons */
const filterByName = (data, valor) => {
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
const filterByNum = (data, valor) => {
  const newData = [].concat(data);
  if (valor === "0-9") {
    newData.sort((a, b) => {
      /* sort para ordenar os items da array */
      if (a.num > b.num) {
        /* Se compare(a, b) for maior que zero, o método sort() classificará b com um índice menor que a, ou seja, b virá primeiro.*/
        return 1;
      } else if (a.num < b.num) {
        /* e compare(a, b) for menor que zero, o método sort() classifica a para um índice menor que b. Ou seja, o a virá antes de b.*/
        return -1;
      } else if (a.num === b.num) {
        /* Se compare(a, b) retornar zero, o método sort() considera a igual a b e deixa suas posições inalteradas. */
        return 0;
      }
    });
  } else {
    newData.sort((a, b) => {
      if (a.num < b.num) {
        return 1;
      } else if (a.num > b.num) {
        return -1;
      } else if (a.num === b.num) {
        return 0;
      }
    });
  }
  return newData;
};

const searchByName = (pokemon, name) => {
  return pokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(name.toLowerCase());
  });
};

export { filterByName, filterByNum, filterByType, searchByName };
