import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import profilesSlice from "./slices/profiles";

const store = configureStore({
  reducer: {
    profiles: profilesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
