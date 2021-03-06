import  {
  getRandomBetween,
  getRandomFloat,
  getRandomArrayElement,
  getRandomArrayWithUniqueElements,
  getRandomObjectValue
} from './util.js';

const TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const TITLES = [
  'Этот дом подходит именно вам!',
  'Лучшее предложение на рынке',
  'Уютный дом на выходные',
  'Отличный вариант рядом с метро',
  'Не проходите мимо!',
  'Самая выгодная цена за ночь!'];

const DESCRIPTIONS = [
  'Просто лучшее предложение из тех, что вы могли найти!',
  'Идеальный вариант для туристов на пару ночей',
  'Удачное расположение в центре города, все удобства, интернет включен в стоимость аренды',
  'В этой квартире можно устраивать самые шумные вечеринки!',
  'Разрешено проживание с животыми'];

const ADS_NUMBER = 10;

const HOUSE_TYPES = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  house: 'Дом',
  palace: 'Дворец',
};

const CoordinateX = {
  MIN: 35.65000,
  MAX: 35.70000,
};

const CoordinateY = {
  MIN: 139.70000,
  MAX: 139.80000,
};

const Price = {
  MIN: 1,
  MAX: 1000000,
};

const RoomsNumber = {
  MIN: 1,
  MAX: 20,
};

const GuestsNumber = {
  MIN: 1,
  MAX: 40,
};

const AvatarValue = {
  MIN: 1,
  MAX: 8,
};

const getRandomAvatar = () => {
  const avatarNumber = getRandomBetween(AvatarValue.MIN, AvatarValue.MAX).toString();
  return 'img/avatars/user' + avatarNumber.padStart(2,'0') + '.png'
}

const createAd = () => {

  const locationX = getRandomFloat(CoordinateX.MIN, CoordinateX.MAX, 5);
  const locationY = getRandomFloat(CoordinateY.MIN, CoordinateY.MAX, 5);
  const time = getRandomArrayElement(TIME);

  return {

    author: {
      avatar: getRandomAvatar(),
    },

    offer: {
      title: getRandomArrayElement(TITLES),
      adress: `${locationX}, ${locationY}`,
      price: getRandomBetween(Price.MIN, Price.MAX),
      type: getRandomObjectValue(HOUSE_TYPES),
      rooms: getRandomBetween(RoomsNumber.MIN, RoomsNumber.MAX),
      guests: getRandomBetween(GuestsNumber.MIN, GuestsNumber.MAX),
      checkin: time,
      checkout: time,
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
    adSet.push(createAd())
  }

  return adSet
}

// eslint-disable-next-line
const ads = createAdSet(ADS_NUMBER);

export {
  ads,
  createAdSet,
  createAd,
  ADS_NUMBER
};
