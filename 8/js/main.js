import {createAdSet, ADS_NUMBER} from './data.js';
import {addEventListenersToForm, deactivateForm,  activateForm,  setMarkerCoordinates} from './form.js';
import {createMap} from './map.js';
import {createPopup} from './popup.js'

const ads = createAdSet(ADS_NUMBER);
const points = ads.map(ad => ({
  lat: ad.location.x,
  lng: ad.location.y,
}))

const pinClickHandler = idx => createPopup(ads[idx]);

deactivateForm();
addEventListenersToForm();
createMap(points, activateForm, setMarkerCoordinates, pinClickHandler);
