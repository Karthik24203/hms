import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const Signin = () => {
  const [usn, setUsn] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup({ name, usn, password, confirmPassword });
  };

  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className="flex flex-col items-center justify-center"
    >
      <div>
        <div className="border border-black rounded-md p-7 pt-5 pb-5 w-96">
          <h1 className="text-2xl font-semibold text-center">Signin</h1>
          <form className="form mt-4" onSubmit={handleSubmit}>
            <label className="label justify-center p-2 text-lg">Name</label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="label justify-center p-2 text-lg">USN</label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
            />
            <label className="label justify-center p-2 text-lg">Password</label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label justify-center p-2 text-lg">
              Confirm Password
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Link
              to="/login"
              className="block text-center text-black text-sm hover:underline hover:text-blue-600 mt-2"
            >
              Already have an account?
            </Link>
            <button
              className="text-base btn btn-md hover:text-black mt-3 border bg-black text-white btn-block"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Signin"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
