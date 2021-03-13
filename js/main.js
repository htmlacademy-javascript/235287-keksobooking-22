import {addEventListenersToForm, deactivateForm,  activateForm,  setMarkerCoordinates} from './form.js';
import {createMap} from './map.js';
import {createPopup, showAlertPopup} from './popup.js'
import {getData, SERVER_GET_URL} from './api.js'

deactivateForm();
addEventListenersToForm();

const onSuccessHandler = (ads) => {
  const points = ads.map(ad => ({
    lat: ad.location.lat,
    lng: ad.location.lng,
  }))

  const pinClickHandler = idx => createPopup(ads[idx]);
  createMap(points, activateForm, setMarkerCoordinates, pinClickHandler);
}

const onErrorHandler = () => {
  showAlertPopup('Ошибка: данные об объявлениях не загружены')
}

getData(SERVER_GET_URL, onSuccessHandler, onErrorHandler)();

