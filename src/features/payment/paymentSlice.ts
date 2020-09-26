import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'app/store';
import { EventDto } from './../../dtos/EventDto';

interface PaymentState {
  step: 'start' | 'qr' | 'success';
  error: string | null;
  course: EventDto | null;
  isLoading: boolean;
  isOpened: boolean;
}

const initialState: PaymentState = {
  step: 'start',
  error: null,
  course: null,
  isLoading: false,
  isOpened: false,
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    paymentToggle: state => {
      state.isOpened = !state.isOpened;
    },
    paymentOpenCourse: (state, action: PayloadAction<EventDto>) => {
      state.step = 'start';
      state.error = null;
      state.course = action.payload;
      state.isOpened = true;
    },
    paymentStart: state => {
      state.isLoading = true;
    },
    paymentStartQr: state => {
      state.step = 'qr';
    },
    paymentSuccess: state => {
      state.step = 'success';
    },
    paymentFailure: (state, action: PayloadAction<string>) => {
      return { ...initialState, error: action.payload };
    },
  },
});

export const {
  paymentToggle,
  paymentOpenCourse,
  paymentStart,
  paymentStartQr,
  paymentSuccess,
  paymentFailure,
} = paymentSlice.actions;

export const payment = (data: EventDto): AppThunk => async dispatch => {
  try {
    dispatch(paymentStart());

    // todo
  } catch (error) {
    dispatch(paymentFailure(error.message));
  }
};

export const paymentQr = (data: any): AppThunk => async dispatch => {
  try {
    dispatch(paymentStartQr());

    // todo const response = await ...
  } catch (error) {
    dispatch(paymentFailure(error.message));
  }
};

export default paymentSlice.reducer;
