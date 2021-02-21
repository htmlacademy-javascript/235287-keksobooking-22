// eslint-disable-next-line
import {ads, createAdSet, ADS_NUMBER} from './data.js';
// eslint-disable-next-line
import {createPopup, popupList} from './popup.js';

const testPopup = popupList.appendChild(createPopup(createAdSet(ADS_NUMBER)[0]));
