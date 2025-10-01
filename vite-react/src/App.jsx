import { Component, useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "밥먹기" },
    { id: 1, content: "코딩 공부하기" },
  ]);
  return (
    <>
      <TodoList todoList={todoList} />
    </>
  );
}

function TodoList({ todoList }) {
  <ul>
    {todoList.map((todo) => (
      <li key={todo.id}>{todo.content}</li>
    ))}
  </ul>;
}

export default App;
