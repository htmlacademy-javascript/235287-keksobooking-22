const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;

const MIN_PRICES = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
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


const deactivateForm = () => {
  formInteractiveElements.forEach((formElement) => {
    formElement.disabled = true;
  });

  adForm.classList.add('ad-form--disabled')
}

const deactivateFilter = () => {
  filterInteractiveElements.forEach((filterElement) => {
    filterElement.disabled = true;
  });

  mapFilter.classList.add('map__filters--disabled')
}

const activateForm = () => {
  formInteractiveElements.forEach((formElement) => {
    formElement.disabled = false;
  });

  adForm.classList.remove('ad-form--disabled')
}

const activateFilter = () => {
  filterInteractiveElements.forEach((filterElement) => {
    filterElement.disabled = false;
  });

  mapFilter.classList.remove('map__filters--disabled')
}

const validateCheckInTime = () => {
  formInputCheckOut.value = formInputCheckIn.value
};


const validateCheckOutTime = () => {
  formInputCheckIn.value = formInputCheckOut.value
}

const setMinPrices = () => {
  formInputPrice.placeholder = MIN_PRICES[formInputType.value];
  formInputPrice.min = MIN_PRICES[formInputType.value];
}

const validateTitleLength = () => {
  const valueLength = formInputTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    formInputTitle.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    formInputTitle.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) +' симв.');
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

const MAX_ROOMS_COUNT = 100;

const formInputCapacityOptions = adForm.querySelectorAll('#capacity option');

const validateRoomsAndGuests = (evt) => {
  const roomsCount = Number(evt.target.value);
  if (roomsCount === MAX_ROOMS_COUNT) {
    formInputCapacityOptions.forEach((option) => {
      option.disabled = true;
    })

    formInputCapacityOptions[formInputCapacityOptions.length - 1].disabled = false;
    formInputCapacityOptions[formInputCapacityOptions.length - 1].selected = true;
  } else {
    formInputCapacityOptions.forEach((option) => {
      option.disabled = false;
    })

    formInputCapacityOptions[formInputCapacityOptions.length - 1].disabled = true;

    formInputCapacityOptions.forEach((option) => {
      if(roomsCount < option.value) {
        option.disabled = true;
      }
    })

    formInputCapacity.value = roomsCount
  }
}

const addEventListenersToForm = () => {
  formInputCheckOut.addEventListener('change', validateCheckOutTime);
  formInputCheckIn.addEventListener('change', validateCheckInTime);
  formInputType.addEventListener('change', setMinPrices);
  formInputTitle.addEventListener('input', validateTitleLength);
  formInputRoomNumber.addEventListener('change', (evt) => {
    validateRoomsAndGuests(evt);
  });

  formInputPrice.addEventListener('input', () => {
    validateMaxPrice();
    validateMinPrice();
  });
}

export {
  addEventListenersToForm,
  deactivateFilter,
  deactivateForm,
  activateForm,
  activateFilter,
  formInputAdress
}
