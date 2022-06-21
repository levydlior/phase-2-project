import { useState } from 'react'

function Form ({ onPetSubmit }) {

  const [ newPetForm, setNewPetForm ] = useState({
    name: '',
    breed: '',
    sex: '',
    type: '',
    image: ''
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
  };

  function handleChange (e) {
    const target = e.target.name
    const value = e.target.value

    setNewPetForm({ ...newPetForm, [ target ]: value })

  }

  return (
    <main>
      <p>Submit Pet For Adoption</p>
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
      </div>
    </main>
  )
}

export default Form;