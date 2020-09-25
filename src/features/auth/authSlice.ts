import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteAuthToken } from 'services/token';
import { AppThunk } from '../../app/store';
import { UserDto } from './../../dtos/UserDto';
import { UserLoginDto } from './../../dtos/UserLoginDto';
import { authLogin, authLoginByToken } from './../../services/api';

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
  isAuthorized: true,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginToggle: state => {
      state.isOpened = !state.isOpened;
    },
    loginOtpStart: state => {
      state.isOpened = true;
      state.step = 'otp';
      state.isLoading = true;
    },
    loginOtpSuccess: (state, action: PayloadAction<UserDto>) => {
      state.isLoading = false;
      state.error = null;
      state.isChecked = true;
      state.isAuthorized = true;
      state.user = action.payload;
    },
    loginOtpFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isChecked = true;
      state.user = null;
    },
    loginConfirmStart: () => {},
    loginConfirmSuccess: () => {},
    loginConfirmFailure: () => {},
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
  logout,
} = authSlice.actions;

export const loginOtp = (data: UserLoginDto): AppThunk => async dispatch => {
  try {
    dispatch(loginOtpStart());

    const response = await authLogin(data);

    dispatch(loginOtpSuccess(response.data));
  } catch (error) {
    dispatch(loginOtpFailure(error));
  }
};

export const loginConfirm = (): AppThunk => async dispatch => {
  try {
  } catch {}
};

// export const loginByToken = (): AppThunk => async dispatch => {
//   try {
//     dispatch(loginStart());

//     const response = await authLoginByToken();

//     dispatch(loginSuccess(response.data));
//   } catch (error) {
//     dispatch(loginFailure(error));
//   }
// };

export default authSlice.reducer;
