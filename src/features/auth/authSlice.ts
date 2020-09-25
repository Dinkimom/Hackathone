import { authLogin, authLoginByToken } from './../../services/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteAuthToken } from 'services/token';
import { AppThunk } from '../../app/store';
import { UserDto } from './../../dtos/UserDto';
import { UserLoginDto } from './../../dtos/UserLoginDto';

interface AuthState {
  isLoading: boolean;
  // means auth token check
  isChecked: boolean;
  error: string | null;
  isAuthorized: boolean;
  user: UserDto | null;
}

const initialState: AuthState = {
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
    loginStart: () => {
      // reset all login errors, etc
      // it more convenient just to you initialState
      return { ...initialState, isLoading: true };
    },
    loginSuccess: (state, action: PayloadAction<UserDto>) => {
      state.isLoading = false;
      state.error = null;
      state.isChecked = true;
      state.isAuthorized = true;
      state.user = action.payload;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isChecked = true;
      state.user = null;
    },
    logout: () => {
      deleteAuthToken();

      return { ...initialState };
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export const login = (data: UserLoginDto): AppThunk => async dispatch => {
  try {
    dispatch(loginStart());

    const response = await authLogin(data);

    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export const loginByToken = (): AppThunk => async dispatch => {
  try {
    dispatch(loginStart());

    const response = await authLoginByToken();

    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export default authSlice.reducer;
