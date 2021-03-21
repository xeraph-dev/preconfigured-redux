import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "./Slice";

import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export default function StoreProvider({ children }) {
  const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  });
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
