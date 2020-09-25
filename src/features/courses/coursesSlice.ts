import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';
import { CourseDto } from './../../dtos/CourseDto';
import { CoursesDto } from './../../dtos/CoursesDto';
import { PaginationData } from './../../types/PaginationData';

interface CoursesSlice {
  isLoading: boolean;
  error: string | null;
  list: CourseDto[];
  pagination: PaginationData;
}

const initialState: CoursesSlice = {
  isLoading: false,
  error: null,
  list: [],
  pagination: {
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 10,
  },
};

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    coursesFetchStart: () => {},
    coursesFetchSuccess: (state, action: PayloadAction<CoursesDto>) => {},
    coursesFetchFailure: (state, action: PayloadAction<string>) => {},
  },
});

export const {
  coursesFetchStart,
  coursesFetchSuccess,
  coursesFetchFailure,
} = coursesSlice.actions;

export const coursesFetch = (data: PaginationData): AppThunk => (
  dispatch
) => {};

export default coursesSlice.reducer;
