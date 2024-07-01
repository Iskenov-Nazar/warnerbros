// import React, { useState, useEffect } from "react";
// import "./Comments.modal.css";

// const Comments = ({ movieId, onClose }) => {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");

//   useEffect(() => {

//     fetch(`http://localhost:3000/comments?movieId=${movieId}`)
//       .then((response) => response.json())
//       .then((data) => setComments(data));
//   }, [movieId]);

//   const handleAddComment = () => {
//     const comment = {
//       movieId,
//       text: newComment,
//     };

//     fetch("http://localhost:3000/comments", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(comment),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setComments([...comments, data]);
//         setNewComment("");
//       });
//   };

//   return (
//     <div className="comments-modal">
//       <div className="comments-modal-content">
//         <span className="close-button" onClick={onClose}>
//           ×
//         </span>
//         <div className="comments-list">
//           {comments.map((comment, index) => (
//             <div key={index} className="comment">
//               {comment.text}
//             </div>
//           ))}
//         </div>
//         <div className="add-comment">
//           <textarea
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             placeholder="Add a comment..."
//           />
//           <button onClick={handleAddComment}>Post Comment</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Comments;
//!
import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { useProduct } from "../../context/ProductContextProvider";

const CommentModal = ({ open, handleClose, productId }) => {
  const { addComment } = useProduct();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    if (name.trim() === "" || comment.trim() === "") {
      return; // Не отправляем пустой комментарий
    }

    await addComment(productId, { name, comment });
    setName(""); // Очистка поля имени
    setComment(""); // Очистка поля комментария
    handleClose(); // Закрыть модальное окно
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2, // Закругленные углы
        }}
      >
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          variant="outlined" // Рамка инпутов
        />
        <TextField
          fullWidth
          label="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          margin="normal"
          multiline
          rows={4}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default CommentModal;
