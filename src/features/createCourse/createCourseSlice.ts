import { coursesFetch } from './../courses/coursesSlice';
import { postCourse } from './../../services/api';
import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';
interface CreateCourseState {
  isLoading: boolean;
  isOpened: boolean;
  error: string | null;
}

const initialState: CreateCourseState = {
  isOpened: false,
  isLoading: false,
  error: null,
};

export const createCourseSlice = createSlice({
  name: 'createCourse',
  initialState,
  reducers: {
    createCourseToggle: state => {
      state.isOpened = !state.isOpened;
    },
    createCourseStart: state => {
      state.isLoading = true;
      state.error = null;
    },
    createCourseSuccess: state => {
      return { ...initialState };
    },
    createCourseFailure: state => {
      return { ...initialState };
    },
  },
});

export const {
  createCourseToggle,
  createCourseStart,
  createCourseSuccess,
  createCourseFailure,
} = createCourseSlice.actions;

export const createCourse = (data: any): AppThunk => async dispatch => {
  try {
    dispatch(createCourseStart());

    await postCourse(data);

    dispatch(createCourseSuccess());

    dispatch(coursesFetch());
  } catch (error) {
    dispatch(createCourseFailure());
  }
};

export default createCourseSlice.reducer;
