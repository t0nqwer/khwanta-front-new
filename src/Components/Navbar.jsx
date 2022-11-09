import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { useStateContext } from "../Context/ContextProvider";
import { Tooltip, Button } from "@material-tailwind/react";
import TooltipComponent from "./TooltipComponent";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tooltip content={title} className=" bg-gray-400 m-1 p-1  text-xs">
    <Button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative shadow-none text-xl rounded-full p-3 hover:bg-gray-600"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </Button>
  </Tooltip>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu } = useStateContext();

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <TooltipComponent
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
    </div>
  );
};

export default Navbar;
