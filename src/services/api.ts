import { PaginationData } from './../types/PaginationData';
import { apiPost, apiGet } from './axios';
import { UserLoginDto } from './../dtos/UserLoginDto';

export const authLogin = (params: UserLoginDto) => {
  return apiPost('/account/send', { params });
};

export const authLoginConfirm = (params: UserLoginDto) => {
  return apiPost('/account/confirm', { params });
};

export const getCourses = () => {
  return apiGet('/event');
};

export const getCourse = (data: string) => {
  return apiGet(`/courses/${data}`);
};

export const getProfile = () => {
  return apiGet('/profile');
};
