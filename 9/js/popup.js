import {pluralize} from './util.js';

const ROOMS_VARIANTS = ['комната', 'комнаты', 'комнат'];
const GUESTS_VARIANTS = ['гостя', 'гостей', 'гостей'];
const POPUP_TEMPLATE = document.querySelector('#card').content.querySelector('.popup');
const POPUP_SUCCESS = document.querySelector('#success').content.querySelector('.success');
const POPUP_ERROR = document.querySelector('#error').content.querySelector('.error');
const MAIN = document.querySelector('main');
const ALERT_POPUP_TIME = 5000;
const PopupAvatarsSizes = {
  WIDTH: 70,
  HEIGHT: 70,
};

const createPhotosListForPopup = (popupData, template) => {
  const popupPhotos = template.querySelector('.popup__photos');
  const popupPhoto = template.querySelector('.popup__photo');
  const fragment = document.createDocumentFragment();

  const fillPhotos = (photo, i) => {
    const popupPhotoTemplate = popupPhoto.cloneNode(true)

    popupPhotoTemplate.setAttribute('src', popupData.offer.photos[i]);
    fragment.appendChild(popupPhotoTemplate);
  }

  popupPhotos.textContent = '';
  popupData.offer.photos.forEach(fillPhotos)

  return fragment
};

const createFeatureListForPopup = (popupData, template) => {

  const popupFeatures = template.querySelector('.popup__features');
  const popupFeature = template.querySelector('.popup__feature');
  const fragment = document.createDocumentFragment();

  const fillFeatures = (feature, i) => {
    const popupFeatureTemplate = popupFeature.cloneNode(true);

    popupFeatureTemplate.classList.add('popup__feature', `popup__feature--${popupData.offer.features[i]}`);
    fragment.appendChild(popupFeatureTemplate);
  }

  popupFeatures.textContent = '';
  popupData.offer.features.forEach(fillFeatures)

  return fragment
};

const createPopup = (popupData) => {
  const popup = POPUP_TEMPLATE.cloneNode(true);
  const popupPhotos = popup.querySelector('.popup__photos');
  const popupFeatures = popup.querySelector('.popup__features');

  if (popupData.author.avatar) {
    popup.querySelector('.popup__avatar').setAttribute('src', popupData.author.avatar);
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
    popupPhotos.append(createPhotosListForPopup(popupData, popup));
  } else {
    popupPhotos.remove();
  }

  if (popupData.offer.features) {
    popupFeatures.append(createFeatureListForPopup(popupData, popup));
  } else {
    popupFeatures.remove();
  }

  return popup
}

const showPopupSuccess = () => {
  const popup = POPUP_SUCCESS.cloneNode(true);
  popup.style.zIndex = 9999;
  MAIN.appendChild(popup);

  popup.addEventListener('click', () => {
    popup.remove()
  })

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      popup.remove()
    }
  })
}

const showPopupError = () => {
  const popup = POPUP_ERROR.cloneNode(true);
  popup.style.zIndex = 9999;
  MAIN.appendChild(popup);

  const popupCloseButton = popup.querySelector('.error__button');

  popupCloseButton.addEventListener('click', () => {
    popup.remove()
  })

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      popup.remove()
    }
  })
}

const showAlertPopup = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 1000;
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontFamily = 'Roboto';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_POPUP_TIME);
}

export {
  createPopup,
  showPopupSuccess,
  showPopupError,
  ALERT_POPUP_TIME,
  showAlertPopup
}