import axios from 'axios';

const api = axios.create({
  baseURL: 'URL_DO_SEU_SERVIDOR'
})

export default api;