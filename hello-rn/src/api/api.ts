import axios from 'axios';
import { API_URL } from '../constants/constants';

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  console.log('TETIKLENDI');
  config.headers.Authorization = 'ÇOK_GIZLI_BILGI';
  return config;
});
