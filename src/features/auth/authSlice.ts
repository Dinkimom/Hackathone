import { Step } from '@material-ui/core';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteAuthToken } from 'services/token';
import { AppThunk } from '../../app/store';
import { UserDto } from './../../dtos/UserDto';
import { UserLoginDto } from './../../dtos/UserLoginDto';
import { authLogin, authLoginConfirm } from './../../services/api';

interface AuthState {
  isOpened: boolean;
  step: 'number' | 'otp';
  isLoading: boolean;
  // means auth token check
  isChecked: boolean;
  error: string | null;
  isAuthorized: boolean;
  user: UserDto | null;
}

const initialState: AuthState = {
  isOpened: false,
  step: 'number',
  isLoading: false,
  error: null,
  isChecked: false,
  isAuthorized: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginToggle: state => {
      return { ...initialState, isOpened: !state.isOpened };
    },
    loginOtpStart: state => {
      state.isOpened = true;
      state.step = 'otp';
      state.isLoading = true;
    },
    loginOtpSuccess: state => {
      state.isLoading = false;
      state.error = null;
    },
    loginOtpFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isChecked = true;
      state.user = null;
    },
    loginConfirmStart: state => {
      state.isLoading = false;
      state.error = null;
    },
    loginConfirmSuccess: (state, action: PayloadAction<UserDto>) => {
      state.isLoading = false;
      state.error = null;
      state.isChecked = true;
      state.isAuthorized = true;
      state.user = action.payload;
      state.isOpened = false;
      state.step = 'number';
    },
    loginConfirmFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isChecked = true;
      state.user = null;
      state.step = 'number';
    },
    logout: () => {
      deleteAuthToken();

      return { ...initialState };
    },
  },
});

export const {
  loginToggle,
  loginOtpStart,
  loginOtpSuccess,
  loginOtpFailure,
  loginConfirmStart,
  loginConfirmSuccess,
  loginConfirmFailure,
  logout,
} = authSlice.actions;

export const loginOtp = (data: UserLoginDto): AppThunk => async dispatch => {
  try {
    dispatch(loginOtpStart());

    const response = await authLogin(data);

    dispatch(loginOtpSuccess());
  } catch (error) {
    dispatch(loginOtpFailure(error.message));
  }
};

export const loginConfirm = (data: UserLoginDto): AppThunk => async dispatch => {
  try {
    dispatch(loginConfirmStart());

    const response = await authLoginConfirm(data);

    dispatch(loginConfirmSuccess(response.data));
  } catch (error) {
    dispatch(loginConfirmFailure(error.message));
  }
};

export default authSlice.reducer;
