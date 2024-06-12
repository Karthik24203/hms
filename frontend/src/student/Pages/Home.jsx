import React from "react";
import Login from "./Login";
import LoginForm from "../components/Login/LoginForm";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 w-screen">
        <div className="hero-content  lg:w-8/12 ">
          <div className="text-center lg:text-left w-full">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
