import React, { useState, useEffect } from "react";
import TodoItem from "../TodoItem";
import { useGlobalState } from "../../context/GlobalState";
import axios from "axios";
import { deleteTask } from "../../context/GlobalAction";

const Completed = () => {
  const { tasks, dispatch } = useGlobalState();

  const [completedTask, setCompletedTask] = useState([]);

  useEffect(() => {
    const filteredTasks = tasks.filter((task) => task.completed === true);
    setCompletedTask(filteredTasks);
  }, [tasks]);

  const handleDelete = async (taskId) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/todos/${taskId}`
      );
      const updatedTask = completedTask.filter((task) => task._id !== taskId);
      setCompletedTask(updatedTask);
      deleteTask(dispatch, taskId);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {completedTask.map((task) => (
        <TodoItem
          key={task._id}
          _id={task._id}
          label={task.task}
          checked={task.completed}
          deleteActive={true}
          onDelete={() => handleDelete(task._id)}
        />
      ))}
    </div>
  );
};

export default Completed;
