const MIN_PRICES = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const adForm = document.querySelector('.ad-form');
const formInputType = adForm.querySelector('#type');
const formInputPrice = adForm.querySelector('#price');
const formInputCheckIn = adForm.querySelector('#timein');
const formInputCheckOut = adForm.querySelector('#timeout');

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

export {equalizeCheckInTime, equalizeCheckOutTime, setMinPrices}
