import { useState, useEffect } from "react";

type TodoProps = {
  id: number;
  text: string;
};

const Todo = () => {
  const [inputValue, setInputvalue] = useState("");

  const [todos, setTodos] = useState<TodoProps[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? (JSON.parse(savedTodos) as TodoProps[]) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };

      setTodos([...todos, newTodo]);
      setInputvalue("");
    }
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={inputValue}
        onChange={(e) => setInputvalue(e.target.value)}
      />

      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}> {todo.id}-{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;