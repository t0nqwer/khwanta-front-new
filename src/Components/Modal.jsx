import React from "react";

const Modal = ({ setOpenModal, title, body, customFunc ,DelButton}) => {
  return (
    <div
      className="fixed w-screen right-0 bg-gray-400 bg-opacity-50 top-0 h-screen flex  justify-center items-center z-50 "
      style={{ zIndex: "10000" }}
    >
      <div className=" w-1/2  bg-white  rounded-xl shadow-md flex flex-col p-6">
        <div className="flex justify-end">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className=" inline-block text-center mt-2 text-red-500 text-3xl font-bold">
          <h1>{title}</h1>
        </div>
        <div className="flex flex-1 justify-center items-center text-lg mt-10 font-normal">{body}</div>
        <div className="flex flex-initial justify-center mt-10 items-center">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
            className=" w-28 h-11 m-2 bg-gray-500 text-white rounded-md cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => customFunc()}
            className="w-28 h-11 m-2 bg-red-500 text-white rounded-md cursor-pointer"
          >
            {DelButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
