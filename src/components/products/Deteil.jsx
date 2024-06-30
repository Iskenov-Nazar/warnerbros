import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Deteil.css";

const Deteil = ({ movie, handleCloseModal }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFavoriteMark, setIsFavoriteMark] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const favoriteMark = () => {
    setIsFavoriteMark(!isFavoriteMark);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={handleCloseModal}>
          ×
        </span>
        <div className="modal-body">
          <img src={movie.image} alt={movie.title} className="modal-image" />
          <div className="movie-details">
            <h2>{movie.title}</h2>
            {isFavoriteMark ? (
              <FavoriteIcon onClick={favoriteMark} />
            ) : (
              <FavoriteBorderIcon onClick={favoriteMark} />
            )}
            {isBookmarked ? (
              <BookmarkIcon onClick={toggleBookmark} />
            ) : (
              <BookmarkBorderIcon onClick={toggleBookmark} />
            )}
            <p>
              <strong>Year:</strong> {movie.year}
            </p>
            <p>
              <strong>Genre:</strong> {movie.genre}
            </p>
            <p>
              <strong>Rating:</strong> {movie.rating}
            </p>
            <p>{movie.description}</p>

            <button className="buy-button">
              {/* <SellIcon /> <br /> */}
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deteil;
