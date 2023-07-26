import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./style.css";
import AddTodo from "../components/AllTodo/AddTodo";
import Active from "./ActiveTask/Active";
import Completed from "./CompletedTask/Completed";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function BasicTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab
            label="All"
            sx={{
              textTransform: "capitalize",
              fontSize: "14px",
              fontWeight: 600,
            }}
          />
          <Tab
            label="Active"
            sx={{
              textTransform: "capitalize",
              fontSize: "14px",
              fontWeight: 600,
            }}
          />
          <Tab
            label="Completed"
            sx={{
              textTransform: "capitalize",
              fontSize: "14px",
              fontWeight: 600,
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          <AddTodo />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Active />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Completed />
      </TabPanel>
    </Box>
  );
}
