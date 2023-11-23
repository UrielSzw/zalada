import axios from 'axios';
import API_URL from '../common/env/url.env';

const usersApi = axios.create({
  baseURL: API_URL.USERS,
  headers: {
    'Content-Type': 'application/json',
  },
});

const productsApi = axios.create({
  baseURL: API_URL.PRODUCTS,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { usersApi, productsApi };
