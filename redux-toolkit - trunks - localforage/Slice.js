import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./State";
import { setTheme } from "./Trunks";

const slice = createSlice({
  name: "store",
  initialState: {
    ...initialState,
  },
  extraReducers: {
    [setTheme.fulfilled](state, { payload }) {
      state.theme = payload;
    },
    [initialCharge.fulfilled](state, { payload: { Drawer, Theme } }) {
      if (Drawer !== null) state.drawer = Drawer;
      if (Theme !== null) state.theme = Theme;
      state.isDBLoaded = true;
    },
  },
  reducers: {
    setDrawer(state, { payload }) {
      state.Drawer = payload;
    },
  },
});

export const { setDrawer } = slice.actions;

export default slice;
