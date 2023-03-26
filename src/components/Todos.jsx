import React, { useEffect, useState } from 'react';
import { useParams , Link } from 'react-router-dom';

function Todos() {

    const [todos, setTodos] = useState([]);
   let countTrue = 0;
   let countFalse = 0;

    let {id,name} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
        .then((response) => {return response.json()})
        .then((data) =>{setTodos(data);})
        .catch((error) => {console.log(error);})
    },[])

    for(let  i= 0 ; i < todos.length ; i++)
    {
        if(todos[i].completed == true)
        {
            countTrue++
        }
        if(todos[i].completed == false)
        {
            countFalse++
        }
    }
  return (
    <div className='todolist'>
         <h1 align="center">Welcome {name}</h1>

         <p align='center'>`The Below Table List Of Your todos And Its Status. You Have Completed {countTrue} And {countFalse} Is Pending.`</p>
        
        <table align='center' border="1px">
            <thead>
                <tr>
                    <th>user ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {
                  todos.map((todo) => {
                    return (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{String(todo.completed)}</td>
                            <td><Link to = {`todoDetails${todo.id}`}>Click here</Link></td>
                        </tr>
                    )
                  })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Todos