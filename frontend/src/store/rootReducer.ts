import { combineReducers } from "@reduxjs/toolkit";
import { nasaApi } from "./api/nasaApi";

const rootReducer = combineReducers({
    [nasaApi.reducerPath]: nasaApi.reducer,
});
type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
export type { RootState };