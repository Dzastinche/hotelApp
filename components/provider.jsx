"use client";
import React from "react";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
const ProviderPage = ({ children }) => {
  return (
    <Provider store={store}>
      <SessionProvider>{children}</SessionProvider>
    </Provider>
  );
};

export default ProviderPage;
