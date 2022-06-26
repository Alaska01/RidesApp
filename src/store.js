import { configureStore } from '@reduxjs/toolkit';
import ridesReducer from './slice/ridesSlice';
import userReducer from './slice/userSlice';
import generalDataReducer from './slice/generalDataSlice';

export const store = configureStore({
  reducer: {
    ridesData: ridesReducer,
    user: userReducer,
    generalData: generalDataReducer,
  },
});
