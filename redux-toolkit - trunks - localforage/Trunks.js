import { createAsyncThunk } from "@reduxjs/toolkit";
import localforage from "localforage";

export const setTheme = createAsyncThunk("store/setTheme", async (theme) => {
  await localforage.setItem("theme", theme);
  return theme;
});

export const initialCharge = createAsyncThunk(
  "store/initialCharge",
  async ({ drawer, theme }) => {
    const Drawer = await localforage.getItem("drawer");
    Drawer === null && (await localforage.setItem("drawer", drawer));
    const Theme = await localforage.getItem("theme");
    Theme === null && (await localforage.setItem("theme", theme));
    return { Drawer, Theme };
  }
);
