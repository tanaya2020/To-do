import React, { useState, useEffect } from "react";
import TodoItem from "../TodoItem";
import { useGlobalState } from "../../context/GlobalState";
import { editTask } from "../../context/GlobalAction";
import axios from "axios";

const Active = () => {
  const { tasks, dispatch } = useGlobalState();
  console.log("all tasks---->", tasks);

  const [activeTask, setActiveTask] = useState([]);

  useEffect(() => {
    const filteredTask = tasks.filter((task) => task.completed === false);
    console.log("filtered tasks----->", filteredTask);
    setActiveTask(filteredTask);
  }, [tasks]);

  const handleItemChange = async (_id, completed) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/todos`,
        { _id, completed }
      );
      editTask(dispatch, response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {activeTask.map((task) => (
        <TodoItem
          key={task._id}
          _id={task._id}
          label={task.task}
          checked={task.completed}
          itemChange={handleItemChange}
        />
      ))}
    </div>
  );
};

export default Active;
