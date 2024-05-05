import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import {
  Box,
  TextField,
  CardMedia,
  Card,
  Paper,
  CardContent,
  Typography, Button,
} from "@mui/material";
import Select from "react-select";

function App() {
  const asyncFetchJobs = async () => {
    const response = await axios.post(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        limit: 10,
        offset: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log({ response });
  };

  useEffect(() => {
    asyncFetchJobs();
  }, []);
  return (
    <div className="App">
      <Box
        sx={{ paddingTop: "1rem", paddingLeft: "5rem", paddingRight: "5rem" }}
      >
        {/* filter options started */}
        <Box sx={{ display: "flex", columnGap: "1rem" }}>
          <Box>
            <Select placeholder="Roles" />
          </Box>
          <Box>
            <Select placeholder="Experience" />
          </Box>
          <Box>
            <Select placeholder="Location" />
          </Box>
          <Box>
            <Select placeholder="Remote" />
          </Box>

          <Box>
            <Select placeholder="Tech Stack" />
          </Box>
          <Box>
            <Select placeholder="Minimum Base Pay Salary" />
          </Box>
          <Box>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Search Company Name"
              size="small"
            />
          </Box>
        </Box>
        {/* filter options section ended */}

       
        
      </Box>
    </div>
  );
}

export default App;
