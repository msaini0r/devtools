import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { api } from "./api";
import sourcesReducer from "../features/sources/sourcesSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      sources: sourcesReducer,
    },
    middleware: gDM => gDM().concat(api.middleware),
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;