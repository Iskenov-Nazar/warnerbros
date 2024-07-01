import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetailPage.css";

const CartoonDetailPage = () => {
  const { title } = useParams();
  const [cartoon, setCartoon] = useState(null);

  useEffect(() => {
    const fetchCartoon = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/cartoons?title=${title}`
        );
        const data = await response.json();
        if (data.length > 0) {
          setCartoon(data[0]);
        } else {
          setCartoon(null);
        }
      } catch (error) {
        console.error("Error fetching the cartoon:", error);
      }
    };

    fetchCartoon();
  }, [title]);

  if (!cartoon) {
    return <div>Cartoon not found</div>;
  }

  return (
    <div className="movie-detail-page">
      <div className="banner">
        <img
          src={cartoon.bannerImg}
          alt={cartoon.title}
          className="banner-image"
        />
        <div className="banner-overlay">
          <h1 className="movie-title"> {cartoon.title}</h1>
        </div>
      </div>
      <div className="movie-additional-info">
        <h2>ABOUT</h2>
        <p>{cartoon.description}</p>
      </div>
      <div className="movie-watch">
        <h2> | WATCH IT </h2>
        <h2>TRAILER</h2>

        <a href={cartoon.trailer}>
          <img src={cartoon.trailer1Img} alt="Trailer 1" />
        </a>
        <a href={cartoon.trailer2}>
          <img src={cartoon.trailer2Img} alt="Trailer 2" />
        </a>
      </div>
      <div className="movie-detail-content">
        <img src={cartoon.image} alt={cartoon.title} className="banner-image" />

        <div className="movie-detail-info">
          <h2>Overview</h2>
          <p>{cartoon.description}</p>
          <p>
            <strong>Year:</strong> {cartoon.year}
          </p>
          <p>
            <strong>Genre:</strong> {cartoon.genre}
          </p>
          <p>
            <strong>Rating:</strong> {cartoon.rating}
          </p>
          <p>
            <strong>Price:</strong> {cartoon.price}
          </p>
        </div>
      </div>
      <hr />
      {cartoon.pic1 && (
        <div className="more-pictures">
          <h2>| GALLERY</h2>
          <div className="more-pictures-grid">
            <img src={cartoon.pic1} alt="pic1" />
            <img src={cartoon.pic2} alt="pic2" />
            <img src={cartoon.pic3} alt="pic3" />
            <img src={cartoon.pic4} alt="pic4" />
            <img src={cartoon.pic5} alt="pic5" />
            <img src={cartoon.pic6} alt="pic6" />
            <img src={cartoon.pic7} alt="pic7" />
            <img src={cartoon.pic8} alt="pic8" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartoonDetailPage;
