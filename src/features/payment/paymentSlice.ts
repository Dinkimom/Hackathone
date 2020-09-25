import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'app/store';
import { EventDto } from './../../dtos/EventDto';

interface PaymentState {
  step: 'start' | 'qr' | 'success';
  error: string | null;
  course: EventDto | null;
}

const initialState: PaymentState = {
  step: 'start',
  error: null,
  course: null,
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    paymentOpenCourse: (state, action: PayloadAction<EventDto>) => {
      state.step = 'start';
      state.error = null;
      state.course = action.payload;
    },
    paymentSuccess: state => {
      state.step = 'success';
    },
    paymentFailure: (state, action: PayloadAction<string>) => {
      return { ...initialState, error: action.payload };
    },
  },
});

export const pay = (data: EventDto): AppThunk => async dispatch => {};
