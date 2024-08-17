import React, {useContext} from "react";
import CounterContext from "../context/CounterContext";


const Decrease = ()=>{
    const {count, dec} = useContext(CounterContext)
     
    return (
        <div>
            {/* <h1> {count } </h1> */}
            <button onClick={dec}> Decrease </button>
        </div>
    )
}

export default Decrease;