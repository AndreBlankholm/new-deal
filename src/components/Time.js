
import React, { useEffect, useState } from "react";

function TimePicker(){
    var [time,setTime] =useState(new Date())
   
    
        useEffect(()=>{
            setInterval(()=>setTime(new Date()),1000)
        },[])

        

    return(
        <div>
            <p>{time.toLocaleTimeString()}</p>
            
        </div>
    )
}

export default TimePicker;