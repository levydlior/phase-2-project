import React from "react";
import PetCard from "./PetCard";
import CircularProgress from "@material-ui/core/CircularProgress";

function PetsList({ puppies, isLoaded }) {

  const puppiesItems = puppies.map((puppy) => <PetCard key={puppy.id} puppy={puppy} isLoaded={isLoaded}/>);

  function CircularUnderLoad() {
    return <CircularProgress disableShrink />;
  }

  return (
    <main>
      <div className="content">
        {puppiesItems}
      </div>
    </main>
  );

  }
export default PetsList;
