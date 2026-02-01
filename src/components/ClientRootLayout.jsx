"use client"
import React from "react";
import { Providers } from "./Providers";
import Header from "./Header";
import "../styles/main.scss";

const ClientRootLayout = ({ children }) => {
  return (
    <Providers>
      <Header />
      {children}
    </Providers>
  );
};

export default ClientRootLayout;