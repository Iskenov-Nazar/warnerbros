import React from "react";

import NewMovie from "../components/homePage/NewMovie";

import Footer from "../components/homePage/Footer";

import HeaderHomePage from "../components/homePage/HeaderHomePage";
const HomePage = () => {
  return (
    <div>
      <HeaderHomePage />
      <NewMovie />
    </div>
  );
};

export default HomePage;
