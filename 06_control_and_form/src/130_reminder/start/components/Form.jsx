import { useState } from 'react';

function Form() {
    const [enteredTodo, setEnteredTodo ] = useState("");
    const addTodo = (e) => {
        const inputVal = e.target.value;
        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: inputVal,
        };
    }
  return (
    <div>
        <input type="text" 
        value={enteredTodo}
        onChange={(e) => setEnteredTodo(e.target.value)}/>
        <button onClick={addTodo}>追加</button>
        <span>{enteredTodo}</span>
    </div>
    
    
  )
}

export default Form