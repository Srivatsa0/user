import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Albums() {

    const [albums, setAlbums] = useState([]);

    let {id,name} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
        .then((response) => {return response.json()})
        .then((data) => {setAlbums(data);})
        .catch((error) => {console.log(error);})
    },[])

    let count = albums.length ;
   
  return (
    <div>
         <h1 align="center">Welcome {name}</h1>
         <p align='center'>hey You Got {count} Items In Your Album</p>
         <table align='center' border='1px' >
            <thead>
                <tr>
                    <th>user Id</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
            {
            albums.map((album) => {
                return (
                    <tr key={album.id}>
                        <td> {album.id}</td>
                        <td> {album.title}</td>
                    </tr>
                )
            })
        }
            </tbody>
         </table>
       
    </div>
  )
}

export default Albums