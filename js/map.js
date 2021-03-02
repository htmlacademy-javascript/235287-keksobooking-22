import {activateForm, activateFilter, formInputAdress} from './form.js'

import {ads} from './data.js';

import {createPopup} from './popup.js'

const DIGIT_AFTER_POINT = 5

const map = L.map('map-canvas')

const tokioCenterCoordinates = {
  LAT: 35.6895,
  LNG: 139.69171
};

formInputAdress.value = `${tokioCenterCoordinates.LAT}, ${tokioCenterCoordinates.LNG}`;

const loadMap = () => {
  map.on('load', () => {
      activateForm();
      activateFilter();
    })
  .setView ({
    lat: `${tokioCenterCoordinates.LAT}`,
    lng: `${tokioCenterCoordinates.LNG}`,
  }, 10);
};

const loadTile = () => {
  L.tileLayer (
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

const createMainIcon = () => {
  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });

  const mainMarker = L.marker(
    {
      lat: `${tokioCenterCoordinates.LAT}`,
      lng: `${tokioCenterCoordinates.LNG}`,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    }
  );

  mainMarker.on('moveend', (evt) => {
    let currentMainMarkerCoordinates = evt.target.getLatLng()
    formInputAdress.value = `${currentMainMarkerCoordinates.lat.toFixed(DIGIT_AFTER_POINT)}, ${currentMainMarkerCoordinates.lng.toFixed(DIGIT_AFTER_POINT)}`
  });

  mainMarker.addTo(map);
};


const createIcons = () => {
  ads.forEach((ad) => {

  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const adMarker = L.marker(
    {
      lat: ad.location.x,
      lng: ad.location.y,
    },
    {
      icon: icon
    }
  );

  adMarker.addTo(map);
  adMarker.bindPopup(createPopup(ad), {
        keepInView: true,
      },
    );
  });
}



const createMap = () => {
  loadMap();
  loadTile();
  createMainIcon();
  createIcons();
}

export {createMap}
