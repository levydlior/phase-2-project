import React from "react";
import { Link } from "react-router-dom";
import PetCard from "./PetCard";
import CircularProgress from "@material-ui/core/CircularProgress";

function PetsList({ puppies, isLoaded }) {

  const puppiesItems = puppies.map((puppy) => <PetCard key={puppy.id} puppy={puppy}/>);
  return(
      <div className="content">{puppiesItems}</div> 
  )
};


  return (
    <main>
      <div className="content">
        {isLoaded ? puppiesItems() : CircularUnderLoad()}
      </div>
    </main>
  );
}

export default PetsList;
