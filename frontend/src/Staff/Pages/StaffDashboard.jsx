import React from "react";
import RequestCard from "../../Staff/components/RequestCard";

const Dashboard = () => {
  return (
    <div style={{ width: "100vw" }}>
      <div>
        <h1 className="text-2xl poppins-semibold m-4">Kitchen Menu</h1>
        <div className="flex flex-col items-center m-4">
          <div className="flex flex-wrap justify-center m-3">
            <div
              className="bg-white border m-3 border-black hover:bg-blue-200 text-center active:bg-blue-600
             poppins-regular rounded-lg shadow-md w-52 h-20"
            >
              <h1 className="text-xl font-semibold">Morning</h1>
              <p>Menu</p>
            </div>
            <div
              className="bg-white border m-3 border-black hover:bg-blue-200 text-center
             active:bg-blue-600 poppins-regular rounded-lg shadow-md w-52 h-20"
            >
              <h1 className="text-xl font-semibold">Morning</h1>
              <p>Menu</p>
            </div>
            <div
              className="bg-white border m-3 border-black hover:bg-blue-200 text-center
                 active:bg-blue-600 poppins-regular rounded-lg shadow-md w-52 h-20"
            >
              <h1 className="text-xl font-semibold">Morning</h1>
              <p>Menu</p>
            </div>
          </div>
          <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Edit
          </button>
        </div>
      </div>
      <hr />
      <div className=" bg-slate-300 h-1"></div>
      <RequestCard />
    </div>
  );
};

export default Dashboard;
