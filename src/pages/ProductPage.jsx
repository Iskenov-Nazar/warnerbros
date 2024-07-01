import React from "react";
import SideBar from "../components/products/SideBar";
import MovieList from "../components/products/MovieList";

const ProductPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "300px", flex: "none" }}>
        <SideBar />
      </div>
      <MovieList />
    </div>
  );
};

export default ProductPage;
