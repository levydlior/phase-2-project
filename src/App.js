import React, { useEffect, useState } from "react";

function App() {
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pets")
      .then((r) => r.json())
      .then((puppies) => setPuppies(puppies));
  }, []);

  console.log(puppies);

  const puppiesItems = puppies.map((puppy) => {
    return (
      <div key={puppy.id}>
        <h2>{puppy.name}</h2>
        <img src={puppy.image} alt={puppy.breed} />
      </div>
    );
  });

  return <div>
    {puppiesItems}
  </div>;
}

export default App;
