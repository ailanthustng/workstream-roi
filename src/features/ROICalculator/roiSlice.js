import { createSlice } from '@reduxjs/toolkit';

export const roiSlice = createSlice({
  name: 'roi',
  initialState: {
    hires: 300,
    candidates: 8,
    interviews: 15,
    noShows: 30,
    onboarding: 17,
    days: 30,
    costs: 20,
  },
  /*
   * Reducers take in the new values from the action.payload and mutates the state values to the new values.
   */
  reducers: {
    setHires: (state, action) => {
      state.hires = action.payload;
    },
    setCandidates: (state, action) => {
      state.candidates = action.payload;
    },
    setInterviews: (state, action) => {
      state.interviews = action.payload;
    },
    setNoShows: (state, action) => {
      state.noShows = action.payload;
    },
    setOnboarding: (state, action) => {
      state.onboarding = action.payload;
    },
    setDays: (state, action) => {
      state.days = action.payload;
    },
    setCosts: (state, action) => {
      state.costs = action.payload;
    },
  },
});

export const { setHires, setCandidates, setInterviews, setNoShows, setOnboarding, setDays, setCosts } = roiSlice.actions;

export const selectHires = state => state.roi.hires;
export const selectCandidates = state => state.roi.candidates;
export const selectInterviews = state => state.roi.interviews;
export const selectNoShows = state => state.roi.noShows;
export const selectOnboarding = state => state.roi.onboarding;
export const selectDays = state => state.roi.days;
export const selectCosts = state => state.roi.costs;

export default roiSlice.reducer;
