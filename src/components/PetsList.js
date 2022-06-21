import React from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

function PetsList({ puppies, isLoaded }) {
  function CircularUnderLoad() {
    return <CircularProgress disableShrink />;
  }

  const puppiesItems = puppies.map((puppy) => {
    return (
      <Link
        exact
        to={`/pets-list/${puppy.id}`}
        className="puppy-card"
        key={puppy.id}
      >
        <h2>{puppy.name}</h2>
        <img src={puppy.image} alt={puppy.breed} />
      </Link>
    );
  });

  return (
    <div>
      <main>
        <div id="content">{isLoaded ? puppiesItems : CircularUnderLoad()}</div>
      </main>
    </div>
  );
}

export default PetsList;
