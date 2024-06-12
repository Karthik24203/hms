import React, { useEffect, useState } from "react";

import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className="flex flex-col items-center justify-center "
    >
      <LoginForm />
    </div>
  );
};

export default Login;
