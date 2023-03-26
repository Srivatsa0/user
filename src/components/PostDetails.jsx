import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetails() {

    const [post, setPost] = useState();

    let {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {return response.json()})
        .then((data) => {setPost(data);})
        .catch((error ) => {console.log(error);}) 
    },[])

  return (
    <div>
        {
            post && 
            <table border='1px'align='center'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>
                            {post.body}
                        </td>
                    </tr>
                </tbody>
            </table>
        }
    </div>
  )
}

export default PostDetails