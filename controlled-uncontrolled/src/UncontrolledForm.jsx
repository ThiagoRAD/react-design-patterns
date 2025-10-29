import React from 'react'

export const UncontrolledForm = () => {

  const nameInput = React.createRef()
  const ageInput = React.createRef()
  const hairColorInput = React.createRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Uncontrolled Form Submitted')
    console.log(nameInput.current.value)
    console.log(ageInput.current.value)
    console.log(hairColorInput.current.value)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' type='text' placeholder='Name' ref={nameInput} />
      <input name='age' type='number' placeholder='Age' ref={ageInput} />
      <input name='hairColor' type='color' placeholder='Hair Color' ref={hairColorInput} />
      <input type='submit' value='Submit' />
    </form>
  );
};
