import { configureStore } from "@reduxjs/toolkit";
import allofters from "./reducers";

export const store = configureStore({
  reducer: { allOFters: allofters },
});
