import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://3.135.202.176:3000', // Use variáveis de ambiente para o URL da API
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
