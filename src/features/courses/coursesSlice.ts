import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';
import { CoursesDto } from './../../dtos/CoursesDto';
import { EventDto } from './../../dtos/EventDto';
import { getCourses } from './../../services/api';
import { PaginationData } from './../../types/PaginationData';

interface CoursesSlice {
  isLoading: boolean;
  error: string | null;
  list: EventDto[];
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
    coursesFetchStart: state => {
      state.isLoading = true;
      state.error = null;
      state.list = [];
    },
    coursesFetchSuccess: (state, action: PayloadAction<EventDto[]>) => {
      state.isLoading = false;
      state.error = null;
      state.list = action.payload;
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

export const coursesFetch = (): AppThunk => async dispatch => {
  try {
    dispatch(coursesFetchStart());

    const response = await getCourses();

    dispatch(coursesFetchSuccess(response.data));
  } catch (error) {
    dispatch(coursesFetchFailure(error.message));
  }
};

export default coursesSlice.reducer;
