import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function OrchidDetails({
  orchids, // Assuming this is your array of orchids
  handleOrchidDelete, // Your delete function for orchids
  isEditing,
  setIsEditing,
  handleUpdateOrchid, // Your update function for orchids
}) {
  const { id } = useParams();
  const [orchid, setOrchid] = useState({
    name: "",
    image: "",
    family: "",
    genus: "",
    size: "",
  });

  const [editName, setEditName] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editFamily, setEditFamily] = useState("");
  const [editGenus, setEditGenus] = useState("");
  const [editSize, setEditSize] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an API request to fetch the individual orchid data based on the ID
    fetch(`http://localhost:3002`)
      .then((response) => response.json())
      .then((data) => {
        setOrchid(data);
        setEditName(data.name);
        setEditImage(data.image);
        setEditFamily(data.family);
        setEditGenus(data.genus);
        setEditSize(data.size);
        setLoading(false);
      });
  }, [id]);
}
export default OrchidDetails;
