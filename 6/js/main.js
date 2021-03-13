// eslint-disable-next-line
import {ads, createAdSet, ADS_NUMBER} from './data.js';
// eslint-disable-next-line
import {createPopup, placePopup} from './popup.js';
// eslint-disable-next-line
placePopup(createPopup(createAdSet(ADS_NUMBER)[0]));
// eslint-disable-next-line
import {equalizeCheckInTime, equalizeCheckOutTime, setMinPrices} from './form.js';
equalizeCheckInTime();
equalizeCheckOutTime();
setMinPrices();
