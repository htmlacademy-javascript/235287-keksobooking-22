const MAX_PRICE_VALUE = 1000000;
const MAX_ROOMS_COUNT = 100;

const MIN_PRICES = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const DIGIT_AFTER_POINT = 5

const TitleLength = {
  MIN: 30,
  MAX: 100,
}

const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
const formInteractiveElements = adForm.querySelectorAll('input, select');
const filterInteractiveElements = mapFilter.querySelectorAll('input, select');

const formInputType = adForm.querySelector('#type');
const formInputPrice = adForm.querySelector('#price');
const formInputCheckIn = adForm.querySelector('#timein');
const formInputCheckOut = adForm.querySelector('#timeout');
const formInputAdress = adForm.querySelector('#address');
const formInputTitle = adForm.querySelector('#title');
const formInputRoomNumber = adForm.querySelector('#room_number');
const formInputCapacity = adForm.querySelector('#capacity');

const formInputCapacityOptions = adForm.querySelectorAll('#capacity option');
const capacityOptionsLastVariant = formInputCapacityOptions[formInputCapacityOptions.length - 1]

const deactivateFilter = () => {
  filterInteractiveElements.forEach((filterElement) => {
    filterElement.disabled = true;
  });

  mapFilter.classList.add('map__filters--disabled')
}

const deactivateForm = () => {
  formInteractiveElements.forEach((formElement) => {
    formElement.disabled = true;
  });

  adForm.classList.add('ad-form--disabled')
  deactivateFilter();
}

const activateFilter = () => {
  filterInteractiveElements.forEach((filterElement) => {
    filterElement.disabled = false;
  });

  mapFilter.classList.remove('map__filters--disabled')
}

const activateForm = () => {
  formInteractiveElements.forEach((formElement) => {
    formElement.disabled = false;
  });

  adForm.classList.remove('ad-form--disabled')
  activateFilter();
}


const setCheckInTime = () => {
  formInputCheckOut.value = formInputCheckIn.value
};


const setCheckOutTime = () => {
  formInputCheckIn.value = formInputCheckOut.value
}

const setMinPrices = () => {
  formInputPrice.placeholder = MIN_PRICES[formInputType.value];
  formInputPrice.min = MIN_PRICES[formInputType.value];
}

const validateTitleLength = () => {
  const valueLength = formInputTitle.value.length;

  if (valueLength < TitleLength.MIN) {
    formInputTitle.setCustomValidity('Ещё ' + (TitleLength.MIN - valueLength) + ' симв.');
  } else if (valueLength > TitleLength.MAX) {
    formInputTitle.setCustomValidity('Удалите лишние ' + (valueLength - TitleLength.MAX) +' симв.');
  } else {
    formInputTitle.setCustomValidity('');
  }

  formInputTitle.reportValidity();
}

const validateMaxPrice = () => {

  const inputValue = formInputPrice.value;

  if (inputValue > MAX_PRICE_VALUE) {
    formInputPrice.setCustomValidity('Максимальная цена за ночь: ' + MAX_PRICE_VALUE)
  } else {
    formInputPrice.setCustomValidity('');
  }

  formInputPrice.reportValidity();
}

const validateMinPrice = () => {
  const inputValue = formInputPrice.value;
  if (inputValue < formInputPrice.min.value) {
    formInputPrice.setCustomValidity('Минимальная цена за ночь: ' + formInputPrice.min.value)
  } else {
    formInputPrice.setCustomValidity('');
  }

  formInputPrice.reportValidity();
}

const validateRoomsAndGuests = (evt) => {
  const roomsCount = Number(evt.target.value);
  if (roomsCount === MAX_ROOMS_COUNT) {
    formInputCapacityOptions.forEach((option) => {
      option.disabled = true;
    })

    capacityOptionsLastVariant.disabled = false;
    capacityOptionsLastVariant.selected = true;
  } else {
    formInputCapacityOptions.forEach((option) => {
      option.disabled = false;
    })

    capacityOptionsLastVariant.disabled = true;

    formInputCapacityOptions.forEach((option) => {
      if(roomsCount < option.value) {
        option.disabled = true;
      }
    })

    formInputCapacity.value = roomsCount
  }
}

const addEventListenersToForm = () => {
  formInputCheckOut.addEventListener('change', setCheckOutTime);
  formInputCheckIn.addEventListener('change', setCheckInTime);
  formInputType.addEventListener('change', setMinPrices);
  formInputTitle.addEventListener('input', validateTitleLength);
  formInputRoomNumber.addEventListener('change', validateRoomsAndGuests);

  formInputPrice.addEventListener('input', () => {
    validateMaxPrice();
    validateMinPrice();
  });
}

const setMarkerCoordinates = (coords) => {
  formInputAdress.value = `${coords.lat.toFixed(DIGIT_AFTER_POINT)}, ${coords.lng.toFixed(DIGIT_AFTER_POINT)}`
}

export {
  addEventListenersToForm,
  deactivateForm,
  activateForm,
  formInputAdress,
  setMarkerCoordinates
}
