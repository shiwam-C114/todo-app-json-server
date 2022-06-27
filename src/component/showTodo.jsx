import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ShowTodo() {
    const [todos, setTodos] = useState([])
    const [pageNos, setPageNos] = useState([])
    const [liNos] = useState(2)
    const [i, setI] = useState(0)

    async function getTodo() {
        let res = await axios.get("http://localhost:5000/todo")
        console.log(res);
        setTodos(res.data)
    }

    function createPgNos() {
        let arr = []
        for (let index = 0; index < todos.length/liNos; index++) {
          arr.push(index)
        }
        setPageNos(arr)
        console.log(arr);
    }
    useEffect(() => {
     getTodo()
    }, [])
    useEffect(() => {
     createPgNos() 
    }, [todos])
    
    
  return (
    <div>
        <div>
            {todos.slice(0+(i*liNos), liNos+(liNos*i)).map((todo,ind)=> <p key={todo.id}>{`${ind+1}: ${todo.work}`}</p> )}
        </div>

        <div>
            <ul>
            {pageNos.map((n)=> <button onClick={()=>{setI(n)}}> {n+1} </button> )}
            </ul>
        </div>
        <button onClick={getTodo}>refresh</button>
    </div>
  )
}

export default ShowTodo