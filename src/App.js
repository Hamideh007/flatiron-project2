import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import OrchidNavBar from "./components/OrchidNavBar"; 
import Home from "./components/Home";
import About from "./components/About";
import "./index.css";
function App() {
  return (
    <div>
      <OrchidNavBar /> {/* Use the new OrchidNavBar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </div>
  );
}

export default App;
