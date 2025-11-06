import { useState } from "react";
import "./App.css";

/*
1. 수정 버튼을 클릭한 경우에만 `input`이 보이도록 코드를 작성해보세요.
2. 할일 완료상태를 체크할 수 있는 요소를 추가해보세요.
3. Todo 앱의 제목을 표시하는 헤더를 추가해보세요.
4. 작성된 Todo-App의 레이아웃을 정렬해보세요. (flex/grid 권장)
5. 수정/추가/삭제 버튼을 디자인 해보세요.
6. 자유롭게 적용해보고 싶은 CSS를 작성해보세요.
*/
function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "대파 한 단 사오기" },
    { id: 1, content: "코딩 공부하기" },
    { id: 2, content: "카드 만들기" },
  ]);

  return (
    <div className="container">
      <h1>TodoList</h1>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        className="add_btn"
        onClick={() => {
          const newTodo = { id: Number(new Date()), content: inputValue };
          const newTodoList = [...todoList, newTodo];
          setTodoList(newTodoList);
          setInputValue("");
        }}
      >
        추가하기
      </button>
    </>
  );
}

function TodoList({ todoList, setTodoList }) {
  return (
    <ul className="todo-container">
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
      ))}
    </ul>
  );
}

function Todo({ todo, setTodoList }) {
  const [inputValue, setInputValue] = useState(todo.content);
  const [edit, setEdit] = useState(false);
  return (
    <li className="todo-list">
      <div className="todo">
        <input type="checkbox" id="check1" />
        {!edit && <span>{todo.content}</span>}
        {edit && (
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        )}
      </div>
      <div>
        <button
          className="edit_btn"
          onClick={() => {
            setTodoList((prev) =>
              prev.map((el) =>
                el.id === todo.id ? { ...el, content: inputValue } : el
              )
            );

            setEdit(!edit);
          }}
        >
          {edit ? "저장" : "수정"}
        </button>
        <button
          onClick={() => {
            setTodoList((prev) => {
              return prev.filter((el) => el.id !== todo.id);
            });
          }}
        >
          삭제
        </button>
      </div>
    </li>
  );
}

export default App;