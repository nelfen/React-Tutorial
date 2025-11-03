import { useEffect, useState } from "react";
import "./App.css";

export default function LifecycleImportant() {
  const [data, setData] = useState([]);

  //json-server --watch db.json
  useEffect(() => {
  }, []); 

  fetch("http://localhost:3000/data")
  .then((res) => res.json())
  .then((res) => setData(res));
  
  return (
    <>
      <div>데이터 목록</div>
      {data.map((el) => (
        <div key={el.id}>{el.content}</div>
      ))}
    </>
  );
}