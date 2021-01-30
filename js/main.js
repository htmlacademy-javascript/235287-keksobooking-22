const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= 0 && max >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // Подсмотрел логику на MDN
  }

  else if (min < 0 || max < 0) {
    return 'Ошибка: введено отлицательное значение';
  }

  else {
    return 'Ошибка: Максимальное значение больше или равно минимальному';
  }
};

getRandomInteger();

const getRandomCoordinates = (min, max, symbolsNumber) => {
  if (min >= 0 && max >= 0 && min < max) {
    return Number((Math.random() * (max - min + 1) + min).toFixed(symbolsNumber));
  }

  else if (min < 0 || max < 0) {
    return 'Ошибка: введено отлицательное значение';
  }

  else {
    return 'Ошибка: Максимальное значение больше или равно минимальному';
  }
}

getRandomCoordinates();
