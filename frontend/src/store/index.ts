import { configureStore } from "@reduxjs/toolkit";
import superheroReducer from "./slices/superheroes.slice"; //barrel file needed
import logger from "redux-logger";
import { fetchTotalCount } from "./services/superhero.services";

export const store = configureStore({
  reducer: {
    superheroes: superheroReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

store.dispatch(fetchTotalCount());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
