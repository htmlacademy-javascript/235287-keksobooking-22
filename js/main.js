const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= 0 && max >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // Подсмотрел логику на MDN
  } else if (min < 0 || max < 0) {
    throw new Error('Ошибка: введено отлицательное значение');
  } else {
    throw new Error('Ошибка: Минимальное значение больше или равно максимальному');
  }
};

getRandomInteger(10, 150);

const getRandomFloat = (min, max, symbolsNumber) => {
  if (min >= 0 && max >= 0 && min < max) {
    return Number((Math.random() * (max - min + 1) + min).toFixed(symbolsNumber));
  } else if (min < 0 || max < 0) {
    throw new Error('Ошибка: введено отлицательное значение');
  } else {
    throw new Error('Ошибка: Минимальное значение больше или равно максимальному');
  }
};

getRandomFloat(10, 150, 4);
