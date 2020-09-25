import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    loginStart: () => {},
    loginSuccess: (state, action: PayloadAction<UserDto>) => {},
    loginFailure: (state, action: PayloadAction<string>) => {},
    logout: () => {},
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} = authSlice.actions;

export const login = (data: UserLoginDto): AppThunk => (dispatch) => {};

export default authSlice.reducer;
