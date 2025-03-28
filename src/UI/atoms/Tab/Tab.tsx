import React from "react";

interface TabProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ text, isActive, onClick }: TabProps) => {
  return (
    <div
      className={`cursor-pointer  px-4 py-2 ${
        isActive
          ? `md:text-xl text-lg text-center w-1/3 rounded-lg font-bold text-white bg-[#0060FF]`
          : `text-[#A2A2A2]  text-center w-1/3`
      }`}
      onClick={onClick}
    >
      <p className="text-center m-auto">{text}</p>
    </div>
  );
};

export default Tab;
