const getRandomBetween = (min, max) => {
  let roundedMin = Math.ceil(min);
  let roundedMax = Math.floor(max);

  if(isNaN(roundedMin) || isNaN(roundedMax)) {
    throw new Error('Ошибка: введено некорректное значение аргумента');
  }

  if (roundedMin < 0 || roundedMax < 0) {
    throw new Error('Ошибка: введено отрицательное значение');
  }

  if (roundedMin === roundedMax) {
    return roundedMin
  }

  if (roundedMax < roundedMin) {
    let swap = 0;
    swap = roundedMax;
    roundedMax = roundedMin;
    roundedMin = swap;
  }

  return Math.floor(Math.random() * (roundedMax - roundedMin + 1) + roundedMin);
};

const getRandomFloat = (min, max, symbolsDigit) => {

  let roundedMin = Math.ceil(min);
  let roundedMax = Math.floor(max);

  if(isNaN(roundedMin) || isNaN(roundedMax) ||isNaN(symbolsDigit)) {
    throw new Error('Ошибка: введено некорректное значение аргумента');
  }

  if (roundedMin < 0 || roundedMax < 0) {
    throw new Error('Ошибка: введено отрицательное значение');
  }

  if (roundedMin === roundedMax) {
    return roundedMin
  }

  if (roundedMax < roundedMin) {
    let swap = 0;
    swap = roundedMax;
    roundedMax = roundedMin;
    roundedMin = swap;
  }

  return Number((Math.random() * (roundedMax - roundedMin) + roundedMin).toFixed(symbolsDigit));
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomBetween(0, elements.length - 1)];
};

const getRandomArrayWithUniqueElements = (array, n) => {
  return array.sort(() => 0.5 - Math.random()).slice(0, n)
}

const getRandomObjectValue = (object) => {
  const randomKey = getRandomArrayElement(Object.keys(object))
  const randomKyeValue = object[randomKey];
  return randomKyeValue
}

const pluralize = (count, variants) => {
  count = Math.abs(count) % 100;
  const count2 = count % 10;
  if (count > 10 && count < 20)
    return variants[2];
  if (count2 > 1 && count2 < 5)
    return variants[1];
  if (count2 === 1)
    return variants[0];

  return variants[2];
};

export {
  getRandomBetween,
  getRandomFloat,
  getRandomArrayElement,
  getRandomArrayWithUniqueElements,
  getRandomObjectValue,
  pluralize
};
