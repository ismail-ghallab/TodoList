import React, { useState } from "react";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import TaskItem from "./TaskItem";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  // const deleteTest = (tasl)=>{
  //   console.log('this is the result')
  //   console.log(tasl)
  // }
  return (
    <div className="my-4 p-12 pt-1 overflow-scroll h-[300px] scrollbar-custom">
      {" "}
      {tasks.map((task) => (
        <div key={task.id} className="flex justify-between pt-3">
          <div
            className={
              task.completed ? "text-gray-600 line-through" : "text-black"
            }
          >
            {task.title}
          </div>
          <div onClick={() => toggleTaskCompletion(task.id)}>
            {task.completed ? (
              <RadioButtonCheckedOutlinedIcon className="text-green-500" />
            ) : (
              <CircleOutlinedIcon className="text-gray-500" />
            )}
            {/* Adding DeleteIcon */}
            <DeleteIcon
              className="text-red-500 cursor-pointer ml-3"
              onClick={(event) => {
                event.stopPropagation();
                deleteTask(task.id);
              }}
            />{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
