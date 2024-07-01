// import axios from "axios";
// import React, { createContext, useContext, useReducer } from "react";
// import { API, API_CATEGORY } from "../helpers/const";
// import { useNavigate } from "react-router-dom";
// export const movieContext = createContext();
// export const useMovie = () => useContext(movieContext);

// const INIT_STATE = {
//   movies: [],
//   oneMovie: {},
//   categories: [],
// };

// const MovieContextProvider = ({ children }) => {
//   const reducer = (state = INIT_STATE, action) => {
//     switch (action.type) {
//       case "GET_MOVIES":
//         return { ...state, movies: action.payload };
//       case "GET_ONE_MOVIE":
//         return { ...state, oneMovie: action.payload };
//     }
//   };
//   const navigate = useNavigate();
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);

//   // ! CREATE
//   const createMovie = async (newMovie) => {
//     await axios.post(API, newMovie);
//     navigate("/movie");
//   };

//   //   !GET
//   const getMovies = async () => {
//     const { data } = await axios(`${API}${window.location.search}`);
//     dispatch({
//       type: "GET_MOVIES",
//       payload: data,
//     });
//   };

//   //   !DELETE
//   const deleteMovie = async (id) => {
//     await axios.delete(`${API}/${id}`);
//     getMovies();
//   };

//   //   !GetOneMovie
//   const getOneMovie = async (id) => {
//     const { data } = await axios(`${API}/${id}`);
//     dispatch({
//       type: "GET_ONE_MOVIE",
//       payload: data,
//     });
//   };
//   //   !EDIT
//   const editMovie = async (id, editedMovie) => {
//     await axios.patch(`${API}/${id}`, editedMovie);
//     navigate("/movie");
//   };
//   //   !createCategory
//   const createCategory = async (newCategory) => {
//     await axios.post(API_CATEGORY, newCategory);
//     navigate("/movies");
//   };
//   // ! GetCategories
//   const GetCategories = async () => {
//     const { data } = await axios(API_CATEGORY);
//     dispatch({
//       type: "GET_CATEGORIS",
//       payload: data,
//     });
//   };
//   //   !FILTER
//   const fetchByParams = (query, value) => {
//     const search = new URLSearchParams(window.location.search);
//     if (value === "all") {
//       search.delete(query);
//     } else {
//       search.set(query, value);
//     }
//     const url = `${window.location.pathname}?${search}`;
//     navigate(url);
//   };
//   const values = {
//     createMovie,
//     getMovies,
//     movies: state.movies,
//     deleteMovie,
//     getOneMovie,
//     editMovie,
//     oneMovie: state.oneMovie,
//     createCategory,
//     GetCategories,
//     categories: state.categories,
//     fetchByParams,
//   };
//   return (
//     <movieContext.Provider value={values}>{children}</movieContext.Provider>
//   );
// };

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

  // Функция для переключения состояния избранного
  const handleFavorite = () => {
    setIsFavoriteMark(!isFavoriteMark);

    // Получаем список понравившихся фильмов из localStorage
    const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
    if (isFavoriteMark) {
      // Если фильм уже в избранном, удаляем его
      const updatedLikedMovies = likedMovies.filter(
        (m) => m.title !== movie.title
      );
      localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));
    } else {
      // Если фильм не в избранном, добавляем его
      localStorage.setItem(
        "likedMovies",
        JSON.stringify([...likedMovies, movie])
      );
    }
  };

  // Функция для открытия модального окна комментариев
  const openCommentModal = () => {
    setIsCommentModalOpen(true);
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
  // Функция для закрытия модального окна комментариев
  const closeCommentModal = () => {
    setIsCommentModalOpen(false);
  };

  // Функция для добавления нового комментария
  const addComment = () => {
    if (newComment.trim()) {
      const newComments = [...comments, { username, text: newComment }];
      setComments(newComments);
      setNewComment("");
      localStorage.setItem(
        `comments-${movie.title}`,
        JSON.stringify(newComments)
      );
    }
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
              <FavoriteIcon onClick={handleFavorite} />
            ) : (
              <FavoriteBorderIcon onClick={handleFavorite} />
            )}
            {isBookmarked ? (
              <BookmarkIcon onClick={toggleBookmark} />
            ) : (
              <BookmarkBorderIcon onClick={toggleBookmark} />
            )}
            <ModeCommentOutlinedIcon
              className="comment-icon"
              onClick={openCommentModal}
            />

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

            <button className="buy-button">
              <SellIcon /> <br />
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {isCommentModalOpen && (
        <div className="comment-modal">
          <div className="comment-modal-content">
            <span className="close-button" onClick={closeCommentModal}>
              ×
            </span>
            <h3>Comments</h3>
            <div className="comments-list">
              {comments.map((comment, index) => (
                <div key={index} className="comment-item">
                  <strong>{comment.username}:</strong> {comment.text}
                </div>
              ))}
            </div>
            <div className="comment-form">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
              />
              <button onClick={addComment}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deteil;
