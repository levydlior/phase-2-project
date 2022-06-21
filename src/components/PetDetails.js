import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";

function PetDetails() {
  const { id } = useParams();
  const [pet, setState] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  function CircularUnderLoad() {
    return <CircularProgress disableShrink />;
  }

  useEffect(() => {
    fetch(`http://localhost:3001/pets/${id}`)
      .then((r) => r.json())
      .then((pet) => {
        setState(pet);
        setIsLoaded(true);
      });
  }, [id]);

  const details = () => {
    return (
      <div id="pet-details">
        <img id='pet-details-img'src={pet.image} alt={pet.breed} />
        <section id="button-text">
        <section>
        <h2>Name: {pet.name}</h2>
        <p>
          <b>Breed: </b> {pet.breed}
        </p>
        <p>
          <b>Sex: </b> {pet.breed === "male" ? "male ♂" : "female ♀"}
        </p>
        </section>
        <div id="adopt-button">
        <Button variant="contained" color="secondary">
          Adopt!
        </Button>
        </div>
        </section>
      </div>
      
    );
  };

  return (
    <main>
      <div className="pet-details-content">
        {!isLoaded ? CircularUnderLoad() : details()}
      </div>
    </main>
  );
}

export default PetDetails;
