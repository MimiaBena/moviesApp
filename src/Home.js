import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
const Home = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route
                         path="/" element={<App />}
                    />
                    <Route
                         path="*" element={<App />}
                    />
                </Routes>
            </Router>

        </div>
    );
};

export default Home;