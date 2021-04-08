import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3433/',
});

export default api