import React, { useState } from "react";
import useComplaint from "../../hooks/useComplaint";

const ComplainRequest = () => {
  const [room_number, setRoomNum] = useState("");
  const [brief, setBrief] = useState();
  const [complaint, setComplaint] = useState();
  const [submitted, setSubmitted] = useState(false);

  const { loading, handleComplaint } = useComplaint();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleComplaint({ room_number, brief, complaint });
    setSubmitted(true);
  };

  return (
    <>
      <div className="  flex flex-col flex-grow p-4 poppins-regular items-left">
        <h2 className="text-4xl poppins-semibold text-center">Complaint</h2>

        {!submitted && (
          <form onSubmit={handleSubmit} className=" pl-20  w-full mt-5 ">
            <div className="flex">
              <div style={{ width: "50%" }} className="flex flex-col ">
                <p className="poppins-semibold">name</p>
                <p className="poppins-semibold">usn</p>

                <label className="label text-center">Room number</label>
                <input
                  style={{ width: "50%" }}
                  className="input input-bordered border border-black w-52"
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => {
                    setRoomNum(e.target.value);
                  }}
                />

                <label className="label mt-5 ">Brief</label>
                <input
                  className="input input-bordered border border-black w-full max-w-2xl"
                  placeholder="Subject"
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => {
                    setBrief(e.target.value);
                  }}
                />

                <label className="label mt-5">Complaint</label>
                <textarea
                  className="textarea textarea-bordered border border-black w-full max-w-2xl min-h-60 max-h-0"
                  placeholder="Enter your reason here"
                  name=""
                  id=""
                  onChange={(e) => {
                    setComplaint(e.target.value);
                  }}
                ></textarea>
              </div>
              <div
                style={{ width: "50%" }}
                className=" flex flex-col items-center justify-center"
              ></div>
            </div>

            <button
              className="btn btn-block mt-5 flex mx-auto max-w-xs  bg-black text-white hover:text-black hover:bg-gray-500"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        )}

        {submitted && (
          <p className="text-xl text-center mt-5">
            Complaint submitted successfully!
          </p>
        )}
      </div>
    </>
  );
};

export default ComplainRequest;
