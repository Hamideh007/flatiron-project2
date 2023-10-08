import React from "react";
import { Link, useNavigate } from "react-router-dom";

function OrchidCollection({ orchids, setIsEditing, isEditing }) {
  const navigate = useNavigate();

  return (
    <div className="orchid-container">
      <h2>My Orchid Collection</h2>
      <ul className="orchid-list">
        {orchids.map((orchid) => (
          <li key={orchid.id}>
            <Link
              to={`/orchidcollection/${orchid.id}`}
              onClick={() => {
                setIsEditing(false);
                navigate(`/orchidcollection/${orchid.id}`);
              }}
            >
              <div className="orchid-icon">
                <img src={orchid.image} alt={orchid.name} />
              </div>
            </Link>
            <h5>{orchid.name}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrchidCollection;

