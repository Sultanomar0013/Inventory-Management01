import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import Route and Routes from the new package structure
import App from "./app";
import Home from "./routes/home";
import SignIn from "./routes/signin";
import SignUp from "./routes/signup";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
);

