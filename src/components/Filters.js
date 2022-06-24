import React from "react";

function Filters({ filteredPet, onFilterChange }) {
  function handleChange(e) {
    onFilterChange(e.target.value);
  }

  return (
    <div>
        <label htmlFor="filter">Filter By Pet Type: </label>
      <select name="filter" value={filteredPet} onChange={handleChange}>
        <option value="">All</option>
        <option value="dog">Dogs</option>
        <option value="cat">Cats</option>
      </select>
    </div>
  );
}

export default Filters;
