import AddButton from "./components/AddButton";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { useState } from "react";
import "./style.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState(""); // State for the new task title

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== "") {
      const newTask = {
        id: Date.now(), // Assign a unique ID using the current timestamp
        title: newTaskTitle,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle(""); // Clear the input field after adding the task
    }
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };


  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    console.log("we are in the app js and you  get")
    console.log(taskId)
  };

  return (
    <>
      <div className=" w-[300px] md:w-[400px] h-[500px]   m-auto mt-[10vh] bg-white relative">
        <Header />
        <TaskList
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />{" "}
        <TaskItem 
        value={newTaskTitle} 
        setValue={setNewTaskTitle} 
        onAddTask={handleAddTask}/>
        <AddButton onAddTask={handleAddTask} />
      </div>
    </>
  );
}

export default App;
