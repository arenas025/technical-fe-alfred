import React from "react";

interface TabProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ text, isActive, onClick }: TabProps) => {
  return (
    <div
      className={`cursor-pointer px-4 py-2 ${
        isActive
          ? "text-xl text-center w-1/4 rounded-lg font-bold text-white bg-[#0060FF]"
          : "text-[#A2A2A2] text-center w-1/4"
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Tab;
