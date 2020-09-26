import axios from 'axios';
import { baseURL } from './../constants/baseURL';
import { UserLoginDto } from './../dtos/UserLoginDto';
import { apiGet, apiPost } from './axios';
import { getAuthToken } from './token';

export const authLogin = (params: UserLoginDto) => {
  return apiPost('/account/send', { params });
};

export const authLoginConfirm = (params: UserLoginDto) => {
  return apiPost('/account/confirm', { params });
};

export const getCourses = () => {
  return apiGet('/event');
};

export const subscribe = (params: any) => {
  return apiPost('/event/subscribe', {
    headers: {
      user_id: getAuthToken(),
    },
    params: {
      eventId: params,
    },
  });
};

export const postCourse = (data: any) => {
  return axios.post(`${baseURL}/event`, data, {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const getCourse = (data: string) => {
  return apiGet(`/courses/${data}`);
};

export const getProfile = () => {
  return apiGet('/profile');
};
