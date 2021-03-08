import {activateForm, activateFilter, formInputAdress} from './form.js'

import {ads} from './data.js';

import {createPopup} from './popup.js'

const DIGIT_AFTER_POINT = 5
// eslint-disable-next-line
const MAP = L.map('map-canvas');
const OPENSTREETMAP_COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const OPENSTREETMAP_TILE = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

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

const Icons = {
  MAIN: './img/main-pin.svg',
  COMMON: './img/pin.svg'
}

const MAIN_MAP_ICON = L.icon({
  iconUrl: Icons.MAIN,
  iconSize: [MAIN_PIN_ICON_SIZES.width, MAIN_PIN_ICON_SIZES.height],
  iconAnchor: [MAIN_PIN_ICON_ANCHOR_SIZES.width, MAIN_PIN_ICON_ANCHOR_SIZES.height],
});

const MAIN_MAP_MARKER = L.marker(
  {
    lat: `${TOKIO_CENTER_COORDINATES.lat}`,
    lng: `${TOKIO_CENTER_COORDINATES.lng}`,
  },
  {
    draggable: true,
    icon: MAIN_MAP_ICON,
  },
);

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
    OPENSTREETMAP_TILE,
    {
      attribution: OPENSTREETMAP_COPYRIGHT,
    },
  ).addTo(MAP);
};

const createMainIcon = () => {
  const mainMarker = MAIN_MAP_MARKER
  mainMarker.on('move', (evt) => {
    let currentMainMarkerCoordinates = evt.target.getLatLng()
    formInputAdress.value = `${currentMainMarkerCoordinates.lat.toFixed(DIGIT_AFTER_POINT)}, ${currentMainMarkerCoordinates.lng.toFixed(DIGIT_AFTER_POINT)}`
  });

  mainMarker.addTo(MAP);
};

const createIcons = () => {
  ads.forEach((ad) => {
    // eslint-disable-next-line
    const icon = L.icon({
      iconUrl: Icons.COMMON,
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
