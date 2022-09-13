import { Typography } from '@mui/material';
import React, { useState } from 'react'

const ReadMore = (props) => {
    const [show,setShow] = useState(false);



    const showDetails = (val) =>{
        let para;
        if(val && val.length > 60)
        {
            para = val.slice(0, 60) + "....";
  
        }
        return para;
    }

  return (
    
    <div>
        <Typography component="p">
        {
            show ? props.details :showDetails(props.details)
        }
        </Typography>
        <Typography sx={{color:"#5B2A8C", fontWeight:"600", cursor:"pointer"}} component="p" onClick={()=>setShow(!show)}>
            {show ? "Show Less...": "Read More..."}
        </Typography>
    </div>
  )
}

export default ReadMore