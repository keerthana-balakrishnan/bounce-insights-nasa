import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { useDispatch } from "react-redux";
import { nasaApi } from "./api/nasaApi";

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(nasaApi.middleware),
  });

  return store;
};

type StoreType = ReturnType<typeof createStore>;
type StoreDispatch = StoreType["dispatch"];

const useAppDispatch = () => useDispatch<StoreDispatch>();

export { createStore, useAppDispatch as useDispatch };
export type { StoreDispatch };
