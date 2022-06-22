import React from "react";
import PetCard from "./PetCard";

function PetsList({ puppies, isLoaded }) {
  const puppiesItems = puppies.map((puppy) => (
    <PetCard key={puppy.id} puppy={puppy} isLoaded={isLoaded} />
  ));

  return (
    <main>
      <div className="content">{puppiesItems}</div>
    </main>
  );
}
export default PetsList;
