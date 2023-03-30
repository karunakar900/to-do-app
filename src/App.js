
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signupcomponent";
import Login from "./components/logincomponent";



function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Signup />} />
                </Routes>
            </BrowserRouter>

        </>
    )

}

export default App;