import { AxiosResponse } from 'axios';
import { productsApi, usersApi } from './axiosInstance.service';

export const getProducts = (): Promise<AxiosResponse<any>> => productsApi.get('/products');

export const getProductById = (params: any): Promise<AxiosResponse<any>> =>
  productsApi.get(`/product?productId=${params}`, params);

export const register = (params?: any): Promise<AxiosResponse<any>> =>
  usersApi.post(`/user`, params);

export const getUser = (params?: any): Promise<AxiosResponse<any>> =>
  usersApi.get(`/user/${params}`, params);

export const updateUser = (params?: any): Promise<AxiosResponse<any>> =>
  usersApi.put(`/user/${params}`, params);

export const deleteUser = (params?: any): Promise<AxiosResponse<any>> =>
  usersApi.delete(`/user/${params}`, params);

export const login = (params: any): Promise<AxiosResponse<any>> =>
  usersApi.post(`/session`, params);
