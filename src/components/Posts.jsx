import React, {useState, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom';

function Posts() {

    const [post, setPost] = useState([]);

    let {id,name} = useParams();

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((response) => {return response.json()})
        .then((data) => {setPost(data);})
        .catch((error) => {console.log(error);})
    },[])

    
  return (
    
    <div>
       <h1 align="center">Welcome {name}</h1>
       <table border='1px' align='center'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>More</th>
            </tr>
        </thead>
        <tbody>
        {
            post.map((pos) =>{
                return (
                    <tr key={pos.id}>
                        <td> {pos.id}</td>
                        <td>{pos.title}</td>
                        <td><Link to={`postDetails${pos.id}`} >click here</Link></td>
                    </tr>
                )
            })
        }
        </tbody>
       </table>
    </div>
  )
}

export default Posts