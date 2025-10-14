import { useState } from 'react';

export default function StateImmutability() {
  const [array, setArray] = useState([1, 2, 3]);

  const handler = () => {
    const newArray = array.slice();
    // const newArray = [...array];
    console.log(newArray);
    newArray.push(5);
    setArray(newArray);
  };

  return (
    <>
      array : [{array.join(", ")}]
      <br />
      <button onClick={handler}>상태 업데이트!</button>
    </>
  );
}
