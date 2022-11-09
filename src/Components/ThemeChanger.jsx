import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "../Context/ContextProvider";

const ThemeChanger = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="fixed top-10 right-10" style={{ zIndex: "1000" }}>
      <Tooltip content="edit" className="bg-gray-400 m-1 p-1 text-xs">
        <button
          className=" text-lg p-2 shadow-none hover:drop-shadow-xl hover:bg-light-gray text-white"
          style={{ background: currentColor, borderRadius: "50%" }}
        >
          <FiSettings />
        </button>
      </Tooltip>
    </div>
  );
};

export default ThemeChanger;
