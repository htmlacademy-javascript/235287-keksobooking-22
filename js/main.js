// eslint-disable-next-line
import {ads, createAdSet, ADS_NUMBER} from './data.js';
// eslint-disable-next-line
import {addEventListenersToForm, deactivateForm, deactivateFilter} from './form.js';

import {createMap} from './map.js';

deactivateForm();
deactivateFilter();
addEventListenersToForm();
createMap();
