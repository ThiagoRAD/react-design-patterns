import { useEffect, useState } from 'react';

export const ControlledForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hairColor, setHairColor] = useState('#000000');
  const [nameError, setNameError] = useState('');

  useEffect(() => {
    name.length < 2 ? setNameError('Name must be at least 2 characters long') : setNameError('');
  }, [name]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Controlled Form Submitted');
    console.log(name);
    console.log(age);
    console.log(hairColor);
  };

  return (
    <form onSubmit={handleSubmit}>
      {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
      <input name="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input name="age" type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <input name="hairColor" type="color" placeholder="Hair Color" value={hairColor} onChange={(e) => setHairColor(e.target.value)} />
      <input type='submit' value='Submit' />
    </form>
  );
}
