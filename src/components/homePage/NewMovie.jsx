import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NewMovie.css";
import Deteil from "../products/Deteil";
import PaginationControlled from "../products/Pagination";
import { API_MOVIES } from "../../helpers/const";

const NewMovie = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 1;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_MOVIES);
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const totalPages = Math.ceil(movies.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const currentMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="movie-page-container">
      {currentMovies.map((movie, index) => (
        <div className="movie-card" key={index}>
          <Link to={`/movies/${movie.id}`}>
            <img
              src={movie.image}
              alt={movie.title}
              className="movie-image"
              onClick={() => handleOpenModal(movie)} // Открытие модального окна по клику на изображение
            />
          </Link>
          <h2 className="movie-title">{movie.title}</h2>
          <button
            style={{
              width: "70%",
              height: "10%",
              background: "linear-gradient(45deg, #ff357a, #fff172)",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              marginLeft: "35px",
              marginBottom: "30px",
            }}
            className="details-button"
            onClick={() => handleOpenModal(movie)}
          >
            MORE
          </button>
        </div>
      ))}

      {selectedMovie && (
        <Deteil movie={selectedMovie} handleCloseModal={handleCloseModal} />
      )}

      <div className="pagination-position">
        <PaginationControlled
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default NewMovie;
