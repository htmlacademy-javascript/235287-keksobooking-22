const getRandomBetween = (min, max) => {
  let roundedMin = Math.ceil(min);
  let roundedMax = Math.floor(max);

  try {
    if (roundedMin < 0 || roundedMax < 0) {
      throw new Error('Ошибка: введено отрицательное значение');
    }

    if(isNaN(roundedMin) || isNaN(roundedMax)) {
      throw new Error('Ошибка: введено некорректное значение аргумента');
    }

    if (roundedMin === roundedMax) {
      throw new Error('Ошибка: задан некорректный диапазон');
    }

    if (roundedMax < roundedMin) {
      let swap = 0;
      swap = roundedMax;
      roundedMax = roundedMin;
      roundedMin = swap;
    }

    if (roundedMin >= 0 && roundedMax >= 0 && roundedMin < roundedMax) {
      return Math.floor(Math.random() * (roundedMax - roundedMin + 1) + roundedMin);
    }
  } catch (err) {
    alert(err);
  }
};


getRandomBetween(1,10)


const getRandomFloat = (min, max, symbolsDigit) => {

  let roundedMin = Math.ceil(min);
  let roundedMax = Math.floor(max);

  try {

    if (roundedMin < 0 || roundedMax < 0) {
      throw new Error('Ошибка: введено отрицательное значение');
    }

    if(isNaN(roundedMin) || isNaN(roundedMax) ||isNaN(symbolsDigit)) {
      throw new Error('Ошибка: введено некорректное значение аргумента');
    }

    if (roundedMin === roundedMax) {
      throw new Error('Ошибка: задан некорректный диапазон');
    }

    if (roundedMax < roundedMin) {
      let swap = 0;
      swap = roundedMax;
      roundedMax = roundedMin;
      roundedMin = swap;
    }

    if (roundedMin >= 0 && roundedMax >= 0 && roundedMin < roundedMax) {
      return Number((Math.random() * (roundedMax - roundedMin) + roundedMin).toFixed(symbolsDigit));
    }
  } catch (err) {
    alert(err);
  }
};

getRandomFloat(10, 150, 4);
