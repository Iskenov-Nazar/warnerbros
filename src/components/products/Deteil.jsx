// import React, { useState, useEffect } from "react";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import SellIcon from "@mui/icons-material/Sell";
// import "./Deteil.css";

// const Deteil = ({ movie, handleCloseModal }) => {
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [isFavoriteMark, setIsFavoriteMark] = useState(false);

//   useEffect(() => {
//     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
//     const favoriteMovies =
//       JSON.parse(localStorage.getItem("favoriteMovies")) || [];

//     const isMovieLiked = likedMovies.some((m) => m.title === movie.title);
//     const isMovieFavorited = favoriteMovies.some(
//       (m) => m.title === movie.title
//     );

//     setIsFavoriteMark(isMovieLiked);
//     setIsBookmarked(isMovieFavorited);
//   }, [movie.title]);

//   const toggleBookmark = () => {
//     setIsBookmarked(!isBookmarked);

//     const favoriteMovies =
//       JSON.parse(localStorage.getItem("favoriteMovies")) || [];
//     if (isBookmarked) {
//       const updatedFavoriteMovies = favoriteMovies.filter(
//         (m) => m.title !== movie.title
//       );
//       localStorage.setItem(
//         "favoriteMovies",
//         JSON.stringify(updatedFavoriteMovies)
//       );
//     } else {
//       localStorage.setItem(
//         "favoriteMovies",
//         JSON.stringify([...favoriteMovies, movie])
//       );
//     }
//   };

//   const handleFavorite = () => {
//     setIsFavoriteMark(!isFavoriteMark);

//     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
//     if (isFavoriteMark) {
//       const updatedLikedMovies = likedMovies.filter(
//         (m) => m.title !== movie.title
//       );
//       localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));
//     } else {
//       localStorage.setItem(
//         "likedMovies",
//         JSON.stringify([...likedMovies, movie])
//       );
//     }
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close-button" onClick={handleCloseModal}>
//           ×
//         </span>
//         <div className="modal-body">
//           <img src={movie.image} alt={movie.title} className="modal-image" />
//           <div className="movie-details">
//             <h2>{movie.title}</h2>
//             {isFavoriteMark ? (
//               <FavoriteIcon onClick={handleFavorite} />
//             ) : (
//               <FavoriteBorderIcon onClick={handleFavorite} />
//             )}
//             {isBookmarked ? (
//               <BookmarkIcon onClick={toggleBookmark} />
//             ) : (
//               <BookmarkBorderIcon onClick={toggleBookmark} />
//             )}

//             <p>
//               <strong>Year:</strong> {movie.year}
//             </p>
//             <p>
//               <strong>Genre:</strong> {movie.genre}
//             </p>
//             <p>
//               <strong>Rating:</strong> {movie.rating}
//             </p>
//             <p>
//               <strong>Price:</strong> {movie.price}
//             </p>

//             <button className="buy-button">
//               <SellIcon /> <br />
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Deteil;
///!готовое
// import React, { useState, useEffect } from "react";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import SellIcon from "@mui/icons-material/Sell";
// import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
// import "./Deteil.css";

// // Компонент для отображения деталей фильма
// const Deteil = ({ movie, handleCloseModal }) => {
//   // Состояния для отслеживания, добавлен ли фильм в закладки и в избранное
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [isFavoriteMark, setIsFavoriteMark] = useState(false);
//   const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");
//   const [username, setUsername] = useState("Guest");

//   // Хук useEffect для инициализации состояния закладок и избранного при изменении фильма
//   useEffect(() => {
//     // Получаем сохраненные фильмы из localStorage
//     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
//     const favoriteMovies =
//       JSON.parse(localStorage.getItem("favoriteMovies")) || [];
//     const savedComments =
//       JSON.parse(localStorage.getItem(`comments-${movie.title}`)) || [];

//     // Проверяем, находится ли фильм в избранном или закладках
//     const isMovieLiked = likedMovies.some((m) => m.title === movie.title);
//     const isMovieFavorited = favoriteMovies.some(
//       (m) => m.title === movie.title
//     );

