import { getCourses } from './../../services/api';
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
  error: 'Error oh no',
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
    coursesFetchStart: state => {
      state.isLoading = true;
      state.error = null;
      state.list = [];
    },
    coursesFetchSuccess: (state, action: PayloadAction<CoursesDto>) => {
      state.isLoading = false;
      state.error = null;
      state.list = action.payload.list;
      state.pagination = action.payload.pagination;
    },
    coursesFetchFailure: (state, action: PayloadAction<string>) => {
      return { ...initialState, error: action.payload };
    },
  },
});

export const {
  coursesFetchStart,
  coursesFetchSuccess,
  coursesFetchFailure,
} = coursesSlice.actions;

export const coursesFetch = (data: PaginationData): AppThunk => async dispatch => {
  try {
    dispatch(coursesFetchStart());

    const response = await getCourses(data);

    dispatch(coursesFetchSuccess(response.data));
  } catch (error) {
    dispatch(coursesFetchFailure(error));
  }
};

export default coursesSlice.reducer;
