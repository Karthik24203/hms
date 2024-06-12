import React, { useState } from "react";
import useLeavReq from "../../hooks/useLeaveReq";
import FileUpload from "../FileUpload";

const LeaveRequest = () => {
  const [room_number, setRoomNum] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [permission_letter, setPermissionLetter] = useState("");
  const [submitted, setSubmitted] = useState(false); // Track if form is submitted

  const { HandleLeaveReq, loading } = useLeavReq();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await HandleLeaveReq({ room_number, subject, body, permission_letter });
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col flex-grow p-4 poppins-regular items-left">
      <h2 className="text-4xl poppins-semibold text-center">Leave Request</h2>

      {!submitted && ( // Render form only if it's not submitted
        <form onSubmit={handleSubmit} className="pl-20 w-full mt-5">
          <div className="flex">
            <div style={{ width: "50%" }} className="flex flex-col">
              <p className="poppins-semibold">name</p>
              <p className="poppins-semibold">usn</p>

              <label className="label text-center">Room number</label>
              <input
                style={{ width: "50%" }}
                className="input input-bordered border border-black w-52"
                type="text"
                name="Roomnumber"
                required
                value={room_number}
                onChange={(e) => setRoomNum(e.target.value)}
              />

              <label className="label mt-5">Subject</label>
              <input
                className="input input-bordered border border-black w-full max-w-2xl"
                placeholder="Subject"
                type="text"
                name="subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />

              <label className="label mt-5">Body</label>
              <textarea
                className="textarea textarea-bordered border border-black w-full max-w-2xl min-h-60 max-h-0"
                placeholder="Enter your reason here"
                name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
            <div
              style={{ width: "50%" }}
              className="flex flex-col items-center justify-center"
            >
              <p className="mb-2 text-lg">Upload Permission Letter</p>
              <FileUpload setPermissionLetter={setPermissionLetter} />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-block mt-5 flex mx-auto max-w-xs bg-black text-white hover:text-black hover:bg-gray-500"
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
          Leave request submitted successfully!
        </p>
      )}
    </div>
  );
};

export default LeaveRequest;
