import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffy-felipe.herokuapp.com/'
})

export default api;
