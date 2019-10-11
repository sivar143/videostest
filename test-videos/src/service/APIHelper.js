
// APIHelper.js
import axios from 'axios';

  /**
   * Requests a URL, returning a promise
   *
   * @param  {string} url       The URL we want to request
   * @param  {object} [options] The options we want to pass to fetch
   *
   * @return {Promise}           The request promise
   */

  
  export default function getServiceData(url) {  
    return axios(url)
    .then(function (response) {     
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

export default function postServiceData(from) {
  return axios(form)
  .then (function (responce){
    return responce.postServiceData;
  })
  .catch(function (error) {
    return error;
  });
}