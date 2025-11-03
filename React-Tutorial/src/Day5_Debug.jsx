import React, { useState } from 'react';

function App() {
  const [person, setPerson] = useState({ name: 'John', age: 25 });

  const handleClick = () => {
    setPerson({ ...person, age: person.age + 1 });
    console.log(person);
  };

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={handleClick}>Increase Age</button>
    </div>
  );
}

export default App;