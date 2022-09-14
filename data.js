const sortByName = (data, valor) => {
  const newData = [].concat(data);
  if (valor === "A-Z") {
    newData.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    newData.sort((a, b) => b.name.localeCompare(a.name));
  }
  return newData;
};

const sortByNum = (data, valor) => {
  const newData = [].concat(data);
  if (valor === "0-9") {
    newData.sort((a, b) => {
      if (a.num > b.num) {
        return 1;
      } else {
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

const filterByType = (data, valor) => {
  const filterPkmnByType = data.filter(
    (pokemon) => pokemon.type.indexOf(valor.toLowerCase()) > -1
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
