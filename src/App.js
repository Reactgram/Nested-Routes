import React from "react";
import Increase from "./Components/Increase";
import Decrease from "./Components/Decrease";
import Reset from "./Components/Reset";
import Navbar from "./Components/Navbar";
import DisplayCount from "./Components/DisplayCount";
import Invalid from "./Components/Invalid";

import { Routes, Route } from "react-router-dom";

import "./App.css"

const App = () => {


    return (
        <div>

            <Navbar />
            {/* <h1> Counter App </h1> */}
             

            <Routes>
                <Route path="/" element={<DisplayCount />}> 
                     {/* /apple/increase */}
                    <Route path="" element={<Increase />} />
                    <Route path="decrease" element={<Decrease />} />
                    <Route path="reset" element={<Reset />} />
                    
                </Route>

                    
                
                <Route path="*" element={<Invalid />} />
            </Routes>
        </div>
    )
}

export default App;


// {/* <Route path="/apple" element={<DisplayCount />}> 
// {/* /apple/increase */}
// <Route path="increase" element={<Increase />} />
// <Route path="decrease" element={<Decrease />} />
// <Route path="reset" element={<Reset />} />

// </Route> */}