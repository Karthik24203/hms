import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="flex sticky top-0 ">
      <div
        style={{ height: "100vh" }}
        className=" poppins-regular cursor-pointer select-none flex flex-col border border-black"
      >
        <div className="border border-black p-5 pr-10 pl-10 m-3">
          <h2 className="poppins-bold text-2xl text-center">Username</h2>
          <p className="">usn</p>
        </div>

        <div className="">
          <Link
            to="/dashboard"
            className="w-full hover:bg-slate-300 text-center pt-1 pb-1 text-lg rounded-lg block"
          >
            Dashboard
          </Link>
          <h2 className="poppins-semibold text-semibold text-center text-2xl font-semibold text-rose-500">
            Forms
          </h2>
          <div className="flex flex-col items-center mr-4 ml-4">
            <Link
              to="/late"
              className="w-full hover:bg-slate-300 text-center pt-1 pb-1 text-lg rounded-lg block"
            >
              Late
            </Link>
            <Link
              to="/leave"
              className="w-full hover:bg-slate-300 text-center pt-1 pb-1 text-lg rounded-lg block"
            >
              Leave
            </Link>
            <Link
              to="/damage"
              className="w-full hover:bg-slate-300 text-center pt-1 pb-1 text-lg rounded-lg block"
            >
              Damage
            </Link>
            <Link
              to="/complain"
              className="w-full hover:bg-slate-300 text-center pt-1 pb-1 text-lg rounded-lg block"
            >
              Complain
            </Link>
          </div>
          <div className="divider px-50"></div>
          <h2 className="text-semibold text-center text-2xl font-semibold text-rose-500">
            History
          </h2>
          <p className="text-center text-xl text-gray-400 mt-5">None</p>
        </div>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
