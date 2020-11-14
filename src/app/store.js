import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import roiReducer from '../features/ROICalculator/roiSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    roi: roiReducer
  },
});
