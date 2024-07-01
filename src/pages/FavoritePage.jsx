// src/pages/FavoritePage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FavoritePage.css";

const FavoritePage = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const fetchFavoriteMovies = () => {
      const favoriteMovies =
        JSON.parse(localStorage.getItem("favoriteMovies")) || [];
      setFavoriteMovies(favoriteMovies);
    };
    fetchFavoriteMovies();
  }, []);

  const handleRemoveMovie = (movieTitle) => {
    const updatedFavoriteMovies = favoriteMovies.filter(
      (movie) => movie.title !== movieTitle
    );
    setFavoriteMovies(updatedFavoriteMovies);
    localStorage.setItem(
      "favoriteMovies",
      JSON.stringify(updatedFavoriteMovies)
    );
  };

  return (
    <div className="favorite-page">
      <h1>Favorite Movies</h1>
      <div className="favorite-movies-container">
        {favoriteMovies.length === 0 ? (
          <p>No favorite movies yet</p>
        ) : (
          favoriteMovies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <Link to={`/movies/${movie.title}`}>
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="movie-image"
                />
              </Link>
              <h2 className="movie-title">{movie.title}</h2>

              <button
                className="remove-button"
                onClick={() => handleRemoveMovie(movie.title)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
