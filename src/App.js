import React from "react";

import NewMovie from "./components/homePage/NewMovie";
import Auth from "./auth/Auth";
import AuthPage from "./pages/AuthPage";
import { Link } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";

import Navbar from "./components/homePage/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Navbar />

      <MainRoutes />
    </div>
  );
};

export default App;
