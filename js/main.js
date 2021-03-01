// eslint-disable-next-line
import {ads, createAdSet, ADS_NUMBER} from './data.js';
// eslint-disable-next-line
import {equalizeCheckInTime, equalizeCheckOutTime, setMinPrices, deactivateForm, deactivateFilter} from './form.js';
deactivateForm();
deactivateFilter();
equalizeCheckInTime();
equalizeCheckOutTime();
setMinPrices();

