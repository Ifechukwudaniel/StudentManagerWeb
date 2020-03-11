import axios from 'axios';
import authService from './authService';

class AxiosService {

  axiosInstance = {};

  constructor() {
    this.initInstance();
  }

  initInstance() {
    this.axiosInstance = axios.create({
      timeout: 5000
    });

    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = authService.getToken();

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      });

    return this.axiosInstance;
  }

  getInstance() {
    return this.axiosInstance || this.initInstance();
  }
}

export default new AxiosService();