//     // Устанавливаем состояние в зависимости от наличия фильма в localStorage
//     setIsFavoriteMark(isMovieLiked);
//     setIsBookmarked(isMovieFavorited);
//     setComments(savedComments);
//   }, [movie.title]);

//   // Функция для переключения состояния закладок
//   const toggleBookmark = () => {
//     setIsBookmarked(!isBookmarked);

//     // Получаем список избранных фильмов из localStorage
//     const favoriteMovies =
//       JSON.parse(localStorage.getItem("favoriteMovies")) || [];
//     if (isBookmarked) {
//       // Если фильм уже в закладках, удаляем его
//       const updatedFavoriteMovies = favoriteMovies.filter(
//         (m) => m.title !== movie.title
//       );
//       localStorage.setItem(
//         "favoriteMovies",
//         JSON.stringify(updatedFavoriteMovies)
//       );
//     } else {
//       // Если фильм не в закладках, добавляем его
//       localStorage.setItem(
//         "favoriteMovies",
//         JSON.stringify([...favoriteMovies, movie])
//       );
//     }
//   };

//   // Функция для переключения состояния избранного
//   const handleFavorite = () => {
//     setIsFavoriteMark(!isFavoriteMark);

//     // Получаем список понравившихся фильмов из localStorage
//     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
//     if (isFavoriteMark) {
//       // Если фильм уже в избранном, удаляем его
//       const updatedLikedMovies = likedMovies.filter(
//         (m) => m.title !== movie.title
//       );
//       localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));
//     } else {
//       // Если фильм не в избранном, добавляем его
//       localStorage.setItem(
//         "likedMovies",
//         JSON.stringify([...likedMovies, movie])
//       );
//     }
//   };

//   // Функция для открытия модального окна комментариев
//   const openCommentModal = () => {
//     setIsCommentModalOpen(true);
//   };

//   // Функция для закрытия модального окна комментариев
//   const closeCommentModal = () => {
//     setIsCommentModalOpen(false);
//   };

//   // Функция для добавления нового комментария
//   const addComment = () => {
//     if (newComment.trim()) {
//       const newComments = [...comments, { username, text: newComment }];
//       setComments(newComments);
//       setNewComment("");
//       localStorage.setItem(
//         `comments-${movie.title}`,
//         JSON.stringify(newComments)
//       );
//     }
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close-button" onClick={handleCloseModal}>
//           ×
//         </span>
//         <div className="modal-body">
//           <img src={movie.image} alt={movie.title} className="modal-image" />
//           <div className="movie-details">
//             <h2>{movie.title}</h2>
//             <div className="icons">
//               {isFavoriteMark ? (
//                 <FavoriteIcon onClick={handleFavorite} />
//               ) : (
//                 <FavoriteBorderIcon onClick={handleFavorite} />
//               )}
//               {isBookmarked ? (
//                 <BookmarkIcon onClick={toggleBookmark} />
//               ) : (
//                 <BookmarkBorderIcon onClick={toggleBookmark} />
//               )}
//               <ModeCommentOutlinedIcon
//                 className="comment-icon"
//                 onClick={openCommentModal}
//               />
//             </div>
//             <p>
//               <strong>Year:</strong> {movie.year}
//             </p>
//             <p>
//               <strong>Genre:</strong> {movie.genre}
//             </p>
//             <p>
//               <strong>Rating:</strong> {movie.rating}
//             </p>
//             <p>
//               <strong>Price:</strong> {movie.price}
//             </p>
//             <button className="buy-button">
//               <SellIcon /> <br />
//               Buy Now
//             </button>
//             {isCommentModalOpen && (
//               <div className="comment-modal">
//                 <div className="comment-modal-content">
//                   <span className="close-button" onClick={closeCommentModal}>
//                     ×
//                   </span>
//                   <h3>Comments</h3>
//                   <div className="comments-list">
//                     {comments.map((comment, index) => (
//                       <div key={index} className="comment-item">
//                         <strong>{comment.username}:</strong> {comment.text}
//                       </div>
//                     ))}
//                   </div>
//                   <div className="comment-form">
//                     <textarea
//                       value={newComment}
//                       onChange={(e) => setNewComment(e.target.value)}
//                       placeholder="Add a comment..."
//                     />
//                     <button onClick={addComment}>Submit</button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Deteil;
//???????
///!!!!!!!!!!!12345678910
// import React, { useState, useEffect } from "react";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import SellIcon from "@mui/icons-material/Sell";
// import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
// import DeleteIcon from "@mui/icons-material/Delete";
// import "./Deteil.css";

