import React from "react";

const AddButton = ({ onAddTask }) => {
  return (
    <button
    onClick={onAddTask}
      className="w-16 h-16 bg-green-500 rounded-full absolute bottom-[-1.60rem] left-[43%] text-[#fff] text-lg"
    >
      +
    </button>
  );
};

export default AddButton;
