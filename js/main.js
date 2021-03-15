import {deactivateForm, activateForm, setMarkerCoordinates} from './form.js';
import {createMap, createIcons, removeIcons} from './map.js';
import {createPopup, showAlertPopup} from './popup.js'
import {getData, SERVER_GET_URL} from './api.js'

const adaptPoints = ad => ({
    lat: ad.location.lat,
    lng: ad.location.lng,
  })


const renderIcons = (ads) => {
  const points = ads.map(adaptPoints)
  const pinClickHandler = idx => createPopup(ads[idx]);

  removeIcons();
  createIcons(points, pinClickHandler);
}

const onSuccessHandler = (ads) => {
  renderIcons(ads);
}

const onErrorHandler = () => {
  console.error()
  showAlertPopup()
}

deactivateForm();
createMap(activateForm, setMarkerCoordinates);
getData(SERVER_GET_URL, onSuccessHandler, onErrorHandler)();