// // Компонент для отображения деталей фильма
// const Deteil = ({ movie, handleCloseModal }) => {
//   // Состояния для отслеживания, добавлен ли фильм в закладки и в избранное
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [isFavoriteMark, setIsFavoriteMark] = useState(false);
//   const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");
//   const [username, setUsername] = useState("Guest");

//   // Хук useEffect для инициализации состояния закладок и избранного при изменении фильма
//   useEffect(() => {
//     // Получаем сохраненные фильмы из localStorage
//     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
//     const favoriteMovies =
//       JSON.parse(localStorage.getItem("favoriteMovies")) || [];
//     const savedComments =
//       JSON.parse(localStorage.getItem(`comments-${movie.title}`)) || [];

//     // Проверяем, находится ли фильм в избранном или закладках
//     const isMovieLiked = likedMovies.some((m) => m.title === movie.title);
//     const isMovieFavorited = favoriteMovies.some(
//       (m) => m.title === movie.title
//     );

//     // Устанавливаем состояние в зависимости от наличия фильма в localStorage
//     setIsFavoriteMark(isMovieLiked);
//     setIsBookmarked(isMovieFavorited);
//     setComments(savedComments);
//   }, [movie.title]);

//   // Функция для переключения состояния закладок
//   const toggleBookmark = () => {
//     setIsBookmarked(!isBookmarked);

//     // Получаем список избранных фильмов из localStorage
//     const favoriteMovies =
//       JSON.parse(localStorage.getItem("favoriteMovies")) || [];
//     if (isBookmarked) {
//       // Если фильм уже в закладках, удаляем его
//       const updatedFavoriteMovies = favoriteMovies.filter(
//         (m) => m.title !== movie.title
//       );
//       localStorage.setItem(
//         "favoriteMovies",
//         JSON.stringify(updatedFavoriteMovies)
//       );
//     } else {
//       // Если фильм не в закладках, добавляем его
//       localStorage.setItem(
//         "favoriteMovies",
//         JSON.stringify([...favoriteMovies, movie])
//       );
//     }
//   };

//   // Функция для переключения состояния избранного
//   const handleFavorite = () => {
//     setIsFavoriteMark(!isFavoriteMark);

//     // Получаем список понравившихся фильмов из localStorage
//     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
//     if (isFavoriteMark) {
//       // Если фильм уже в избранном, удаляем его
//       const updatedLikedMovies = likedMovies.filter(
//         (m) => m.title !== movie.title
//       );
//       localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));
//     } else {
//       // Если фильм не в избранном, добавляем его
//       localStorage.setItem(
//         "likedMovies",
//         JSON.stringify([...likedMovies, movie])
//       );
//     }
//   };

//   // Функция для открытия модального окна комментариев
//   const openCommentModal = () => {
//     setIsCommentModalOpen(true);
//   };

//   // Функция для закрытия модального окна комментариев
//   const closeCommentModal = () => {
//     setIsCommentModalOpen(false);
//   };

//   // Функция для добавления нового комментария
//   const addComment = () => {
//     if (newComment.trim()) {
//       const newComments = [...comments, { username, text: newComment }];
//       setComments(newComments);
//       setNewComment("");
//       localStorage.setItem(
//         `comments-${movie.title}`,
//         JSON.stringify(newComments)
//       );
//     }
//   };

