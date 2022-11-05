import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { FiSettings } from "react-icons/fi";

const ThemeChanger = () => {
  return (
    <div className="fixed right-10 bottom-10" style={{ zIndex: "1000" }}>
      <Tooltip content="edit" className="bg-gray-400 m-1 p-1 text-xs">
        <button
          className=" text-3xl p-4  hover:drop-shadow-xl hover:bg-light-gray text-white"
          style={{ background: "blue", borderRadius: "50%" }}
        >
          <FiSettings />
        </button>
      </Tooltip>
    </div>
  );
};

export default ThemeChanger;
