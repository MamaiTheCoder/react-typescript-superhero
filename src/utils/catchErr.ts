import { toastErr } from "./toast";

const catchError = (err: { code?: string }) => {
  const { code } = err;
  if (code) {
    switch (code) {
      case "auth/invalid-email":
        toastErr("Invalid email address.");
        break;
      case "auth/user-not-found":
        toastErr("User not found.");
        break;
      case "auth/wrong-password":
        toastErr("Wrong password.");
        break;
      case "auth/email-already-in-use":
        toastErr("Email already in use.");
        break;
      case "auth/weak-password":
        toastErr(
          "Weak password. Password should be at least 6 characters long."
        );
        break;
      case "auth/requires-recent-login":
        toastErr("Please log in again to perform this action.");
        break;
      default:
        toastErr("An unknown error occurred.");
    }
  }
};

export default catchError;
