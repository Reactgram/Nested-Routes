import React, {useContext} from "react";
import CounterContext from "../context/CounterContext";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const DisplayCount = ()=>{
    const {count} = useContext(CounterContext)
    console.log("redndered again", count)

    const navigate = useNavigate()
    return (
        <div>
            <h1> {count } </h1>
            <Outlet />


            <br /> <br />

            {/* <button onClick={()=>navigate("/apple/decrease")}> Decrease 1 </button>
            <button onClick={()=>navigate("/decrease")}> Decrease 2 </button>
            <button onClick={()=>navigate("decrease")}> Decrease 3 </button> */}
        </div>
    )
}

export default DisplayCount;