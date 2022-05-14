import { useState } from 'react';

export const ControlledForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState('#000000');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Controlled Form Submitted');
    console.log(name);
    console.log(age);
    console.log(hairColor);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input name="age" type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <input name="hairColor" type="color" placeholder="Hair Color" value={hairColor} onChange={(e) => setHairColor(e.target.value)} />
      <input type='submit' value='Submit' />
    </form>
  );
}
