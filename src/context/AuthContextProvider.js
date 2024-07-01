// import React, { createContext, useContext, useEffect, useState } from "react";

// import fire from "../fire";
// // import { set } from "firebase/database";
// import { useNavigate } from "react-router-dom";

// // import fire from "../fire";

// const authContext = createContext();
// export const useAuth = () => useContext(authContext);

// const AuthContextProvider = ({ children }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [hasAccount, setHasAccount] = useState("");
//   const navigate = useNavigate();
//   const clearInputs = () => {
//     setEmail("");
//     setPassword("");
//   };
//   const clearErrors = () => {
//     setEmailError("");
//     setPasswordError("");
//   };

//   const handleRegister = () => {
//     fire
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(() => setHasAccount(!hasAccount))
//       .catch((error) => {
//         switch (error.code) {
//           case "auth/email-already-in-use":
//           case "auth/invalid-email":
//             setEmailError(error.message);
//             break;
//           case "auth/weak-password":
//             setPasswordError(error.message);
//           default:
//             break;
//         }
//       });
//     clearInputs();
//     clearErrors();
//   };

//   const handleLogin = () => {
//     fire
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(() => navigate("/"))
//       .catch((error) => {
//         switch (error.code) {
//           case "auth/user-disabled":
//           case "auth/invalid-email":
//           case "auth/user-not-found":
//             setEmailError(Object.values(error.code));
//             break;
//           case "auth/wrong-password":
//             setPasswordError(Object.values(error.code.message));
//             break;
//           default:
//             break;
//         }
//       });
//     clearInputs();
//     clearErrors();
//   };

//   const handleLogOut = () => {
//     fire.auth().signOut();
//   };
//   const authListener = () => {
//     fire.auth().onAuthStateChanged((user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser("");
//       }
//     });
//   };
//   useEffect(() => {
//     authListener();
//   }, []);
//   const values = {
//     email,
//     password,
//     emailError,
//     passwordError,
//     setEmail,
//     setPassword,

//     setPasswordError,
//     user,
//     setUser,
//     handleRegister,
//     handleLogin,
//     handleLogOut,
//     authListener,
//   };
//   return <authContext.Provider value={values}>{children}</authContext.Provider>;
// };

// export default AuthContextProvider;
