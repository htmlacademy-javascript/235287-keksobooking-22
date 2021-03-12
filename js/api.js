const SERVER_GET_URL = 'https://22.javascript.pages.academy/keksobooking/data22';

const getData = (serverUrl, onSuccess, onError) => () => {
  fetch(serverUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onError();
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onError();
    });
}

export {getData, SERVER_GET_URL}
