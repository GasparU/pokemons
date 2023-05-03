import { createSlice } from "@reduxjs/toolkit";

const paginationPokex = createSlice({
  name: "style",
  initialState: false,
  reducers: {
    setActive: (state, action) => state,
  },
});
export const { setActive } = paginationPokex.actions;

export default paginationPokex.reducer;
