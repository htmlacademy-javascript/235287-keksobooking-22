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

//Как работает эта шляпа:
// Мы создали функцию CreateMap, которая:
// 1) загружает карту
// 2) загружает тайл карты
// 3) создает главную иконку и добавляет ее на карту
// 4) создает второстепенные иконки и добавляет их на карту

// Эта функция принимает следующие параметры
// 1) массив с объектами координат (points)
// 2) Функцию, которая происходит при загрузке карты (onLoad)
// 3) Функцию, которая происходит при движении главной иконки (onMainPinMove)
// 4) Функцию, которая происходит при клике на второстепенную иконку (onPinClick)

// Мы вызываем функцию и передаем ей следующие аргументы
// 1) points — это массив с объектами координат. Его мы получаем в main.js с помощью метода map, которые применяем к массиву ads
// 2) activateForm — это функция, которая активирует форму и фильтр на странице. Ее мы импотрируем в main из модуля form.js
// 3) setMarkerCoordinates — это функция, которая подставляет координаты в поле формы «адрес»
// 4) pinClickHandler — это функция, которая ХЗ ЧТО ДЕЛАЕТ, потому что я пока не врубился в синтаксис

// Когда мы вызываем функцию createMap с указанными выше аргументами, происходит следующее:

// 1) Сначала вызывается функция loadMap, в которую мы передали два аргумента: функция activateForm и функция setMarkerCoordinates

                                                    // const loadMap = (activateForm, setMarkerCoordinates) => {
                                                    //   MAP.on('load', activateForm).setView(TOKIO_CENTER_COORDINATES, 10);
                                                    //   setMarkerCoordinates(TOKIO_CENTER_COORDINATES)
                                                    // };

                                    // Т.е. по событию 'load' вызывается колбек-функция activateForm и активирует форму.
                                    // Потом вызывается функция setMarkerCoordinates с аргументом TOKIO_CENTER_COORDINATES
                                    // и подставляет координаты центра Токио в поле «адрес». Получается, что она выглядит так (не вызов, а определение):

                                    // const setMarkerCoordinates = (TOKIO_CENTER_COORDINATES) => {
                                    //  formInputAdress.value = `${TOKIO_CENTER_COORDINATES.lat.toFixed(DIGIT_AFTER_POINT)}, ${TOKIO_CENTER_COORDINATES.lng.toFixed(DIGIT_AFTER_POINT)}`
                                    // }

// 2) Потом вызывается функция loadTile, которая просто создает главный тайл и добавляет его на карту. Ничего страшного пока.
// 3) Потом вызывается функция createMainIcon, в которую мы передали в качестве аргумента функцию setMarkerCoordinates.

                                                // const createMainIcon = (setMarkerCoordinates) => {
                                                //   const mainMarker = MAIN_MAP_MARKER
                                                //   const mainPinMoveHandler = (evt) => {
                                                //     onMainPinMove(evt.target.getLatLng()) //полученные координаты передаем в обработчик изменения координат
                                                //  }

                                                //   mainMarker.on('move', mainPinMoveHandler); //навершиваем обработчик движения главного маркера
                                                //   mainMarker.addTo(MAP);
                                                // };

                                    // Т.е. функция создает главную иконку
                                    // Потом создает колбек функцию, которая будет срабатывать при передвижении иконки.
                                    // В этой функции вызывается колбек-функция setMarkerCoordinates с переданными текущими координатами иконки
                                    // Потом вешается обработчик события передвижения иконки, в который передается функция, вызывающая колбек-функцию setMarkerCoordinates
                                    // Т.е. каждый раз, когда будует перемещаться иконка, будет срабатывать колбек
                                    // Потом иконка добавляется на карту

// 4) Потом вызывается функция createIcons, в которую мы передали в качестве аргумента массив points и функцию pinClickHandler.

                                                // const createIcons = (points, pinClickHandler) => {
                                                  // points.forEach((point, idx) => {
                                                    // eslint-disable-next-line
                                                    // const icon = L.icon({
                                                      // iconUrl: Icons.COMMON,
                                                      // iconSize: [COMMON_PIN_ICON_SIZES.width, COMMON_PIN_ICON_SIZES.height],
                                                      // iconAnchor: [COMMON_PIN_ICON_ANCHOR_SIZES.width, COMMON_PIN_ICON_ANCHOR_SIZES.height],
                                                    // });
                                                    // eslint-disable-next-line
                                                    // const adMarker = L.marker(
                                                      // point,
                                                      // {
                                                        // icon: icon,
                                                      // },
                                                    // );

                                                    // adMarker.addTo(MAP);
                                                    // adMarker.bindPopup(pinClickHandler(idx),
                                                      // {
                                                        // keepInView: true,
                                                      // },
                                                    // );
                                                  // });
                                                // }
