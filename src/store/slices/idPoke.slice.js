import { createSlice } from "@reduxjs/toolkit";
import useFetch from "./../../hooks/useFetch";

const paginationPokex = createSlice({
  name: "pagination",
  initialState: "nombre2",
  reducers: {
    setPagination: (state, action) => state,
  },
});
export const { setPagination } = paginationPokex.actions;

export default paginationPokex.reducer;
