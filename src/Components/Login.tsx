import React, { useState } from "react";

import Input from "./Input";
import Button from "./Button";
import { BE_signup } from "../Backend/Queries";

function Login() {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpLoading, setSignUpLoading] = useState(false);

  const handleSignup = () => {
    const data = { email, password, confirmPassword };
    console.log(data);
    BE_signup(data, setSignUpLoading, reset);
  };

  const handleSignin = () => {
    const data = { email, password };
    console.log(data);
  };

  const reset = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="w-full md:w-[450px]">
      <h1 className="text-white text-center font-bold text-4xl md:text-6xl mb-10">
        {!login ? "Register" : "Login"}
      </h1>
      <div className="bg-white flex flex-col gap-3 w-full p-6 min-h-[150px] rounded-xl drop-shadow-xl">
        <Input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!login && (
          <Input
            name="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        {login ? (
          <>
            <Button text="Login" onClick={handleSignin} />
            <Button onClick={() => setLogin(false)} text="Register" />
          </>
        ) : (
          <>
            <Button
              text="Register"
              onClick={handleSignup}
              loading={signUpLoading}
            />
            <Button onClick={() => setLogin(true)} text="Login" />
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
