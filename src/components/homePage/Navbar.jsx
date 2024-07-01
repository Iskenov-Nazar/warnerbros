import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/logo.jpg";
import avatar from "./assets/avatar.png";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TvIcon from "@mui/icons-material/Tv";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";
import { Badge, Box, MenuItem, Typography } from "@mui/material";
import { useCart } from "../../context/CartContextProvider";
import { getMoviesCountInCart } from "../../helpers/function";
import { useAuth } from "../../context/AuthContextProvider";
import { ADMIN } from "../../helpers/const";
import { ShoppingCart } from "@mui/icons-material";

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [badgeCount, setBadgeCount] = React.useState(0);
  const { user, handleLogOut } = useAuth();
  const { addMovieToCart } = useCart();

  React.useEffect(() => {
    setBadgeCount(getMoviesCountInCart());
  }, [addMovieToCart]);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <img src={logo} alt="WB" />
        </a>
        <ul className="navbar-menu">
          <li>
            <LocalMoviesIcon />
            <a href="#">Movies</a>
          </li>
          <li>
            <TvIcon />
            <a href="#">TV Shows</a>
          </li>
          <li>
            <StarBorderIcon />
            <a href="#">Brands</a>
          </li>
          <li>
            <BookmarksIcon />
            <a href="#">Collections</a>
          </li>
          <li>
            <ShoppingBasketIcon />
            <a href="#">Shop</a>
          </li>
        </ul>
        {user?.email === ADMIN ? (
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <MenuItem sx={{ color: "white", display: "block" }}>
              <Typography textAlign="center">ADMIN</Typography>
            </MenuItem>
          </Link>
        ) : null}

        <Link to="/cart">
          <Badge badgeContent={badgeCount} color="success">
            <ShoppingCart sx={{ color: "white" }} />
          </Badge>
        </Link>
        {user ? (
          <MenuItem onClick={handleLogOut}>
            <Typography sx={{ color: "white" }}>LogOut</Typography>
          </MenuItem>
        ) : (
          <Link to="/auth">
            <MenuItem>
              <Typography sx={{ color: "white" }}>Register</Typography>
            </MenuItem>
          </Link>
        )}
        <div className="search-box">
          {searchVisible && (
            <input
              type="text"
              className="search-input"
              placeholder="Фильмы, сериалы, мультфильмы..."
            />
          )}
          <button onClick={toggleSearch} className="search-icon">
            {searchVisible ? (
              <CloseIcon
                sx={{
                  fontSize: 35,
                  backgroundColor: "black",
                  color: "white",
                }}
              />
            ) : (
              <SearchIcon
                sx={{
                  fontSize: 35,
                  backgroundColor: "black",
                  color: "white",
                }}
              />
            )}
          </button>
        </div>
        <div className="avatar-box">
          <button className="avatar_icon">
            <img src={avatar} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
