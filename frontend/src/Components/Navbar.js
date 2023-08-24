import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { loggedInContext } from "../app";



function Navbar() {
    const { loggedIn, setLoggedIn } = useContext(loggedInContext);
    console.log(loggedIn)
    const handleSignOut = () => {
        
        localStorage.removeItem('token');

    };
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const token = localStorage.getItem('token');
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo">
                            Inventory Management System
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <div className="nav-item1">
                                {loggedIn ? (
                                    <>
                                        <li className="nav-item">
                                            <NavLink
                                                to="/home"
                                                className={({ isActive }) =>
                                                    "nav-links" + (isActive ? " activated" : "")
                                                }
                                                onClick={closeMobileMenu}
                                            >
                                                Home
                                            </NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink
                                                to="/"
                                                className={({ isActive }) =>
                                                    "nav-links" + (isActive ? " activated" : "")
                                                }
                                                onClick={handleSignOut}
                                            >
                                                Sign Out
                                            </NavLink>
                                        </li>
                                    </>

                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <NavLink
                                                to="/"
                                                className={({ isActive }) =>
                                                    "nav-links" + (isActive ? " activated" : "")
                                                }
                                            >
                                                SignIn
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                to="/signup"
                                                className={({ isActive }) =>
                                                    "nav-links" + (isActive ? " activated" : "")
                                                }
                                            >
                                                SignUp
                                            </NavLink>
                                        </li>
                                    </>

                                )}


                            </div>

                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;

