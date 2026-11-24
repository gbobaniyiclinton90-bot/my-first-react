import { useState } from "react";


type TodoProps = {
    id: number;
    text: string;
}

const Todo = () => {
   const [inputValue,setInputvalue] = useState('')

   const [todos,setTodos] = useState<TodoProps[]>([])

   const addTodo=() => {
    if(inputValue.trim() !== ''){
        const newTodo: TodoProps = {
            id: Date.now(),
            text: inputValue,
        }
        setTodos([...todos,newTodo])
        setInputvalue('')
    }

}

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text"
       placeholder="Enter Task" 
       value={inputValue}
       onChange={(e)=>setInputvalue(e.target.value)}
      />
      <button onClick={addTodo}> addTodo</button>
    </div>
  )
}

export default Todo
