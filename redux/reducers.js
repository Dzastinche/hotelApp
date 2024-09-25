import { createSlice } from "@reduxjs/toolkit";

export let allOFters = createSlice({
  name: "allOfters",
  initialState: [],
  reducers: {
    getAllOfters: (state, action) => {
      return action.payload;
    },
  },
});
export const { getAllOfters } = allOFters.actions;
export default allOFters.reducer;
