// eslint-disable-next-line
import {ADS_NUMBER, createAdSet, createAd} from './data.js';
// eslint-disable-next-line
import {getRandomBetween, getRandomFloat, getRandomArrayElement, getRandomArrayWithUniqueElements, getRandomObjectValue, pluralize} from './util.js';

const ROOMS_VARIANTS = [
  'комната',
  'комнаты',
  'комнат',
];

const GUESTS_VARIANTS = [
  'гостя',
  'гостей',
  'гостей',
];

const PopupPhotosSizes = {
  WIDTH: 45,
  HEIGHT: 40,
};

const PopupAvatarsSizes = {
  WIDTH: 70,
  HEIGHT: 70,
};

const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
const popupList = document.querySelector('#map-canvas');

const createPopup = (popupData) => {
  const popup = popupTemplate.cloneNode(true);
  const popupFeatures = popup.querySelector('.popup__features');
  const popupPhotos = popup.querySelector('.popup__photos');

  const createPhotosListForPopup = () => {
    popupPhotos.textContent = '';
    const popupPhoto = document.createElement('img');
    popupData.offer.photos.forEach((photo, i) => {
      const popupPhotoTemplate = popupPhoto.cloneNode(true);
      popupPhotoTemplate.src = popupData.offer.photos[i];
      popupPhotoTemplate.classList.add('popup__photo');
      popupPhotoTemplate.style.width = `${PopupPhotosSizes.WIDTH}px`;
      popupPhotoTemplate.style.height = `${PopupPhotosSizes.HEIGHT}px`;
      popupPhotoTemplate.alt = 'Описание фотографии';
      popupPhotos.appendChild(popupPhotoTemplate);
    })
  };

  const createFeatureListForPopup = () => {
    popupFeatures.textContent = '';
    const popupFeature = document.createElement('li');
    popupData.offer.features.forEach((feature, i) => {
      const popupFeatureTemplate = popupFeature.cloneNode(true);
      popupFeatureTemplate.classList.add('popup__feature', `popup__feature--${popupData.offer.features[i]}`);
      popupFeatures.appendChild(popupFeatureTemplate);
    })
  };

  if (popupData.author.avatar) {
    popup.querySelector('.popup__avatar').src = popupData.author.avatar;
    popup.querySelector('.popup__avatar').style.width = PopupAvatarsSizes.WIDTH + 'px';
    popup.querySelector('.popup__avatar').style.height = PopupAvatarsSizes.HEIGHT + 'px';
  }

  if (popupData.offer.title) {
    popup.querySelector('.popup__title').textContent = popupData.offer.title;
  } else {
    popup.querySelector('.popup__title').remove();
  }

  if (popupData.offer.adress) {
    popup.querySelector('.popup__text--address').textContent = popupData.offer.adress;
  } else {
    popup.querySelector('.popup__text--address').remove();
  }

  if (popupData.offer.price) {
    popup.querySelector('.popup__text--price').textContent = `${popupData.offer.price} ₽/ночь`;
  } else {
    popup.querySelector('.popup__text--price').remove();
  }

  if (popupData.offer.type) {
    popup.querySelector('.popup__type').textContent = popupData.offer.type;
  } else {
    popup.querySelector('.popup__type').remove();
  }

  if (popupData.offer.rooms && popupData.offer.guests) {
    popup.querySelector('.popup__text--capacity').textContent = `${popupData.offer.rooms} ${pluralize(popupData.offer.rooms, ROOMS_VARIANTS)} для ${popupData.offer.guests} ${pluralize(popupData.offer.guests, GUESTS_VARIANTS)}`;
  } else {
    popup.querySelector('.popup__text--capacity').remove();
  }

  if (popupData.offer.checkin && popupData.offer.checkout) {
    popup.querySelector('.popup__text--time').textContent = `Заезд после ${popupData.offer.checkin} , выезд до ${popupData.offer.checkout}`;
  } else {
    popup.querySelector('.popup__text--time').remove();
  }

  if (popupData.offer.description) {
    popup.querySelector('.popup__description').textContent = popupData.offer.description;
  } else {
    popup.querySelector('.popup__description').remove();
  }

  if (popupData.offer.photos) {
    createPhotosListForPopup();
  } else {
    popupPhotos.remove();
  }

  if (popupData.offer.features) {
    createFeatureListForPopup();
  } else {
    popupFeatures.remove();
  }

  return popup
}

const testPopup = popupList.appendChild(createPopup(createAdSet(ADS_NUMBER)[0]));

export {
  createPopup,
  testPopup
}
