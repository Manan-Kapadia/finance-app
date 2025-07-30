import React from "react";
import LoginSignupForm from "../component/loginForm/LoginSignupForm";

// interface AuthData {
//   email: string;
//   password: string;
//   confirmPassword?: string;
//   type: "login" | "signup";
// }

const LoginPage = () => {
  // const handleAuth = (data: AuthData) => {
  //   alert(`${data.type} submitted!\nEmail: ${data.email}`);
  // };

  return (
    <>
      <LoginSignupForm />
    </>
  );
};

export default LoginPage;
