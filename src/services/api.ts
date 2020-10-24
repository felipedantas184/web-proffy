import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffy-felipe-dantas.herokuapp.com/'
})

export default api;
