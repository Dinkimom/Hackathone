import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { baseURL } from '../constants/baseURL';
import { getAuthToken } from './token';

export const axiosClient = () => {
  return axios.create({
    baseURL,
    // headers: {
    //   Authorization: `Bearer ${getAuthToken()}`,
    // },
  });
};

export const errorHandler = (error: AxiosError) => {
  if (error.response) {
    // Request made and server responded
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);

    throw error;
  } else if (error.request) {
    // The request was made but no response was received
    console.log(error.request);

    throw new Error('Не удалось выполнить запрос');
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);

    throw new Error(error.message);
  }
};

export const apiGet = (url: string, options?: AxiosRequestConfig) => {
  return axiosClient()
    .get(url, options)
    .catch(error => errorHandler(error));
};

export const apiPost = (url: string, options?: AxiosRequestConfig) => {
  return axiosClient()
    .post(url, options)
    .catch(error => errorHandler(error));
};

export const apiPut = (url: string, options?: AxiosRequestConfig) => {
  return axiosClient()
    .post(url, options)
    .catch(error => errorHandler(error));
};

export const apiDelete = (url: string, options?: AxiosRequestConfig) => {
  return axiosClient()
    .delete(url, options)
    .catch(error => errorHandler(error));
};
