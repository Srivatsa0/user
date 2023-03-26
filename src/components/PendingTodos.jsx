import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CompletedTodo() {

  const [todos, setTodos] = useState([])

  let pending = [];
  
  let count = 0;

  let {id,name} = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos/`)
    .then((Response) => {return Response.json()})
    .then((data) => {
      setTodos(data)
    })
    .catch((error) => {console.log(error);})
  },[])

  for(let i = 0 ; i < todos.length ; i++)
  {
    if(todos[i].completed == false)
    {
      pending.push(todos[i]);
      count++;
    }
  }

  return (
    <div>
      <h1 align='center'>Welcome {name}</h1>
      <p align='center'>You Have {count} Pending Todos That Yet To Be Completed.</p>
        <table border='1px ' align='center'>
          <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Status</th>
            </tr>
          </thead>
          <tbody>
           {
            pending.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{String(todo.completed)}</td>
                </tr>
              )
            })
           }
          </tbody>
        </table>
    </div>
  )
}

export default CompletedTodo