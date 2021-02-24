const adForm = document.querySelector('.ad-form');
const formInputType = adForm.querySelector('#type');
const formInputPrice = adForm.querySelector('#price');
const formInputCheckIn = adForm.querySelector('#timein');
const formInputCheckOut = adForm.querySelector('#timeout');

const MinPrices = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

formInputCheckIn.addEventListener('change', () => {
  formInputCheckOut.value = formInputCheckIn.value
});

formInputCheckOut.addEventListener('change', () => {
  formInputCheckIn.value = formInputCheckOut.value
});

formInputType.addEventListener('change', () => {
  formInputPrice.placeholder = MinPrices[formInputType.value];
  formInputPrice.min = MinPrices[formInputType.value];
});