//   // Функция для удаления комментария
//   const deleteComment = (indexToDelete) => {
//     const updatedComments = comments.filter(
//       (_, index) => index !== indexToDelete
//     );
//     setComments(updatedComments);
//     localStorage.setItem(
//       `comments-${movie.title}`,
//       JSON.stringify(updatedComments)
//     );
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close-button" onClick={handleCloseModal}>
//           ×
//         </span>
//         <div className="modal-body">
//           <img src={movie.image} alt={movie.title} className="modal-image" />
//           <div className="movie-details">
//             <h2>{movie.title}</h2>
//             <div className="icons">
//               {isFavoriteMark ? (
//                 <FavoriteIcon onClick={handleFavorite} />
//               ) : (
//                 <FavoriteBorderIcon onClick={handleFavorite} />
//               )}
//               {isBookmarked ? (
//                 <BookmarkIcon onClick={toggleBookmark} />
//               ) : (
//                 <BookmarkBorderIcon onClick={toggleBookmark} />
//               )}
//               <ModeCommentOutlinedIcon
//                 className="comment-icon"
//                 onClick={openCommentModal}
//               />
//             </div>
//             <p>
//               <strong>Year:</strong> {movie.year}
//             </p>
//             <p>
//               <strong>Genre:</strong> {movie.genre}
//             </p>
//             <p>
//               <strong>Rating:</strong> {movie.rating}
//             </p>
//             <p>
//               <strong>Price:</strong> {movie.price}
//             </p>
//             <button className="buy-button">
//               <SellIcon /> <br />
//               Buy Now
//             </button>
//             {isCommentModalOpen && (
//               <div className="comment-modal">
//                 <div className="comment-modal-content">
//                   <span className="close-button" onClick={closeCommentModal}>
//                     ×
//                   </span>
//                   <h3>Comments</h3>
//                   <div className="comments-list">
//                     {comments.map((comment, index) => (
//                       <div key={index} className="comment-item">
//                         <strong>{comment.username}:</strong> {comment.text}
//                         <DeleteIcon
//                           className="delete-icon"
//                           onClick={() => deleteComment(index)}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                   <div className="comment-form">
//                     <textarea
//                       value={newComment}
//                       onChange={(e) => setNewComment(e.target.value)}
//                       placeholder="Add a comment..."
//                     />
//                     <button onClick={addComment}>Submit</button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Deteil;
//!!!!!!!!!!!12345678910 9090909090909090909
// import React, { useState, useEffect } from "react";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import SellIcon from "@mui/icons-material/Sell";
// import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
// import DeleteIcon from "@mui/icons-material/Delete";
// import "./Deteil.css";

// // Компонент для отображения деталей фильма
// const Deteil = ({ movie, handleCloseModal }) => {
//   // Состояния для отслеживания, добавлен ли фильм в закладки и в избранное
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [isFavoriteMark, setIsFavoriteMark] = useState(false);
//   const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");
//   const [username, setUsername] = useState("Guest");

//   // Хук useEffect для инициализации состояния закладок и избранного при изменении фильма
//   useEffect(() => {
//     // Получаем сохраненные фильмы из localStorage
//     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
//     const favoriteMovies =
//       JSON.parse(localStorage.getItem("favoriteMovies")) || [];
//     const savedComments =
//       JSON.parse(localStorage.getItem(`comments-${movie.title}`)) || [];

//     // Проверяем, находится ли фильм в избранном или закладках
//     const isMovieLiked = likedMovies.some((m) => m.title === movie.title);
//     const isMovieFavorited = favoriteMovies.some(
//       (m) => m.title === movie.title
//     );

//     // Устанавливаем состояние в зависимости от наличия фильма в localStorage
//     setIsFavoriteMark(isMovieLiked);
//     setIsBookmarked(isMovieFavorited);
//     setComments(savedComments);
//   }, [movie.title]);

//   // Функция для переключения состояния закладок
//   const toggleBookmark = () => {
//     setIsBookmarked(!isBookmarked);

