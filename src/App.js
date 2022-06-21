import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./styles/maincontent.css";
import PetsList from "./components/PetsList";
import { Route, Switch } from "react-router-dom";
import PetDetails from "./components/PetDetails";
import Form from './components/Form';
import AdoptionForm from "./components/AdoptionForm";

function App() {
  const [puppies, setPuppies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [canAdopt, setCanAdopt] = useState(false);


  useEffect(() => {
    fetch("http://localhost:3001/pets")
      .then((r) => r.json())
      .then((puppies) => {
        setIsLoaded(true);
        setPuppies(puppies);
      });
  }, []);


  function handleSubmit (newPet) {
    const updatedPets = [ ...puppies, newPet ]
    setPuppies(updatedPets)
  }

  function handleAdoptionFormSubmit(){
    setCanAdopt(true)
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/surrender-pet">
          <Form onPetSubmit={ handleSubmit } />
        </Route>
        <Route exact path="/pets-list/:id">
          <PetDetails canAdopt={canAdopt} />
        </Route>
        <Route path="/add-pet">
          <h1>Form to add / edit</h1>
        </Route>
        <Route exact path="/adoption-form">
          <AdoptionForm onAdoptionFormSubmit={handleAdoptionFormSubmit} />
        </Route>
        <Route exact path="/">
          <PetsList puppies={ puppies } isLoaded={ isLoaded } />
        </Route>
        <Route path="*">
          <h1>404 Page Not Found!</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
