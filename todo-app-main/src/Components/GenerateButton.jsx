import { Button } from "@mui/material";
import React from "react";
import LoopIcon from "@mui/icons-material/Loop";

const GenerateButton = ({ onClickGenerate }) => {
  return (
    <Button variant="outlined" color="warning" onClick={onClickGenerate}>
      Random <LoopIcon />
    </Button>
  );
};

export default GenerateButton;
