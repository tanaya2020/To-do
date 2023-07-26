import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import TodoItem from "../TodoItem";
import { useGlobalState } from "../../context/GlobalState";
import axios from "axios";
import { addTask, editTask } from "../../context/GlobalAction";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const { tasks, dispatch } = useGlobalState();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const addItem = async (e) => {
    e.preventDefault();
    const newItem = { task: inputValue, completed: false };
    try {
      const response = await axios.post(
        process.env.REACT_APP_BASE_URL + "/todos",
        { ...newItem }
      );
      setInputValue("");
      addTask(dispatch, response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          sx={{ width: "70%" }}
          label="Add Task"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button variant="contained" onClick={addItem}>
          Add
        </Button>
      </div>
      <div>
        {tasks.map((task, i) => (
          <TodoItem
            key={uuidv4()}
            _id={task._id}
            label={task.task}
            checked={task.completed}
            itemChange={handleItemChange}
          />
        ))}
      </div>
    </div>
  );
};

export default AddTodo;
