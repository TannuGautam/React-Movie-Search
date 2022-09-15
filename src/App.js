import React from "react";
import Search from "./components/Search";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";


const App = () => {
  const [val, setVal] = useState("actor");

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <Container style={{backgroundColor: "#5B2A8C",minHeight:"100vh"}} maxWidth={false}>
          <Typography variant="h2" color="#fff" gutterBottom>
            TVmaze
          </Typography>

          <Typography variant="h5" color="#fff" gutterBottom>
            Search your favorite shows
          </Typography>

          <br></br>

          <RadioGroup row aria-labelledby="demo-controlled-radio-buttons-group" defaultValue={val} name="controlled-radio-buttons-group" value={val} onChange={handleChange}>
            <FormControlLabel value="actor" sx={{color:"#fff"}} control={<Radio />} label="Actors" />
            <FormControlLabel value="shows" sx={{color:"#fff"}} control={<Radio />} label="Shows" />
          </RadioGroup>

          <br></br>

          <Typography variant="h6" color="yellow" gutterBottom>
            {(val === "actor") ? "Enter people below" : "Enter shows below" }
          </Typography>

          <Search val={val}></Search>
    </Container>
  );
};

export default App;
