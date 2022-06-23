import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

function AdoptionForm({ onAdoptionFormSubmit }) {
  const [adoptionForm, setAdoptionForm] = useState({
    first: "",
    last: "",
    address: "",
  });

  const [submited, setSubmited] = useState(false);
  const history = useHistory();

  const { first, last, address } = adoptionForm;

  function handleSubmit(e) {
    e.preventDefault();
    onAdoptionFormSubmit();
    setSubmited(true);
    setTimeout(() => {
      history.push("/");
    }, 1500);
  }

  function handleChange(e) {
    const target = e.target.name;
    const value = e.target.value;

    setAdoptionForm({ ...adoptionForm, [target]: value });
  }

  function CircularUnderLoad() {
    return <CircularProgress disableShrink />;
  }

  function formDetails() {
    return (
      <>
        <h2>Please fill this form to get approved to adopt a pet!</h2>
        <form id="adoption-form" onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input
            type="text"
            name="first"
            required
            value={first}
            onChange={handleChange}
          />

          <label>Last Name:</label>
          <input
            type="text"
            name="last"
            required
            value={last}
            onChange={handleChange}
          />

          <label>Address:</label>
          <input
            type="text"
            name="address"
            required
            value={address}
            onChange={handleChange}
          />

          <button type="submit" id="adopt-button">
            Submit
          </button>
        </form>
      </>
    );
  }

  return (
    <main>
      <div className="content">
        {!submited ? (
          formDetails()
        ) : (
          <h2>Form accepted - redirecting! {CircularUnderLoad()} </h2>
        )}
      </div>
    </main>
  );
}

export default AdoptionForm;