//     // Получаем список избранных фильмов из localStorage
//     const favoriteMovies =
//       JSON.parse(localStorage.getItem("favoriteMovies")) || [];
//     if (isBookmarked) {
//       // Если фильм уже в закладках, удаляем его
//       const updatedFavoriteMovies = favoriteMovies.filter(
//         (m) => m.title !== movie.title
//       );
//       localStorage.setItem(
//         "favoriteMovies",
//         JSON.stringify(updatedFavoriteMovies)
//       );
//     } else {
//       // Если фильм не в закладках, добавляем его
//       localStorage.setItem(
//         "favoriteMovies",
//         JSON.stringify([...favoriteMovies, movie])
//       );
//     }
//   };

//   // Функция для переключения состояния избранного
//   const handleFavorite = () => {
//     setIsFavoriteMark(!isFavoriteMark);

//     // Получаем список понравившихся фильмов из localStorage
//     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
//     if (isFavoriteMark) {
//       // Если фильм уже в избранном, удаляем его
//       const updatedLikedMovies = likedMovies.filter(
//         (m) => m.title !== movie.title
//       );
//       localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));
//     } else {
//       // Если фильм не в избранном, добавляем его
//       localStorage.setItem(
//         "likedMovies",
//         JSON.stringify([...likedMovies, movie])
//       );
//     }
//   };

//   // Функция для открытия модального окна комментариев
//   const openCommentModal = () => {
//     setIsCommentModalOpen(true);
//   };

//   // Функция для закрытия модального окна комментариев
//   const closeCommentModal = () => {
//     setIsCommentModalOpen(false);
//   };

//   // Функция для добавления нового комментария
//   const addComment = () => {
//     if (newComment.trim()) {
//       const newComments = [...comments, { username, text: newComment }];
//       setComments(newComments);
//       setNewComment("");
//       localStorage.setItem(
//         `comments-${movie.title}`,
//         JSON.stringify(newComments)
//       );
//     }
//   };

//   // Функция для удаления комментария
//   const deleteComment = (indexToDelete) => {
//     const updatedComments = comments.filter(
//       (_, index) => index !== indexToDelete
//     );
//     setComments(updatedComments);
//     localStorage.setItem(
//       `comments-${movie.title}`,
//       JSON.stringify(updatedComments)
//     );
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close-button" onClick={handleCloseModal}>
//           ×
//         </span>
//         <div className="modal-body">
//           <img src={movie.image} alt={movie.title} className="modal-image" />
//           <div className="movie-details">
//             <h2>{movie.title}</h2>
//             <div className="icons">
//               {isFavoriteMark ? (
//                 <FavoriteIcon onClick={handleFavorite} />
//               ) : (
//                 <FavoriteBorderIcon onClick={handleFavorite} />
//               )}
//               {isBookmarked ? (
//                 <BookmarkIcon onClick={toggleBookmark} />
//               ) : (
//                 <BookmarkBorderIcon onClick={toggleBookmark} />
//               )}
//               <ModeCommentOutlinedIcon
//                 className="comment-icon"
//                 onClick={openCommentModal}
//               />
//             </div>
//             <p>
//               <strong>Year:</strong> {movie.year}
//             </p>
//             <p>
//               <strong>Genre:</strong> {movie.genre}
//             </p>
//             <p>
//               <strong>Rating:</strong> {movie.rating}
//             </p>
//             <p>
//               <strong>Price:</strong> {movie.price}
//             </p>
//             <button className="buy-button">
//               <SellIcon /> <br />
//               Buy Now
//             </button>
//             <div className="comments-section">
//               <h3>Comments</h3>
//               <div className="comments-list">
//                 {comments.map((comment, index) => (
//                   <div key={index} className="comment-item">
//                     <strong>{comment.username}:</strong> {comment.text}
//                     <DeleteIcon
//                       className="delete-icon"
//                       onClick={() => deleteComment(index)}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         {isCommentModalOpen && (
//           <div className="comment-modal">
//             <div className="comment-modal-content">
//               <span className="close-button" onClick={closeCommentModal}>
//                 ×
//               </span>
//               <h3>Add a Comment</h3>
//               <div className="comment-form">
//                 <textarea
//                   value={newComment}
//                   onChange={(e) => setNewComment(e.target.value)}
//                   placeholder="Add a comment..."
//                 />
//                 <button onClick={addComment}>Submit</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Deteil;
//!!!?!?!?!?!?!
import React, { useState, useEffect } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SellIcon from "@mui/icons-material/Sell";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Deteil.css";

