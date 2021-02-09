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
  getRandomBetween(1,20);
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
  getRandomFloat(1,20,4);
} catch (err) {
  alert(err);
}

const houseType = ['palace', 'flat', 'house', 'bungalow'];
const time = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];


const getRandomArrayElement = (elements) => {
  const randomArrayElement = elements[getRandomBetween(0, elements.length - 1)];
  return randomArrayElement
};

const getRandomAvatar = () => {
  const avatarNumber = '0' + getRandomBetween(1,8)
  return 'img/avatars/user' + avatarNumber + '.png'
}

const getRandomArrayWithUniqueElements = (array) => {
  let newRandomArray = [];
  for (let i = 0; i < getRandomBetween(1, array.length-1); i++) {
    newRandomArray.push(array[i]);
  }

  return newRandomArray
}

const createAd = () => {

  let locationX = getRandomFloat(35.65000, 35.70000, 5);
  let locationY = getRandomFloat(139.70000, 139.80000, 5);

  return {

    author: {
      avatar: getRandomAvatar(),
    },

    offer: {
      title: 'Этот дом похдодит именно вам!',
      adress: '' + locationX + ', ' + '' + locationY,
      price: getRandomBetween(1, 100000),
      type: getRandomArrayElement(houseType),
      rooms: getRandomBetween(1, 6),
      guests: getRandomBetween(1, 12),
      checkin: getRandomArrayElement(time),
      checkout: getRandomArrayElement(time),
      features: getRandomArrayWithUniqueElements(features),
      description: 'Просто лучшее предложение из тех, что вы могли найти!',
      photos: getRandomArrayWithUniqueElements(photos),
    },

    location: {
      x: locationX,
      y: locationY,
    },
  };
};

const createAdSet = () => {

  let adSet = []

  for (let i = 0; i < 11; i++) {
    const newAd = createAd();
    adSet.push(newAd)
  }

  return adSet
}

createAdSet()
