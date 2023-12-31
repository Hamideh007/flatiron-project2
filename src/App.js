
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import OrchidDetails from "./components/OrchidDetails"; 
import About from "./components/About";
import OrchidCollection from "./components/OrchidCollection"; 
import OrchidForm from "./components/OrchidForm"; 
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";
import FAQs from "./components/FAQs";
import "./index.css";


function App() {
  const [orchids, setOrchids] = useState([]); 
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch("https://moviefinder-fql5.onrender.com/orchids")
      .then((r) => r.json())
      .then((data) => setOrchids(data));
  }, []);

  function addNewOrchid(newOrchid) {
    setOrchids([...orchids, newOrchid]);
  }

  function handleOrchidDelete(id) {
    const orchidsToDisplay = orchids.filter((orchid) => id !== orchid.id);
    setOrchids(orchidsToDisplay);
  }

  function handleUpdateOrchid(updatedPlant) {
    const updatedOrchids = orchids.map((orchid) => {
      if (orchid.id === updatedPlant.id) {
        return updatedPlant;
      } else {
        return orchid;
      }
    });
    setOrchids(updatedOrchids);
  }

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          exact
          path="/orchidcollection/"
          element={
            <OrchidCollection 
              orchids={orchids} 
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          }
        ></Route>
        <Route path="/about" element={<About />}>
          <Route path="/about/contactme" element={<ContactMe />} />
          <Route path="/about/FAQs" element={<FAQs />} />
        </Route>
        <Route
          path="/addorchid" 
          element={<OrchidForm addNewOrchid={addNewOrchid} />} 
        />
        <Route
          path={"/orchidcollection/:id"} 
          element={
            <OrchidDetails 
              orchids={orchids} 
              handleOrchidDelete={handleOrchidDelete} 
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              handleUpdateOrchid={handleUpdateOrchid} 
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
