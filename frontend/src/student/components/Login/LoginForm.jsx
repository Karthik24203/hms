import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const LoginForm = () => {
  const [usn, setUsn] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(usn, password);
  };
  return (
    <div>
      <div className="border border-black rounded-md p-7 pt-5 pb-5 w-96">
        <h1 className="text-2xl font-semibold text-center">Login</h1>

        <form onSubmit={handleSubmit}>
          <label className="label justify-center p-2 text-1xl">USN</label>
          <input
            className="input input-bordered w-full max-w-xs"
            type=""
            name=""
            id="usn"
            value={usn}
            onChange={(e) => {
              setUsn(e.target.value);
            }}
          />

          <label className="label justify-center p-2 text-1xl">Password</label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="password"
            name=""
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Link
            to="/signup"
            className="block text-center text-black text-sm hover:underline hover:text-blue-600 mt-2"
          >
            Don't have an account?
          </Link>

          <button
            className="btn btn-md hover:text-black mt-3 border bg-black  text-base text-white btn-block"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
