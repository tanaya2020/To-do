import React from "react";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TodoItem = ({
  label,
  checked,
  onDelete,
  deleteActive = false,
  itemChange,
  _id,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px 0",
      }}
    >
      <div>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: checked ? "line-through" : "none",
          }}
        >
          <input
            type="checkbox"
            checked={checked}
            style={{ width: "20px", height: "20px" }}
            onChange={(e) => itemChange(_id, e.target.checked)}
          />
          <span style={{ marginLeft: "10px" }}>{label}</span>
        </label>
      </div>
      {deleteActive && (
        <IconButton color="error" onClick={onDelete}>
          <DeleteOutlineIcon />
        </IconButton>
      )}
    </div>
  );
};

export default TodoItem;
