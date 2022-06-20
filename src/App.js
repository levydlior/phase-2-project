import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./styles/maincontent.css";
import PetsList from "./components/PetsList";
import { Route, Switch } from "react-router-dom";

function App() {
  const [puppies, setPuppies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pets")
      .then((r) => r.json())
      .then((puppies) => {
        setIsLoaded(true);
        setPuppies(puppies);
      });
  }, []);

  return (
    <div>
    <Header />
    <Switch>
      <Route path="/pets-list">
        <PetsList puppies={puppies} isLoaded={isLoaded} />
      </Route>
      <Route exact path="/">
       <h1>main Page</h1> 
      </Route>
      <Route path='*'>
        <h1>404 Page Not Found!</h1>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
