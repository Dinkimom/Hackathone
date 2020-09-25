import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCourse } from 'services/api';
import { AppThunk } from '../../app/store';
import { CourseDto } from './../../dtos/CourseDto';

interface CourseState {
  isLoading: boolean;
  error: string | null;
  info: CourseDto | null;
}

const initialState: CourseState = {
  isLoading: false,
  error: null,
  info: null,
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    courseFetchStart: () => {
      return { ...initialState, isLoading: true };
    },
    courseFetchSuccess: (state, action: PayloadAction<CourseDto>) => {
      state.isLoading = false;
      state.error = null;
      state.info = action.payload;
    },
    courseFetchFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.info = null;
    },
  },
});

export const {
  courseFetchStart,
  courseFetchSuccess,
  courseFetchFailure,
} = courseSlice.actions;

export const courseFetch = (data: string): AppThunk => async dispatch => {
  try {
    dispatch(courseFetchStart());

    const response = await getCourse(data);

    dispatch(courseFetchSuccess(response.data));
  } catch (error) {
    dispatch(courseFetchFailure(error));
  }
};

export default courseSlice.reducer;
