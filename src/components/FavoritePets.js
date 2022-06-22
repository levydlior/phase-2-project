import React from "react";
import PetsList from "./PetsList";

function FavoritePets({ likedPets, isLoaded }) {
  function favoritePetsArray() {
    if (likedPets.length > 0) {
      return <PetsList puppies={likedPets} isLoaded={isLoaded} />;
    } else {
      return (
        <main>
          <div className="content">
            <h2> You don't have any favorite pets --  Go ahead and add some 🐶</h2>
          </div>
        </main>
      );
    }
  }

  return favoritePetsArray()
}
export default FavoritePets;
