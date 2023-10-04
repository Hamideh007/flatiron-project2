import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function OrchidDetails({
  orchidProp, // Rename the prop to avoid conflicts
  handleOrchidDelete,
  isEditing,
  setIsEditing,
  handleUpdateOrchid,
}) {
  const { id } = useParams();
  const [orchid, setOrchid] = useState({
    name: "",
    image: "",
    family: "",
    genus: "",
    color: "",
    bloomingSeason: "",
    origin: "",
  });

  const [editName, setEditName] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editFamily, setEditFamily] = useState("");
  const [editGenus, setEditGenus] = useState("");
  const [editColor, setEditColor] = useState("");
  const [editBloomingSeason, setEditBloomingSeason] = useState("");
  const [editOrigin, setEditOrigin] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an API request to fetch the individual orchid data based on the ID
    fetch(`https://moviefinder-fql5.onrender.com/orchids${id}`)
      .then((response) => response.json())
      .then((data) => {
        setOrchid(data);
        setEditName(data.name);
        setEditImage(data.image);
        setEditFamily(data.family);
        setEditGenus(data.genus);
        setEditColor(data.color);
        setEditBloomingSeason(data.bloomingSeason);
        setEditOrigin(data.origin);
        setLoading(false);
      });
  }, [id]);

  function handleClick() {
    fetch(`https://moviefinder-fql5.onrender.com/orchids${orchid.id}`, {
      method: "DELETE",
    })
      .then(() => {
        handleOrchidDelete(orchid.id);
      })
      .catch((error) => {
        console.error("Error deleting orchid:", error);
      });
  }

  const editedOrchid = {
    name: editName,
    image: editImage,
    family: editFamily,
    genus: editGenus,
    color: editColor,
    bloomingSeason: editBloomingSeason,
    origin: editOrigin,
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://moviefinder-fql5.onrender.com/orchids${orchid.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedOrchid),
    })
      .then((r) => r.json())
      .then((updatedOrchid) => handleUpdateOrchid(updatedOrchid));
    setIsEditing((prevState) => !prevState);
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">
      {isEditing ? (
        <div className="editMenu">
          <button
            className="collapse"
            onClick={() => setIsEditing((prevState) => !prevState)}
          >
            <h5>
              Cancel Edit <i className="fa-solid fa-circle-xmark"></i>
            </h5>
          </button>
          <img src={orchid.image} alt="orchid" />
          <form onSubmit={handleSubmit}>
            {/* Input fields for editing orchid properties */}
          </form>
          {/* Submit button for saving changes */}
        </div>
      ) : (
        <div className="orchidCard">
          <Link to="/orchidcollection/">
            <h5>
              Collapse Details <i className="fa-solid fa-circle-xmark"></i>
            </h5>
          </Link>
          <div className="details-image">
            <img src={orchid?.image} alt="orchid" />
            <div className="button-wrapper">
              <button
                className="edit-button"
                onClick={() => setIsEditing((prevState) => !prevState)}
              >
                Edit
              </button>
              <button className="delete-button" onClick={handleClick}>
                Delete
              </button>
            </div>
          </div>
          <div className="about-info">
            <h3>{orchid?.name}</h3>
            {/* Display orchid properties in non-editing state */}
          </div>
        </div>
      )}
    </div>
  );
}

export default OrchidDetails;
