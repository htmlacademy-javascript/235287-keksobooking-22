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

const validateMinPrices = () => {
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

  formInputTitle.reportValidity();
}

const validateRoomsAndGuests = (evt) => {
  switch (evt.target.value) {
    case '1':
      formInputCapacity.options[0].disabled = true;
      formInputCapacity.options[1].disabled = true;
      formInputCapacity.options[2].disabled = false;
      formInputCapacity.options[3].disabled = true;
      formInputCapacity.options[2].selected = true;
      break;
    case '2':
      formInputCapacity.options[0].disabled = true;
      formInputCapacity.options[1].disabled = false;
      formInputCapacity.options[2].disabled = false;
      formInputCapacity.options[3].disabled = true;
      formInputCapacity.options[2].selected = true;
      break;
    case '3':
      formInputCapacity.options[0].disabled = false;
      formInputCapacity.options[1].disabled = false;
      formInputCapacity.options[2].disabled = false;
      formInputCapacity.options[3].disabled = true;
      formInputCapacity.options[2].selected = true;
      break;
    case '100':
      formInputCapacity.options[0].disabled = true;
      formInputCapacity.options[1].disabled = true;
      formInputCapacity.options[2].disabled = true;
      formInputCapacity.options[3].disabled = false;
      formInputCapacity.options[3].selected = true;
      break;
    default:
      formInputCapacity.options[0].disabled = false;
      formInputCapacity.options[1].disabled = false;
      formInputCapacity.options[2].disabled = false;
      formInputCapacity.options[3].disabled = false;
      formInputCapacity.options[2].selected = true;
  }
}

const setEventListenerToFormInputCheckOut = () => {
  formInputCheckOut.addEventListener('change', () => {
    validateCheckOutTime();
  });
}

const setEventListenerToFormInputCheckIn = () => {
  formInputCheckIn.addEventListener('change', () => {
    validateCheckInTime();
  });
}

const setEventListenerToFormInputType = () => {
  formInputType.addEventListener('change', () => {
    validateMinPrices();
  });
}

const setEventListenerToFormInputTitle = () => {
  formInputTitle.addEventListener('input', () => {
    validateTitleLength();
  });
}

const setEventListenerToFormInputPrice = () => {
  formInputPrice.addEventListener('input', () => {
    validateMaxPrice();
  });
}

const setEventListenerToFormInputRoomNumber = () => {
  formInputRoomNumber.addEventListener('change', (evt) => {
    validateRoomsAndGuests(evt);
  });
}

const addEventListenersToForm = () => {
  setEventListenerToFormInputCheckOut();
  setEventListenerToFormInputCheckIn();
  setEventListenerToFormInputType();
  setEventListenerToFormInputTitle();
  setEventListenerToFormInputPrice();
  setEventListenerToFormInputRoomNumber();
}

export {
  addEventListenersToForm,
  deactivateFilter,
  deactivateForm,
  activateForm,
  activateFilter,
  formInputAdress
}
