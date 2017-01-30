import axios from 'axios'

const request = (url, method, data = null) => {
  const headers = () => {
    return {
      Accept: 'application/ld+json'
    }
  }

  return axios({
    url,
    method,
    responseType: 'json',
    data,
    headers: headers()
  })
}

export default request
