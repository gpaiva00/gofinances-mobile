import axios from 'axios'

const api = axios.create({
  baseURL: 'https://gofinances-gpaiva00.herokuapp.com'
  // https://gofinances-gpaiva00.herokuapp.com
  // http://10.0.0.104:3333
})

export default api;