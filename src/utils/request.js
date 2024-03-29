import 'whatwg-fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }


  return response.json().then((result) => {
    if (result.code) {

    }
    if (result.stack) {

    }
    const error = new Error(result.message);
    error.response = response;
    throw error;
  });
}



/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }
 
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => response.json())
    .catch(err => location.href= '#/403')
    // .then(data => {
    //   console.log(data,'success')
    //   return data;
    // });
}
