
import React, { useState } from 'react'
const axios = require('axios').default;
function TodoInput() {
    const [todo, setTodo] = useState('')

    const handleClick = async () => {
       axios.post(`http://localhost:5000/todo`, {work:todo}).then(console.log); 
        
    }
    
  return (
    <div>
        <label htmlFor="">todo: </label>
        <input type="text" name="" id="" onChange={(e)=>{setTodo(e.target.value)}} />
        
        <button onClick={handleClick}>save</button>
    </div>
  )
}

export default TodoInput