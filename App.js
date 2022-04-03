import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [users,setUsers] = useState([]);

  const loadUsers = async() => {
      
       const response = await fetch ("https://reqres.in/api/users?page=1");
       const jsonResponse = await response.json();
       setUsers(jsonResponse.data);
  }

  return (
     <div className="App">
     <div className='navbar'>
     <h2>API Fetcher </h2>
     <h2>User Data</h2>
     <button className='btn' onClick = {loadUsers}>Get Data</button>
      </div>
      <h1>Fetch Details of User - Click on Get Data</h1>
      <ul>
        <div className='card'>
        {users.map(({id,first_name,last_name,email,avatar}) => (
          <li key = {id}>
            <div className='image'>
              <img src = {avatar} ></img><br />
              <div className='info'>
                First Name : {first_name}<br />
                Last Name : {last_name}<br />
                email : {email}<br />
              </div>
            </div>
           </li>
          
        ))}
         </div>
      </ul>
     </div>
  );
}

export default App;
