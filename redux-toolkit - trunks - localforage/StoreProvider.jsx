import { configureStore } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { getInitialStore } from "./Getters";
import slice from "./Slice";
import { initialCharge } from "./Trunks";

const InitialCharge = ({ children }) => {
  const dispatch = useDispatch(),
    initialStore = useSelector(getInitialStore);

  useEffect(() => {
    dispatch(initialCharge(initialStore));
  }, []);

  return <>{children}</>;
};

export default function StoreProvider({ children }) {
  return (
    <Provider
      store={configureStore({
        reducer: slice.reducer
      })}>
      <InitialCharge>{children}</InitialCharge>
    </Provider>
  );
}
