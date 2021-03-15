import {deactivateForm, activateForm, setMarkerCoordinates} from './form.js';
import {createMap, createIcons} from './map.js';
import {createPopup, showAlertPopup} from './popup.js'
import {getData, SERVER_GET_URL} from './api.js'

const adaptPoints = ad => ({
    lat: ad.location.lat,
    lng: ad.location.lng,
  })


const onSuccessHandler = (ads) => {
  const points = ads.map(adaptPoints)
  const pinClickHandler = idx => createPopup(ads[idx]);
  createIcons(points, pinClickHandler);
}

const onErrorHandler = () => {
  console.error(err)
  showAlertPopup('Ошибка: данные об объявлениях не загружены')
}

deactivateForm();
createMap(activateForm, setMarkerCoordinates);
getData(SERVER_GET_URL, onSuccessHandler, onErrorHandler)();

