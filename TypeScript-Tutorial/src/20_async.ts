interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

async function fetchTodo(id: number): Promise<Todo> {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    id: id,
    title: "타입스크립트 공부하기",
    completed: false,
  };
}

async function main() {
  console.log("데이터 불러오는 중...");
  
  try {
    const todo = await fetchTodo(1);
    console.log(`도착한 할 일: ${todo.title}`);
  } catch (error) {
    console.log("실패!");
  }
}

main();