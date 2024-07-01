// src/pages/LikedPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LikedPage.css";

const LikedPage = () => {
  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    const fetchLikedMovies = () => {
      const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
      setLikedMovies(likedMovies);
    };
    fetchLikedMovies();
  }, []);

  const handleRemoveMovie = (movieTitle) => {
    const updatedLikedMovies = likedMovies.filter(
      (movie) => movie.title !== movieTitle
    );
    setLikedMovies(updatedLikedMovies);
    localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));
  };

  return (
    <div className="liked-page">
      <h1>Liked Movies</h1>
      <div className="liked-movies-container">
        {likedMovies.length === 0 ? (
          <p>No liked movies yet</p>
        ) : (
          likedMovies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <Link to={`/cartoons/${movie.title}`}>
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

export default LikedPage;
