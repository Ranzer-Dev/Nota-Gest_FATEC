// services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/item', // endereço para a conexão com o backend
});

export default api;
