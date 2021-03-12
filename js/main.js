
import {addEventListenersToForm, deactivateForm,  activateForm,  setMarkerCoordinates} from './form.js';
import {createMap} from './map.js';
import {createPopup} from './popup.js'
import {getData, SERVER_GET_URL} from './api.js'

deactivateForm();
addEventListenersToForm();

const onSuccessHandler = (ads) => {
  console.log(ads)
  const points = ads.map(ad => ({
          lat: ad.location.lat,
          lng: ad.location.lng,
        }))

  const pinClickHandler = idx => createPopup(ads[idx]);
  createMap(points, activateForm, setMarkerCoordinates, pinClickHandler);
}

const onErrorHandler = (error) => {
  console.error(error);
}

getData(SERVER_GET_URL, onSuccessHandler, onErrorHandler)();
