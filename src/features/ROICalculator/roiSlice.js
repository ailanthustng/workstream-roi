import { createSlice } from '@reduxjs/toolkit';

export const roiSlice = createSlice({
  name: 'roi',
  initialState: {
    hires: 300,
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setHires: (state, action) => {
      state.hires = action.payload;
    }
  },
});

export const { increment, decrement, incrementByAmount, setHires } = roiSlice.actions;

export const selectHires = state => state.roi.hires;

export default roiSlice.reducer;
