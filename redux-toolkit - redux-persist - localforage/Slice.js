import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./State";
import { persistReducer } from "redux-persist";
import * as localforage from "localforage";

const persistConfig = {
  key: "root",
  version: 1,
  storage: localforage,
};

const slice = createSlice({
  name: "store",
  initialState: {
    ...initialState,
  },
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload;
      if (state.isSetTheme !== true) state.isSetTheme = true;
    },
  },
});

export const { setTheme } = slice.actions;

export default persistReducer(persistConfig, slice.reducer);
