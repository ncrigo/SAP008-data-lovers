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
  if (valor === "A-Z") {
    data.sort((a, b) =>
      a.name.localeCompare(b.name)
    ); /* localeCompare compara sequências em uma localidade específica - para sabermos que estamos trabalhando com strings */
  } else {
    data.sort((a, b) => b.name.localeCompare(a.name));
  }
};

/* filtro pelo número do Pokémon */
const filterByNum = (data, valor) => {
  if (valor === "0-9") {
    data.sort((a, b) => {
      /* sort para ordenar os items da array */
      if (a.num > b.num) {
        /* e compare(a, b) for menor que zero, o método sort() classifica a para um índice menor que b. Ou seja, o a virá antes de b.*/
        return 1;
      } else if (a.num < b.num) {
        /* Se compare(a, b) for maior que zero, o método sort() classificará b com um índice menor que a, ou seja, b virá primeiro.*/
        return -1;
      } else if (a.num === b.num) {
        /* Se compare(a, b) retornar zero, o método sort() considera a igual a b e deixa suas posições inalteradas. */
        return 0;
      }
    });
  } else {
    data.sort((a, b) => {
      if (a.num < b.num) {
        return 1;
      } else if (a.num > b.num) {
        return -1;
      } else if (a.num === b.num) {
        return 0;
      }
    });
  }
};

const searchByName = (data, name) => {
  const filterBySearch = data.filter((pokemon) => pokemon.name.includes(name));
  return filterBySearch;
};

export { filterByName, filterByNum, filterByType, searchByName };
