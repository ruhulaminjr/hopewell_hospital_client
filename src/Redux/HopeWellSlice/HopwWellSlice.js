import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const HopeWellSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = HopeWellSlice.actions;

export default HopeWellSlice.reducer;
