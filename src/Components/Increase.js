import React, {useContext, useEffect} from "react";
import CounterContext from "../context/CounterContext";

import { useNavigate } from "react-router-dom";


const Increase = ()=>{
    const {count,inc} = useContext(CounterContext)

    const navigate = useNavigate()
     

    // apple/increase
    useEffect(()=>{
          if(count>10){
              navigate("/decrease")
          }
    },[count])
    

    return (
        <div>
            {/* <h1> {count } </h1> */}
            <button onClick={inc}> Increase </button>

          

            
        </div>
    )
}

export default Increase;


{/* <button onClick={()=>navigate("/apple/decrease")}> Decrease 1 </button>
            <button onClick={()=>navigate("/decrease")}> Decrease 2 </button>
            <button onClick={()=>navigate("decrease")}> Decrease 3 </button> */}