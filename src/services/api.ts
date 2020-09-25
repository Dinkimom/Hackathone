import { PaginationData } from './../types/PaginationData';
import { apiPost, apiGet } from './axios';
import { UserLoginDto } from './../dtos/UserLoginDto';

export const authLogin = (data: UserLoginDto) => {
  return apiPost('/login', { data });
};

export const authLoginByToken = () => {
  return apiGet('/login');
};

export const getCourses = (params: PaginationData) => {
  return apiGet('/courses', { params });
};

export const getCourse = (data: string) => {
  return apiGet(`/courses/${data}`);
};

export const getProfile = () => {
  return apiGet('/profile');
};
