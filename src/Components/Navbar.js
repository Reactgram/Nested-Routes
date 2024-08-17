import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/"> Increase </NavLink>
            <NavLink to="/decrease"> Decrease </NavLink>
            <NavLink to="/reset"> Reset </NavLink>
        </div>
    )
}

export default Navbar;


{/* <NavLink to="/apple/increase"> Increase </NavLink>
<NavLink to="/apple/decrease"> Decrease </NavLink>
<NavLink to="/apple/reset"> Reset </NavLink> */}