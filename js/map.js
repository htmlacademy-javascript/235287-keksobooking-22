import {activateForm, activateFilter} from './form.js'

const tokioCenterCoordinates = {
  LAT: 35.6895,
  LNG: 139.69171
};

const map = L.map('map-canvas')
  .on('load', () => {
      activateForm();
      activateFilter();
    })
  .setView ({
    lat: `${tokioCenterCoordinates.LAT}`,
    lng: `${tokioCenterCoordinates.LNG}`,
  }, 10);

L.tileLayer (
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
