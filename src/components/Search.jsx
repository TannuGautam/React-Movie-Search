import React from 'react'
import { useState } from 'react';
import DisplayActor from "../components/DisplayActor"
import DisplayShows from "../components/DisplayShows"
import Input from "@mui/material/Input"

const Search = ({val}) => {
  const [search, setSearch] = useState("");
  
  const handleChange = (e) =>{
    setSearch(e.target.value);
  }

  return (
    <div className='search-main'>
        <Input placeholder= {((val === "shows") ? "eg. Friends": "eg. Akon") }onChange = {handleChange} value={search} className = "search-field" sx={{bgcolor: "white", width:"40%", borderRadius:"5px", padding:"5px", marginBottom:"10px"}}/>
        {(val === "shows") ? <DisplayShows val={val} search={search} /> : <DisplayActor val={val} search={search}/>}
    </div>
)
}

export default Search;