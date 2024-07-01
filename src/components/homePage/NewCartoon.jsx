import React, { useState, useEffect } from "react";
import "./NewMovie.css";
import Deteil from "../products/Deteil";
import PaginationControlled from "../products/Pagination";
import { Link } from "react-router-dom";
import { API_CARTOONS } from "../../helpers/const";

const NewCartoon = () => {
  const [cartoons, setCartoons] = useState([]);
  const [selectedCartoon, setSelectedCartoon] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cartoonsPerPage = 18;

  useEffect(() => {
    const fetchCartoons = async () => {
      try {
        const response = await fetch(API_CARTOONS);
        const data = await response.json();
        setCartoons(data);
      } catch (error) {
        console.error("Error fetching cartoons:", error);
      }
    };

    fetchCartoons();
  }, []);

  const totalPages = Math.ceil(cartoons.length / cartoonsPerPage);
  const startIndex = (currentPage - 1) * cartoonsPerPage;
  const currentCartoons = cartoons.slice(
    startIndex,
    startIndex + cartoonsPerPage
  );

  const handleOpenModal = (cartoon) => {
    setSelectedCartoon(cartoon);
  };

  const handleCloseModal = () => {
    setSelectedCartoon(null);
  };

  return (
    <div className="movie-page-container">
      {currentCartoons.map((cartoon, index) => (
        <div className="movie-card" key={index}>
          <Link to={`/cartoons/${cartoon.title}`}>
            <img
              src={cartoon.image}
              alt={cartoon.title}
              className="movie-image"
            />
          </Link>
          <h2 className="movie-title">{cartoon.title}</h2>
          <button
            style={{
              width: "70%",
              height: "10%",
              background: "#0078ff",
              background: "linear-gradient(45deg, #ff357a, #fff172)",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              marginLeft: "35px",
              marginBottom: "30px",
            }}
            className="details-button"
            onClick={() => handleOpenModal(cartoon)}
          >
            More
          </button>
        </div>
      ))}

      {selectedCartoon && (
        <Deteil movie={selectedCartoon} handleCloseModal={handleCloseModal} />
      )}

      <div className="pagination-position">
        <PaginationControlled
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default NewCartoon;
