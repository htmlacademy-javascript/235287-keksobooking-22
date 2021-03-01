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

const equalizeCheckInTime = () => {
  formInputCheckIn.addEventListener('change', () => {
    formInputCheckOut.value = formInputCheckIn.value
  });
}

const equalizeCheckOutTime = () => {
  formInputCheckOut.addEventListener('change', () => {
    formInputCheckIn.value = formInputCheckOut.value
  });
}

const setMinPrices = () => {
  formInputType.addEventListener('change', () => {
    formInputPrice.placeholder = MIN_PRICES[formInputType.value];
    formInputPrice.min = MIN_PRICES[formInputType.value];
  });
}

export {
  equalizeCheckInTime,
  equalizeCheckOutTime,
  setMinPrices,
  deactivateFilter,
  deactivateForm,
  activateForm,
  activateFilter}
