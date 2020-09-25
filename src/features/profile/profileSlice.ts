import { UserProfileDto } from './../../dtos/UserProfileDto';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';

interface ProfileState {
  isLoading: boolean;
  error: string | null;
  info: UserProfileDto | null;
}

const initialState: ProfileState = {
  isLoading: false,
  error: null,
  info: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profileFetchStart: () => {},
    profileFetchSuccess: (state, action: PayloadAction<UserProfileDto>) => {},
    profileFetchFailure: (state, action: PayloadAction<string>) => {},
  },
});

export const {
  profileFetchStart,
  profileFetchSuccess,
  profileFetchFailure,
} = profileSlice.actions;

export const profileFetch = (data: string): AppThunk => (dispatch) => {};

export default profileSlice.reducer;
