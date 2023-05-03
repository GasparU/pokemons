import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName.slice";
import styleState2 from "./slices/idPoke.slice";
export default configureStore({
  reducer: {
    trainerName,
    styleState2,
  },
});
