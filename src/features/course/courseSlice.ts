import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    courseFetchStart: (state, action: PayloadAction<string>) => {},
    courseFetchSuccess: (state, action: PayloadAction<CourseDto>) => {},
    courseFetchFailure: (state, action: PayloadAction<string>) => {},
  },
});

export const {
  courseFetchStart,
  courseFetchSuccess,
  courseFetchFailure,
} = courseSlice.actions;

export const courseFetch = (data: string): AppThunk => (dispatch) => {};

export default courseSlice.reducer;
