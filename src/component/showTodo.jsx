import axios from 'axios'
import React, { useState } from 'react'

function ShowTodo() {
    const [todos, setTodos] = useState([])
    async function getTodo() {
        let res = await axios.get("http://localhost:5000/todo")
        console.log(res);
        setTodos(res.data)
    }
  return (
    <div>
        <div>
            {todos.map((todo,ind)=> <p id={todo.id}>{`${ind+1}: ${todo.work}`}</p> )}
        </div>
        <button onClick={getTodo} >refresh</button>
    </div>
  )
}

export default ShowTodo