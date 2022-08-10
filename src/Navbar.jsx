import React from "react";
import { NavLink } from "react-router-dom/";
function Navbar()
{
    return(
        <>
             <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">HOME</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/news">NEWS</NavLink>
                </li>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;