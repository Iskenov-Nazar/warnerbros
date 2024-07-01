import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieCard from "../components/products/MovieCard";
import EditMovie from "../components/products/EditMovie";
import AboutPage from "../pages/AboutPage";
import AdminPage from "../pages/AdminPage";
import CartPage from "../pages/CartPage";
import AuthPage from "../pages/AuthPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/movies", element: <MovieCard /> },
    { id: 3, link: "/edit/:id", element: <EditMovie /> },
    { id: 4, link: "/about", element: <AboutPage /> },
    { id: 5, link: "/admin", element: <AdminPage /> },
    { id: 6, link: "/cart", element: <CartPage /> },
    { id: 7, link: "/auth", element: <AuthPage /> },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
