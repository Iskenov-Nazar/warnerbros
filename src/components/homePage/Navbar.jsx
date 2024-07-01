// import React, { useState } from "react";
// import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import SearchIcon from "@mui/icons-material/Search";
// import "./Navbar.css";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import PersonIcon from "@mui/icons-material/Person";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import TurnedInIcon from "@mui/icons-material/TurnedIn";
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

// const Navbar = () => {
//   const [searchVisible, setSearchVisible] = useState(false);

//   const toggleSearch = () => {
//     setSearchVisible(!searchVisible);
//   };
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <a href="#" className="navbar-logo">
//           <img
//             src="https://static-prod.adweek.com/wp-content/uploads/2019/11/new-warner-bros-logo-transformation-content-2019.gif"
//             alt=""
//           />
//         </a>

//         <ul className="navbar-menu">
//           <li>
//             <LocalMoviesIcon />
//             <a href="#">FEATURE FILMS</a>
//           </li>
//           <li>
//             <LocalMoviesIcon />

//             <a href="#">SHORT FILMS</a>
//           </li>

//           <li>
//             <FavoriteIcon />
//             <a href="#">Liked</a>
//           </li>
//           <li>
//             <TurnedInIcon />
//             <a href="#">Favorites</a>
//           </li>
//           <li>
//             <ShoppingBasketIcon />
//             <a href="#">Shop</a>
//           </li>
//           <li>
//             <PersonIcon />
//             <a href="#">ADMIN</a>
//           </li>
//         </ul>
//         <div className="search-box">
//           {searchVisible && (
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Фильмы, сериалы, мультфильмы..."
//             />
//           )}
//           <button onClick={toggleSearch} className="search-icon">
//             {searchVisible ? (
//               <CloseOutlinedIcon
//                 sx={{
//                   fontSize: 35,
//                   backgroundColor: "white",
//                   color: "black",
//                 }}
//               />
//             ) : (
//               <SearchIcon
//                 sx={{
//                   fontSize: 35,
//                   backgroundColor: "white",
//                   color: "balck",
//                 }}
//               />
//             )}
//           </button>
//         </div>
//         <div className="avatar-box">
//           <button className="avatar_icon">
//             <AccountCircleIcon />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../../context/CartContextProvider";
import { Badge } from "antd";
import { getProductsCountInCart } from "../../helpers/function";

const Navbar = () => {
  // const { cart, getCart } = useCart();
  // useEffect(() => {
  //   getCart();
  // }, []);

  const [searchVisible, setSearchVisible] = useState(false);
  const [badgeCount, setBadgeCount] = React.useState(0);
  const { addProductToCart } = useCart();
  React.useEffect(() => {
    setBadgeCount(getProductsCountInCart());
  }, [addProductToCart]);
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src="https://static-prod.adweek.com/wp-content/uploads/2019/11/new-warner-bros-logo-transformation-content-2019.gif"
            alt="Warner Bros Logo"
          />
        </Link>

        <ul className="navbar-menu">
          <li>
            <LocalMoviesIcon />
            <Link to="/movies">Movie's</Link>
          </li>
          <li>
            <LocalMoviesIcon />
            <Link to="/cartoons">Cartoon's</Link>
          </li>

          <li>
            <FavoriteIcon />
            <Link to="/liked">Liked</Link>
          </li>
          <li>
            <TurnedInIcon />
            <Link to="/favorites">Favorites</Link>
          </li>
          {/* <Link to={"/shop"}>
            <Badge badgeContent={badgeCount} color="success">
              <ShoppingBasketIcon sx={{ color: "white" }} />
            </Badge>
          </Link> */}
          <li>
            <ShoppingBasketIcon />
            <Link to="/shop">Shop</Link>
          </li>

          <li>
            <PersonIcon />
            <Link to="/admin">ADMIN</Link>
          </li>
        </ul>

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
              <CloseOutlinedIcon
                sx={{
                  fontSize: 35,
                  backgroundColor: "white",
                  color: "black",
                }}
              />
            ) : (
              <SearchIcon
                sx={{
                  fontSize: 35,
                  backgroundColor: "white",
                  color: "black",
                }}
              />
            )}
          </button>
        </div>
        <div className="avatar-box">
          <Link to="/auth" className="avatar_icon">
            <AccountCircleIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
