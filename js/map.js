import {activateForm, activateFilter, formInputAdress} from './form.js'

import {ads} from './data.js';

import {createPopup} from './popup.js'

const DIGIT_AFTER_POINT = 5
// eslint-disable-next-line
const MAP = L.map('map-canvas');

const MAIN_PIN_ICON_SIZES = {
  width: 50,
  height: 50,
};

const MAIN_PIN_ICON_ANCHOR_SIZES = {
  width: 25,
  height: 50,
};

const COMMON_PIN_ICON_SIZES = {
  width: 40,
  height: 40,
};

const COMMON_PIN_ICON_ANCHOR_SIZES = {
  width: 20,
  height: 40,
};

const TOKIO_CENTER_COORDINATES = {
  lat: 35.6895,
  lng: 139.69171,
};

formInputAdress.value = `${TOKIO_CENTER_COORDINATES.lat}, ${TOKIO_CENTER_COORDINATES.lng}`;

const loadMap = () => {
  MAP.on('load', () => {
    activateForm();
    activateFilter();
  }).setView ({
    lat: `${TOKIO_CENTER_COORDINATES.lat}`,
    lng: `${TOKIO_CENTER_COORDINATES.lng}`,
  }, 10);
};

const loadTile = () => {
  // eslint-disable-next-line
  L.tileLayer (
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(MAP);
};

const createMainIcon = () => {
  // eslint-disable-next-line
  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [MAIN_PIN_ICON_SIZES.width, MAIN_PIN_ICON_SIZES.height],
    iconAnchor: [MAIN_PIN_ICON_ANCHOR_SIZES.width, MAIN_PIN_ICON_ANCHOR_SIZES.height],
  });
  // eslint-disable-next-line
  const mainMarker = L.marker(
    {
      lat: `${TOKIO_CENTER_COORDINATES.lat}`,
      lng: `${TOKIO_CENTER_COORDINATES.lng}`,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  mainMarker.on('moveend', (evt) => {
    let currentMainMarkerCoordinates = evt.target.getLatLng()
    formInputAdress.value = `${currentMainMarkerCoordinates.lat.toFixed(DIGIT_AFTER_POINT)}, ${currentMainMarkerCoordinates.lng.toFixed(DIGIT_AFTER_POINT)}`
  });

  mainMarker.addTo(MAP);
};

const createIcons = () => {
  ads.forEach((ad) => {
    // eslint-disable-next-line
    const icon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [COMMON_PIN_ICON_SIZES.width, COMMON_PIN_ICON_SIZES.height],
      iconAnchor: [COMMON_PIN_ICON_ANCHOR_SIZES.width, COMMON_PIN_ICON_ANCHOR_SIZES.height],
    });
    // eslint-disable-next-line
    const adMarker = L.marker(
      {
        lat: ad.location.x,
        lng: ad.location.y,
      },
      {
        icon: icon,
      },
    );

    adMarker.addTo(MAP);
    adMarker.bindPopup(createPopup(ad),
      {
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
