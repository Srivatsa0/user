import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CommentDetails() {

    const [comments, setComments] = useState([])

    let {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then((Response) => {return Response.json()})
        .then((data) => {setComments(data)})
        .catch((error) => {console.log(error);})
    },[])

  return (
    <div>
        {
            comments && 
           <table border='1px' align="center">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{comments.id}</td>
                    <td>{comments.name}</td>
                    <td>{comments.email}</td>
                    <td>{comments.body}</td>
                </tr>
            </tbody>
           </table>
        }
    </div>
  )
}

export default CommentDetails