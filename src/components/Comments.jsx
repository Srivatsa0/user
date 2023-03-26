import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';

function Comments()
{

const [comments, setcomments] = useState([]);

 let {id,name} = useParams();

useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/comments`)
    .then((response) => {return response.json()})
    .then((data) => {setcomments(data)})
    .catch((error) => {console.log(error);})
},[])

  return (
    <div>
         <h1 align="center">Welcome {name}</h1>
        <table border="1px" align='center'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>More</th>
                </tr>
            </thead>
            <tbody>
            {
            comments.map((comment) => {
                return (
                    <tr key={comment.id}>
                        <td>{comment.id}</td>
                        <td> {comment.name}</td>
                        <td>{comment.email}</td>
                        <td><Link to={`commentDetails${comment.id}`}>click here</Link></td>
                    </tr>
                )
            })
        }
            </tbody>
        </table>
    </div>
  )
}

export default Comments