import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrchidForm({ addNewOrchid }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [family, setFamily] = useState("");
  const [genus, setGenus] = useState("");
  const [color, setColor] = useState("");
  const [bloomingSeason, setBloomingSeason] = useState("");
  const [origin, setOrigin] = useState("");

  const newOrchid = {
    name: name,
    image: image,
    family: family,
    genus: genus,
    color: color,
    bloomingSeason: bloomingSeason,
    origin: origin,
  };

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://moviefinder-fql5.onrender.com/orchids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrchid),
    })
      .then((r) => r.json())
      .then((newItem) => {
        addNewOrchid(newItem);
        setName("");
        setImage("");
        setFamily("");
        setGenus("");
        setColor("");
        setBloomingSeason("");
        setOrigin("");
        navigate("/orchidcollection");
      });
  }

  return (
    <div className="orchid-form">
      <h2>Add a new Orchid to my collection!</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="name"
          value={name}
          placeholder="Orchid name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          type="text"
          name="image"
          value={image}
          placeholder="Image"
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          name="family"
          value={family}
          placeholder="Family"
          onChange={(e) => setFamily(e.target.value)}
        />
        <input
          type="text"
          name="genus"
          value={genus}
          placeholder="Genus + Species"
          onChange={(e) => setGenus(e.target.value)}
        />
        <input
          type="text"
          name="color"
          value={color}
          placeholder="Color"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          name="bloomingSeason"
          value={bloomingSeason}
          placeholder="Blooming Season"
          onChange={(e) => setBloomingSeason(e.target.value)}
        />
        <input
          type="text"
          name="origin"
          value={origin}
          placeholder="Origin"
          onChange={(e) => setOrigin(e.target.value)}
        />
        <button type="submit">Add Orchid</button>
      </form>
    </div>
  );
}

export default OrchidForm;
