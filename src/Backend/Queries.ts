import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

import { toastErr } from "../utils/toast";
import catchError from "../utils/catchErr";
import { setLoadingType } from "../Types";

// Function to handle user signup
// This function takes in user data, a loading state setter, and a reset function
export const BE_signup = (
  data: {
    email: string;
    password: string;
    confirmPassword: string;
  },
  setLoading: setLoadingType,
  reset: () => void
) => {
  const { email, password, confirmPassword } = data;

  // loading true
  setLoading(true);
  if (email && password) {
    if (password === confirmPassword) {
      //   console.log(email, password);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(userCredential);
          setLoading(false);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          catchError(error);
          setLoading(false);
        });
    } else {
      console.log("Password must match");
      toastErr("Password must match");
      setLoading(false);
    }
  } else {
    console.log("Fields Shouldn't be left empty");
    toastErr("Fields Shouldn't be left empty");
    setLoading(false);
  }
};
