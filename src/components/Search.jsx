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
        <Input placeholder="Search" onChange = {handleChange} value={search} className = "search-field" sx={{bgcolor: "white", width:"40%", borderRadius:"5px", padding:"5px", marginBottom:"10px"}}/>
        {/* <input type = 'search' onChange = {handleChange} placeholder = "Search" value={search} className = "search-field"></input> */}
        <>
        {(val === "shows") ? <DisplayShows val={val} search={search} /> : <DisplayActor val={val} search={search}/>}
        </>
    </div>
)
}

export default Search;