const getRandomBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0) {
    throw new Error('Ошибка: введено отлицательное значение');
  }

  if (max < min) {
    let swap = 0;
    swap = max;
    max = min;
    min =swap;
  }

  if (min >= 0 && max >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
};

getRandomInteger(10, 150);

const getRandomFloat = (min, max, symbolsDigit) => {

  if (min < 0 || max < 0) {
    throw new Error('Ошибка: введено отлицательное значение');
  }

  if (max < min) {
    let swap = 0;
    swap = max;
    max = min;
    min =swap;
  }

  if (min >= 0 && max >= 0 && min < max) {
    return Number((Math.random() * (max - min) + min).toFixed(symbolsNumber));
  }
};

getRandomFloat(10, 150, 4);
