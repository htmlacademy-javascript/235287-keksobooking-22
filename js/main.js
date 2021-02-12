const HOUSE_TYPE = ['palace', 'flat', 'house', 'bungalow'];
const TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const TITLES = ['Этот дом подходит именно вам!', 'Лучшее предложение на рынке', 'Уютный дом на выходные', 'Отличный вариант рядом с метро', 'Не проходите мимо!', 'Самая выгодная цена за ночь!']
const DESCRIPTIONS = ['Просто лучшее предложение из тех, что вы могли найти!', 'Идеальный вариант для туристов на пару ночей', 'Удачное расположение в центре города, все удобства, интернет включен в стоимость аренды', 'В этой квартире можно устраивать самые шумные вечеринки!', 'Разрешено проживание с животыми'];
const COORDINATE_X_MIN = 35.65000;
const COORDINATE_X_MAX = 35.70000;
const COORDINATE_Y_MIN = 139.70000;
const COORDINATE_Y_MAX = 139.80000;
const PRICE_MIN = 1;
const PRICE_MAX = 1000000;
const ROOMS_NUMBER_MIN = 1;
const ROOMS_NUMBER_MAX = 20;
const GUESTS_NUMBER_MIN = 1;
const GUESTS_NUMBER_MAX = 40;
const AVATAR_MIN = 1;
const AVATAR_MAX = 8;
const ADS_NUMBER = 10;

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

try {
  getRandomBetween(1, 20);
} catch (err) {
  alert(err);
}

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

try {
  getRandomFloat(1, 20, 4);
} catch (err) {
  alert(err);
}

const getRandomArrayElement = (elements) => {
  return elements[getRandomBetween(0, elements.length - 1)];
};

const getRandomAvatar = () => {
  return 'img/avatars/user' + '0' + getRandomBetween(AVATAR_MIN, AVATAR_MAX) + '.png'
}

const getRandomArrayWithUniqueElements = (array, n) => {
  return array.sort(() => 0.5 - Math.random()).slice(0, n)
}

const createAd = () => {

  const locationX = getRandomFloat(COORDINATE_X_MIN, COORDINATE_X_MAX, 5);
  const locationY = getRandomFloat(COORDINATE_Y_MIN, COORDINATE_Y_MAX, 5);

  return {

    author: {
      avatar: getRandomAvatar(),
    },

    offer: {
      title: getRandomArrayElement(TITLES),
      adress: '' + locationX + ', ' + '' + locationY,
      price: getRandomBetween(PRICE_MIN, PRICE_MAX),
      type: getRandomArrayElement(HOUSE_TYPE),
      rooms: getRandomBetween(ROOMS_NUMBER_MIN, ROOMS_NUMBER_MAX),
      guests: getRandomBetween(GUESTS_NUMBER_MIN, GUESTS_NUMBER_MAX),
      checkin: getRandomArrayElement(TIME),
      checkout: getRandomArrayElement(TIME),
      features: getRandomArrayWithUniqueElements(FEATURES, getRandomBetween(1, FEATURES.length -1)),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayWithUniqueElements(PHOTOS),
    },

    location: {
      x: locationX,
      y: locationY,
    },
  };
};

const createAdSet = (ADS_NUMBER) => {

  const adSet = []

  for (let i = 0; i < ADS_NUMBER; i++) {
    const newAd = createAd();
    adSet.push(newAd)
  }

  return adSet
}

// eslint-disable-next-line
const ads = createAdSet(ADS_NUMBER);
