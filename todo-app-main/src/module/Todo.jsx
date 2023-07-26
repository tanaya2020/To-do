import React from "react";
import BasicTabs from "../components/BasicTabs";

const Todo = () => {
  return (
    <div style={{ width: "640px", margin: "25px auto" }}>
      <p
        style={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        #todo
      </p>
      <BasicTabs />
    </div>
  );
};

export default Todo;
