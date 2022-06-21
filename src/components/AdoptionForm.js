import React, { useState } from "react";

function AdoptionForm({ onAdoptionFormSubmit }) {
  const [adoptionForm, setAdoptionForm] = useState({
    first: "",
    last: "",
    address: "",
  });

  const { first, last, address } = adoptionForm;

  function handleSubmit(e) {
    e.preventDefault();
    onAdoptionFormSubmit();
  }

  function handleChange(e) {
    const target = e.target.name;
    const value = e.target.value;

    setAdoptionForm({ ...adoptionForm, [target]: value });
  }

  return (
    <main>
      <div className="content">
        <h2>Please fill this form to get approved to adopt a pet!</h2>
        <form id="adoption-form" onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input
            type="text"
            name="first"
            required
            value={first}
            onChange={handleChange}
          ></input>

          <label>Last Name:</label>
          <input
            type="text"
            name="last"
            required
            value={last}
            onChange={handleChange}
          ></input>

          <label>Address:</label>
          <input
            type="text"
            name="address"
            required
            value={address}
            onChange={handleChange}
          ></input>

          <input type="submit"></input>
        </form>
      </div>
    </main>
  );
}

export default AdoptionForm;
