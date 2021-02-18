import {
  ADS_NUMBER,
  createAdSet,
  createAd
} from './data.js';

import  {
  getRandomBetween,
  getRandomFloat,
  getRandomArrayElement,
  getRandomArrayWithUniqueElements
} from './util.js';


const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
const popupList = document.querySelector('#map-canvas');

const createPopup = (popupData) => {
  const popup = popupTemplate.cloneNode(true);
  const popupFeatures = popupTemplate.querySelector('.popup__features');
  const popupPhotos = popupTemplate.querySelector('.popup__photos');
  popup.querySelector('.popup__avatar').src = popupData.author.avatar;
  popup.querySelector('.popup__title').textContent = popupData.offer.title;
  popup.querySelector('.popup__text--address').textContent = popupData.offer.adress;
  popup.querySelector('.popup__text--price').textContent = popupData.offer.price;
  popup.querySelector('.popup__type').textContent = popupData.offer.type;
  popup.querySelector('.popup__text--capacity').textContent = popupData.offer.rooms + ' комнаты для ' + popupData.offer.guests + ' гостей';
  popup.querySelector('.popup__text--time').textContent = 'Заезд после ' + popupData.offer.checkin + ', выезд до ' + popupData.offer.checkout;
  popup.querySelector('.popup__description').textContent = popupData.offer.description;

  return popup
}

popupList.appendChild(createPopup(createAdSet(ADS_NUMBER)[0]));
