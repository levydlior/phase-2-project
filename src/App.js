import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Header from './components/Header'

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
      <Header />
      {isLoaded? puppiesItems: CircularUnderLoad()}
    </div>
  );
}

export default App;