// Компонент для отображения деталей фильма
const Deteil = ({ movie, handleCloseModal }) => {
  // Состояния для отслеживания, добавлен ли фильм в закладки и в избранное
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFavoriteMark, setIsFavoriteMark] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("Guest");

  // Хук useEffect для инициализации состояния закладок и избранного при изменении фильма
  useEffect(() => {
    // Получаем сохраненные фильмы из localStorage
    const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
    const favoriteMovies =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    const savedComments =
      JSON.parse(localStorage.getItem(`comments-${movie.title}`)) || [];

    // Проверяем, находится ли фильм в избранном или закладках
    const isMovieLiked = likedMovies.some((m) => m.title === movie.title);
    const isMovieFavorited = favoriteMovies.some(
      (m) => m.title === movie.title
    );

    // Устанавливаем состояние в зависимости от наличия фильма в localStorage
    setIsFavoriteMark(isMovieLiked);
    setIsBookmarked(isMovieFavorited);
    setComments(savedComments);
  }, [movie.title]);

  // Функция для переключения состояния закладок
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);

    // Получаем список избранных фильмов из localStorage
    const favoriteMovies =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    if (isBookmarked) {
      // Если фильм уже в закладках, удаляем его
      const updatedFavoriteMovies = favoriteMovies.filter(
        (m) => m.title !== movie.title
      );
      localStorage.setItem(
        "favoriteMovies",
        JSON.stringify(updatedFavoriteMovies)
      );
    } else {
      // Если фильм не в закладках, добавляем его
      localStorage.setItem(
        "favoriteMovies",
        JSON.stringify([...favoriteMovies, movie])
      );
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

  // Функция для закрытия модального окна комментариев
  const closeCommentModal = () => {
    setIsCommentModalOpen(false);
  };

  // Функция для добавления нового комментария
  const addComment = () => {
    if (newComment.trim() && newComment.length <= 100) {
      const newComments = [...comments, { username, text: newComment }];
      setComments(newComments);
      setNewComment("");
      localStorage.setItem(
        `comments-${movie.title}`,
        JSON.stringify(newComments)
      );
      closeCommentModal(); // Закрываем модальное окно после добавления комментария
    } else if (newComment.length > 100) {
      alert("Comment cannot exceed 100 characters.");
    }
  };

  // Функция для удаления комментария
  const deleteComment = (indexToDelete) => {
    const updatedComments = comments.filter(
      (_, index) => index !== indexToDelete
    );
    setComments(updatedComments);
    localStorage.setItem(
      `comments-${movie.title}`,
      JSON.stringify(updatedComments)
    );
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
            <div className="icons">
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
            </div>
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
            <div className="comments-section">
              <h3>Comments</h3>
              <div className="comments-list">
                {comments.map((comment, index) => (
                  <div key={index} className="comment-item">
                    <strong>{comment.username}:</strong> {comment.text}
                    <DeleteIcon
                      className="delete-icon"
                      onClick={() => deleteComment(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {isCommentModalOpen && (
          <div className="comment-modal">
            <div className="comment-modal-content">
              <span className="close-button" onClick={closeCommentModal}>
                ×
              </span>
              <h3>Add a Comment</h3>
              <div className="comment-form">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  maxLength="100" // Ограничиваем максимальную длину комментария
                />
                <div className="comment-counter">{newComment.length}/100</div>
                <button onClick={addComment}>Submit</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Deteil;
