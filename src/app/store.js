import { configureStore } from '@reduxjs/toolkit';
import roiReducer from '../features/ROICalculator/roiSlice'

export default configureStore({
  reducer: {
    roi: roiReducer
  },
});
