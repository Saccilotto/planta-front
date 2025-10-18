import axios, { AxiosInstance } from 'axios';
class HomeService {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://3.135.202.176:3000'
    });
  }
}
const homeServiceInstance = new HomeService();
export default homeServiceInstance;
