import React from "react";
import NewMovie from "../components/homePage/NewMovie";
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
