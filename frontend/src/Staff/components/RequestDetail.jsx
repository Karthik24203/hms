import React from "react";

const RequestDetail = () => {
  return (
    <div className="grid grid-cols-2 p-9">
      <div>
        <p className="poppins-semibold text-3xl mt-5">name</p>
        <p className="poppins-semibold text-3xl mt-5">usn</p>
        <p className="poppins-medium text-2xl mt-5">
          Room Number: <span className="poppins-regular text-xl m-5">108A</span>
        </p>
        <p className="poppins-medium text-2xl mt-5">
          Subject:
          <span className="poppins-regular text-xl m-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, itaque.
          </span>
        </p>
        <p className="poppins-medium text-2xl mt-5">
          Complaint:
          <span className="poppins-regular text-xl m-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            corporis optio assumenda, incidunt repudiandae vel adipisci omnis
            eius ducimus error consequatur laudantium sequi atque possimus
            soluta voluptates non consectetur sint totam enim voluptas ipsam
            esse praesentium sunt. Quos omnis alias consequatur animi in,
            aperiam minus atque temporibus doloremque iste vitae.
          </span>
        </p>
      </div>
      <div>
        <p className="text-2xl poppins-semibold text-center mt-32">
          Permission letter
        </p>
      </div>

      <div className=" col-span-2 flex  justify-center mt-10 space-x-4">
        <button className="btn bg-green-500 text-white font-semibold py-2 px-4 rounded hover:text-black active:bg-green-600 active:text-white">
          Approve
        </button>
        <button className="btn bg-red-500 text-white font-semibold py-2 px-4 rounded hover:text-black active:bg-red-600 active:text-white">
          Disapprove
        </button>
      </div>
    </div>
  );
};

export default RequestDetail;
