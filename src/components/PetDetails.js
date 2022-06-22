import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";

function PetDetails({ canAdopt, onLikePet }) {
  const { id } = useParams();
  const [pet, setPet] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  function CircularUnderLoad() {
    return <CircularProgress disableShrink />;
  }

  useEffect(() => {
    fetch(`http://localhost:3001/pets/${id}`)
      .then((r) => r.json())
      .then((pet) => {
        setPet(pet);
        setIsLoaded(true);
      });
  }, [id]);

  function handleClick() {
    fetch(`http://localhost:3001/pets/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify({ like: !pet.like }),
    })
      .then((r) => r.json())
      .then((updatedPet) => {
        setPet(updatedPet);
        onLikePet(updatedPet)
      });
  }

  const details = () => {
    return (
      <div id="pet-details">
        <img id="pet-details-img" src={pet.image} alt={pet.breed} />
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
          <div id="heart-area">
              <p
                className={pet.like ? "liked" : "unliked"}
                onClick={handleClick}
              >
                ♥
              </p>
            </div>
            <Button
              variant="contained"
              color="secondary"
              disabled={!canAdopt ? true : false}
            >
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
