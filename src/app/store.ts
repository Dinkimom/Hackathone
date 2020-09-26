import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';
import courseReducer from '../features/course/courseSlice';
import profileReducer from '../features/profile/profileSlice';
import coursesReducer from './../features/courses/coursesSlice';
import createCourseReducer from './../features/createCourse/createCourseSlice';
import paymentReducer from './../features/payment/paymentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    courses: coursesReducer,
    profile: profileReducer,
    payment: paymentReducer,
    createCourse: createCourseReducer,
    // todo delete below
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
