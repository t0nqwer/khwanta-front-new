import { Tooltip, Button } from "@material-tailwind/react";
import React from "react";

const TooltipComponent = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <Tooltip className="bg-gray-400 m-1 p-1 text-xs" content={title}>
      <Button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative shadow-none  text-xl rounded-full p-3 hover:bg-gray-600"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </Button>
    </Tooltip>
  );
};

export default TooltipComponent;
