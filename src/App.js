import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  const [puppies, setPuppies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3001/pets")
      .then((r) => r.json())
      .then((puppies) => {
        setIsLoaded(true)
        setPuppies(puppies)});
  }, []);

  function CircularUnderLoad() {
    return <CircularProgress disableShrink />;
  }

  const puppiesItems = puppies.map((puppy) => {
    return (
      <div key={puppy.id}>
        <h2>{puppy.name}</h2>
        <img src={puppy.image} alt={puppy.breed} />
      </div>
    );
  });

  return (
    <div>
      {/* <header>
          <nav>
            <NavLink to='here'>Home</NavLink>
            <NavLink to='here'>Home</NavLink>
            <NavLink to='here'>Home</NavLink>
          </nav>
        </header> */}
   
      {isLoaded? puppiesItems: CircularUnderLoad()}
    </div>
  );
}

export default App;
