import React, {useContext} from "react";
import CounterContext from "../context/CounterContext";


const Reset = ()=>{
    const {count, reset} = useContext(CounterContext)
     
    return (
        <div>
            {/* <h1> {count } </h1> */}
            <button onClick={reset}> Reset </button>
        </div>
    )
}

export default Reset;