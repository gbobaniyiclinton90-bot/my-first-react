
// Hook
// useState
// useEffect


import { useState } from "react"

const counter = () => {
    const [count, setCount] = useState<number>(0)


    const increment = () => {
  setCount(count + 1)
}

  return (
    <div>
        <h1>Counter App</h1>
        <p className={`text-2xl font-bold ${count > 0 ? 'text-green-500' : count < 0 ? 'text-red-500' : 'text-black' }`}>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={()=> setCount(count - 1)}>Decrement</button>
        <button onClick={()=> setCount(0)}>Reset</button>
      
    </div>
  )
}

export default counter
