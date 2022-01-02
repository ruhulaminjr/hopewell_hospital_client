import { configureStore } from "@reduxjs/toolkit";
import { HopeWellSlice } from "./HopeWellSlice/HopwWellSlice";

export const store = configureStore({
  reducer: {
    HopeWellData: HopeWellSlice,
  },
});
