import React from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

function petCard({ puppy, isLoaded }) {
  const { name, image, breed, id } = puppy;

  function CircularUnderLoad() {
    return <CircularProgress disableShrink />;
  }

  function loadginCards() {
    if (isLoaded) {
      return (
        <Link exact to={`/pets-list/${id}`}>
          <div className="puppy-card">
            <h2>{name}</h2>
            <img src={image} alt={breed} />
          </div>
        </Link>
      );
    } else {
      return <div className="puppy-card">{CircularUnderLoad()}</div>;
    }
  }

  return loadginCards();
}

export default petCard;
