import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TodoDetails() {

    const [todo, setTodo] = useState();

    let {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => {return response.json()})
        .then((data) => {setTodo(data)})
        .catch((error) => {console.log(error);})
    },[])
  return (
    <div>
        {
            todo && 
            <table border='1px' align="center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{String(todo.completed)}</td>
                    </tr>
                </tbody>
            </table>
        }
    </div>
  )
}

export default TodoDetails