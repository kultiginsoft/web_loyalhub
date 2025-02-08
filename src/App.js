import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./app/views/home/Home";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );
};

export default App;
