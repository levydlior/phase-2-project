import { useState } from 'react'
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

function Form ({ onPetSubmit }) {
  const history = useHistory();
  const [ submitted, setSubmitted ] = useState(false);
  const [ newPetForm, setNewPetForm ] = useState({
    name: '',
    breed: '',
    sex: '',
    type: '',
    image: '',
    like: false
  })
  const { name, breed, sex, type, image } = newPetForm
  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3001/pets', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify(newPetForm)
    }).then(r => r.json())
      .then(newPet => {
        onPetSubmit(newPet)
        setNewPetForm({
          name: '',
          breed: '',
          sex: '',
          type: '',
          image: ''
        })
      })
    setSubmitted(true);
    setTimeout(() => {
      history.push("/");
    }, 2000);
  };

  function CircularUnderLoad () {
    return <CircularProgress disableShrink />;
  }

  function handleChange (e) {
    const target = e.target.name
    const value = e.target.value

    setNewPetForm({ ...newPetForm, [ target ]: value })

  }

  function formDetails () {
    return (
      <div className='content'>
        <form id="addForm" onSubmit={ handleSubmit }>
          <div className="form">
            <label htmlFor="name">Name:</label><br />
            <input type="text" name="name" value={ name } onChange={ handleChange } /><br />

            <label htmlFor="breed">Breed:</label><br />
            <input type="text" name="breed" value={ breed } onChange={ handleChange } /><br />

            <label htmlFor="image">Add Image:</label><br />
            <input type="text" name="image" value={ image } onChange={ handleChange } /><br />

            <label htmlFor="gender">Sex:</label><br />
            <input type="radio" name="sex" value="male" onChange={ handleChange } /> Male
            <input type="radio" name="sex" value="female" onChange={ handleChange } />Female<br />

            <label htmlFor="gender">Type:</label><br />
            <input type="radio" name="type" value="dog" onChange={ handleChange } /> Dog
            <input type="radio" name="type" value="cat" onChange={ handleChange } />Cat<br />

            <input type="submit" />
          </div>
        </form>

        <img src='http://tonygentilcore.com/wp-content/uploads/2018/11/sad-puppy.jpg' alt='Sad puppy' />
      </div>
    )
  }

  return (
    <main>{ !submitted ? (formDetails()) : (<h2> Your Pet Will Be Better Off! { CircularUnderLoad() } </h2>) }</main>
  )
}

export default Form;