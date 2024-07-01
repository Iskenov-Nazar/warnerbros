import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetailPage.css";

const MovieDetailPage = () => {
  const { title } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/movies?title=${title}`
        );
        const data = await response.json();
        if (data.length > 0) {
          setMovie(data[0]);
        } else {
          setMovie(null);
        }
      } catch (error) {
        console.error("Error fetching the movie:", error);
      }
    };

    fetchMovie();
  }, [title]);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail-page">
      <div className="banner">
        <img src={movie.bannerImg} alt={movie.title} className="banner-image" />
        <div className="banner-overlay">
          <h1 className="movie-title"> {movie.title}</h1>
        </div>
      </div>
      <div className="movie-additional-info">
        <h2>ABOUT</h2>
        <p>{movie.description}</p>
      </div>
      <div className="movie-watch">
        <h2> | WATCH IT </h2>
        <h2>TRAILER</h2>

        <a href={movie.trailer}>
          <img src={movie.trailer1Img} />
        </a>
        <a href={movie.trailer2}>
          <img src={movie.trailer2Img} />
        </a>
      </div>
      <div className="movie-detail-content">
        <img src={movie.image} alt={movie.title} className="banner-image" />

        <div className="movie-detail-info">
          <h2>Overview</h2>
          <p>{movie.description}</p>
          <p>
            <strong>Year:</strong> {movie.year}
          </p>
          <p>
            <strong>Genre:</strong> {movie.genre}
          </p>
          <p>
            <strong>Rating:</strong> {movie.rating}
          </p>
          <p>
            <strong>Price:</strong> {movie.price}
          </p>
        </div>
      </div>
      <hr />
      {movie.pic1 && (
        <div className="more-pictures">
          <h2>| GALLERY</h2>
          <div className="more-pictures-grid">
            <img src={movie.pic1} alt="pic1" />
            <img src={movie.pic2} alt="pic2" />
            <img src={movie.pic3} alt="pic3" />
            <img src={movie.pic4} alt="pic4" />
            <img src={movie.pic5} alt="pic5" />
            <img src={movie.pic6} alt="pic6" />
            <img src={movie.pic7} alt="pic7" />
            <img src={movie.pic8} alt="pic8" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;
