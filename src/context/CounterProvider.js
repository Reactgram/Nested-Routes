import React, { useState } from "react";
import CounterContext from "./CounterContext";


const CounterProvider = (props) => {
    const [count, setCount] = useState(0)



    return (
        <CounterContext.Provider value={
            {
             count: count ,
            //  setCount:setCount,
            inc: ()=> setCount(count + 1),
            dec: ()=> setCount(count - 1),
            reset: ()=> setCount(0)
            }
            
            }>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterProvider;