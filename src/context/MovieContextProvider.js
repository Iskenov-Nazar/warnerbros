import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API, API_CATEGORY } from "../helpers/const";
import { useNavigate } from "react-router-dom";
export const movieContext = createContext();
export const useMovie = () => useContext(movieContext);

const INIT_STATE = {
  movies: [],
  oneMovie: {},
  categories: [],
};

const MovieContextProvider = ({ children }) => {
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_MOVIES":
        return { ...state, movies: action.payload };
      case "GET_ONE_MOVIE":
        return { ...state, oneMovie: action.payload };
      case "GET_CATEGORIS":
        return { ...state, categories: action.payload };
    }
  };
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! CREATE
  const createMovie = async (newMovie) => {
    await axios.post(API, newMovie);
    navigate("/movie");
  };

  //   !GET
  const getMovies = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    dispatch({
      type: "GET_MOVIES",
      payload: data,
    });
  };

  //   !DELETE
  const deleteMovie = async (id) => {
    await axios.delete(`${API}/${id}`);
    getMovies();
  };

  //   !GetOneMovie
  const getOneMovie = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_MOVIE",
      payload: data,
    });
  };
  //   !EDIT
  const editMovie = async (id, editedMovie) => {
    await axios.patch(`${API}/${id}`, editedMovie);
    navigate("/movies");
  };
  //   !createCategory
  const createCategory = async (newCategory) => {
    await axios.post(API_CATEGORY, newCategory);
    navigate("/movies");
  };
  // ! GetCategories
  const GetCategories = async () => {
    const { data } = await axios(API_CATEGORY);
    dispatch({
      type: "GET_CATEGORIS",
      payload: data,
    });
  };
  //   !FILTER
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}?${search}`;
    navigate(url);
  };
  const values = {
    createMovie,
    getMovies,
    movies: state.movies,
    deleteMovie,
    getOneMovie,
    editMovie,
    oneMovie: state.oneMovie,
    createCategory,
    GetCategories,
    categories: state.categories,
    fetchByParams,
  };
  return (
    <movieContext.Provider value={values}>{children}</movieContext.Provider>
  );
};

export default MovieContextProvider;
