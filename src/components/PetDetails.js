import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";

function PetDetails({ canAdopt, onLikePet, onDeletePet }) {
  const { id } = useParams();
  const [pet, setPet] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [gotAdopted, setGotAdopted] = useState(false);

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

  function handleDelete() {
    fetch(`http://localhost:3001/pets/${id}`, {
      method: "DELETE",
    }).then(() => {
      onDeletePet(id);
      setGotAdopted(true);
    });
  }

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
        onLikePet(updatedPet);
      });
  }

  const AdoptedDetails = () => {
    return (
      <>
        <section id="button-text">
          <section id="pet-details-content">
            <h3>Name: {pet.name}</h3>
            <p>
              <b>Breed: </b> {pet.breed}
            </p>
            <p>
              <b>Sex: </b> {pet.breed === "male" ? "male ♂" : "female ♀"}
            </p>
          </section>

          <div id="adopt-button-area">
            <div id="heart-area">
              <p
                className={pet.like ? "liked" : "unliked"}
                onClick={handleClick}
              >
                ♥
              </p>
            </div>
            <Button
              id="adopt-button"
              variant="contained"
              color="secondary"
              disabled={!canAdopt ? true : false}
              onClick={handleDelete}
            >
              Adopt!
            </Button>
          </div>
        </section>
        {canAdopt ? null : (
          <h4> To adopt - please fill out our "Apply For Adoption" form! </h4>
        )}
      </>
    );
  };

  const details = () => {
    return (
      <div id="pet-details">
        <img id="pet-details-img" src={pet.image} alt={pet.breed} />
        {!gotAdopted ? (
          <AdoptedDetails />
        ) : (
          <h2>Enjoy your new furry buddy, {pet.name}!</h2>
        )}
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
