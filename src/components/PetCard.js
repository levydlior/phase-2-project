import React from "react";
import { Link } from "react-router-dom";



function petCard({puppy }){
    const {name,image, breed, id} = puppy

    return(
        <Link exact to ={`/pets-list/${id}`}>
            <div className="puppy-card">
                <h2>{name}</h2>
                <img src={image} alt={breed} />
            </div>
        </Link>
    );


};




export default petCard