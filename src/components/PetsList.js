import React, { useState } from "react";
import PetCard from "./PetCard";
import Filters from "./Filters";

function PetsList({ puppies, isLoaded }) {
  const [filteredPet, setFilteredPet] = useState("");

  function handleFilterChange(val) {
    setFilteredPet(val);
  }

  const filterPetsByType = puppies.filter((pet) =>
    pet.type.includes(filteredPet)
  );

  const puppiesItems = filterPetsByType.map((puppy) => (
    <PetCard key={puppy.id} puppy={puppy} isLoaded={isLoaded} />
  ));

  return (
    <main>
      <Filters filteredPet={filteredPet} onFilterChange={handleFilterChange} />
      <div className="content">{puppiesItems}</div>
    </main>
  );
}
export default PetsList;
