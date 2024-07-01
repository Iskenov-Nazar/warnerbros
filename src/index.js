import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import MovieContextProvider from "./context/MovieContextProvider";
import CartContextProvider from "./context/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <MovieContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
