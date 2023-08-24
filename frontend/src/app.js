import React, { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import SignIn from "./routes/signin";


export const loggedInContext = createContext();
function App() {
    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            if (token) {
                setLoading(true);
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
            setLoading(false);
        };
        fetchData();
    }, [token]);

    console.log(loggedIn)
    return (
        <>
            <loggedInContext.Provider value={{ loggedIn, setLoggedIn }}>

                <Navbar  />
                <SignIn  />
                <Outlet />
                <Footer />
            </loggedInContext.Provider>
        </>
    );
};

export default App;
