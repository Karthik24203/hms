import React, { useState } from "react";
import useDamageRep from "../../hooks/useDamageRep";
import FileUpload from "../FileUpload";

const DamageReport = () => {
  const [location, setLofDamage] = useState();
  const [brief, setBrief] = useState();
  const [description, setDesc] = useState();
  const [permission_letter, setPermissionLetter] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { loading, handleDamageRep } = useDamageRep();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleDamageRep({
      location,
      brief,
      description,
      permission_letter,
    });
    setSubmitted(true);
  };

  return (
    <div className="  flex flex-col flex-grow p-4 poppins-regular items-left">
      <h2 className="text-4xl poppins-semibold text-center">Damage Report</h2>
      {!submitted && (
        <form onSubmit={handleSubmit} className=" pl-20  w-full mt-5 ">
          <div className="flex">
            <div style={{ width: "50%" }} className="flex flex-col ">
              <p className=" poppins-semibold">name</p>
              <p className=" poppins-semibold">usn</p>

              <label className="label text-center">Location of Damage</label>
              <input
                style={{ width: "50%" }}
                className="input input-bordered border border-black w-52"
                type="text"
                name=""
                id=""
                onChange={(e) => {
                  setLofDamage(e.target.value);
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
              <label className="label mt-5">Description</label>
              <textarea
                className="textarea textarea-bordered border border-black w-full max-w-2xl min-h-60 max-h-0"
                placeholder="Enter your reason here"
                name=""
                id=""
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              ></textarea>
            </div>
            <div
              style={{ width: "50%" }}
              className=" flex flex-col items-center justify-center"
            >
              <p className="mb-2 text-lg">Upload image</p>
              <FileUpload setPermissionLetter={setPermissionLetter} />
            </div>
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
          Damage report submitted successfully!
        </p>
      )}
    </div>
  );
};

export default DamageReport;
