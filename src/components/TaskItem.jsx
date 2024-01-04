import React from "react";

const TaskItem = ({ value, setValue , onAddTask }) => {
  const changeVal = (e) => {
    setValue(e.target.value);

 

    
  };

  const handleKeyDown = (e) => {
    // Check if the key pressed is 'Enter'
    if (e.key === 'Enter') {
      onAddTask();
    }
  };

  return (
    <div className="h-20 flex border-4 border-green-500 absolute bottom-2 left-0 right-0 rounded-md">
      <input
        type="text"
        className="w-full focus:outline-none"
        value={value}
        onChange={changeVal}
        // onKeyPress={handleKeyPress}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default TaskItem;
