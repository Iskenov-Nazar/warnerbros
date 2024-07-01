// import React from "react";

// import { Route, Routes } from "react-router-dom";
// import NewMovie from "../components/homePage/NewMovie";
// import MovieDetailPage from "../pages/MovieDetailPage";
// import AuthPage from "../pages/AuthPage";

// import HomePage from "../pages/HomePage";

// const MainRoutes = () => {
//   const PUBLIC_ROUTES = [
//     // { id: 1, link: "/", element: <HomePage /> },
//     // { id: 2, link: "/products", element: <ProductPage /> },
//     // { id: 3, link: "/edit/:id", element: <EditProduct /> },
//     // { id: 4, link: "/about", element: <AboutPage /> },

//     { id: 1, link: "/", element: <HeaderHomePage /> },
//     { id: 4, link: "/movie", element: <NewMovie /> },
//     { id: 2, link: "/movie/:title", element: <MovieDetailPage /> },
//     { id: 6, link: "/admin", element: <AdminPage /> },
//     { id: 3, link: "/auth", element: <AuthPage /> },
//   ];
//   return (
//     <div>
//       <Routes>
//         {PUBLIC_ROUTES.map((elem) => (
//           <Route path={elem.link} element={elem.element} key={elem.id} />
//         ))}
//       </Routes>
//     </div>
//   );
// };

// export default MainRoutes;
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieDetailPage from "../pages/MovieDetailPage";
import CartoonDetailPage from "../pages/CartoonDetailPage";
import LikedPage from "../pages/LikedPage";
import FavoritePage from "../pages/FavoritePage";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import NewMovie from "../components/homePage/NewMovie";
import NewCartoon from "../components/homePage/NewCartoon";
import CartPage from "../pages/CartPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },

    { id: 2, link: "/movies", element: <NewMovie /> },
    { id: 3, link: "/cartoons", element: <NewCartoon /> },
    { id: 4, link: "/liked", element: <LikedPage /> },
    { id: 5, link: "/favorites", element: <FavoritePage /> },
    { id: 6, link: "/admin", element: <AdminPage /> },
    { id: 7, link: "/shop", element: <CartPage /> },
    { id: 8, link: "/auth", element: <AuthPage /> },
    {
      id: 9,
      link: "/cartoons/:title",
      element: <CartoonDetailPage />,
    },
    { id: 10, link: "/movies/:title", element: <MovieDetailPage /> },
  ];

  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((route) => (
          <Route path={route.link} element={route.element} key={route.id} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
