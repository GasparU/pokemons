import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName.slice";
import idPokemon from "./slices/idPoke.slice";
export default configureStore({
  reducer: {
    trainerName,
    idPokemon,
  },
});
