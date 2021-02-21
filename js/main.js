// eslint-disable-next-line
import {ads, createAdSet, ADS_NUMBER} from './data.js';
// eslint-disable-next-line
import {createPopup, popupList} from './popup.js';
// eslint-disable-next-line
const testPopup = popupList.appendChild(createPopup(createAdSet(ADS_NUMBER)[0]));
