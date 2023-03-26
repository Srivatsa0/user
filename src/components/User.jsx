import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

function User() {

  let [users, setUsers] = useState([]);

  useEffect(() =>{

      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {return response.json();})
      .then((data) => { setUsers(data);})
      .catch((error) => {console.log("please wait for sometime");})

  },[])

  return (
    <div className='userlist'>
    <table border="1px" align='center'>
      <thead>
        <tr>
          <th>User Id</th>
          <th>Company Name</th>
          <th>Person Name</th>
          <th>Details</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
        
        users.map((user) =>{
          return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.company.name}</td>
                  <td>{user.name}</td>
                  <td>Name : {user.name}, <br />
                     Username : {user.username},
                    Email :  <Link to="">{user.email}</Link>, <br />
                     Street : {user.address.street}, <br />
                     Suite : {user.address.suite}, <br />
                     City : {user.address.city}, <br />
                     Zip code : {user.address.zipcode}, <br />
                     Phone : {user.phone}, <br />
                     Website : <Link to="">{user.website}</Link>, <br />
                     Catch Phrase : {user.company.catchPhrase}
                  </td>
                  <td>                       
                  <Link to={`posts${user.id}${user.name}`}>posts</Link>, <br />              
                    <Link to={`comments${user.id}${user.name}`}>comments</Link> ,<br />
                    <Link to={`todos${user.id}${user.name}`}>Todos</Link>, <br />
                    <Link to={`pendingTodos${user.id}${user.name}`}>pending Todos</Link>, <br />
                    <Link to={`completedTodos${user.id}${user.name}`}>completed Todos</Link>, <br />
                    <Link to={`albums${user.id}${user.name}`}>Albums</Link>
                  </td>
                </tr>
          )
        })          
      }
      </tbody>
    </table>
    </div>
  )
}

export default User