import { useState } from "react";


type TodoProps = {
    id: number;
    text: string;
}

const Todo = () => {
   const [inputValue,setInputvalue] = useState('')

   const [todos,setTodos] = useState<TOdoProps[]>([])

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text"
       placeholder="Enter Task" 
       value={inputValue}
       onChange={(e)=>setInputvalue(e.target.value)}
      />
      <button> addTodo</button>
    </div>
  )
}

export default Todo
