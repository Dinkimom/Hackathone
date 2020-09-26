import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { AppThunk } from '../../app/store';
import { EventDto } from './../../dtos/EventDto';
import { getCourses, getMyCourses, subscribe } from './../../services/api';
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
    coursesSubscribeStart: state => {
      state.isLoading = true;
    },
    coursesSubscribeSuccess: state => {
      state.isLoading = false;
    },
    coursesSubscribeFailure: state => {
      state.isLoading = false;
    },
  },
});

export const {
  coursesFetchStart,
  coursesFetchSuccess,
  coursesFetchFailure,
  coursesSubscribeStart,
  coursesSubscribeSuccess,
  coursesSubscribeFailure,
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

export const courseSubscribe = (data: string): AppThunk => async dispatch => {
  try {
    dispatch(coursesSubscribeStart());

    await subscribe(data);

    toast.success('Вы успешно подписаны');

    dispatch(coursesSubscribeSuccess());
  } catch (error) {
    toast.error('Возникли проблемы...');

    dispatch(coursesSubscribeFailure());
  }
};

export const coursesMyFetch = (): AppThunk => async dispatch => {
  try {
    dispatch(coursesFetchStart());

    const response = await getMyCourses();

    dispatch(coursesFetchSuccess(response.data));
  } catch (error) {
    dispatch(coursesFetchFailure(error.message));
  }
};

export default coursesSlice.reducer;
