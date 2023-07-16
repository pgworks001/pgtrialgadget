import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
const Users = () => {
    let URL = "https://jsonplaceholder.typicode.com/users"
    const [users, setUsers] = useState([])
    useEffect(() => {
        // code block for fetching users
        fetch(`${URL}`)
      .then(response => response.json())
    //   .then(json => console.log(json))
    .then((data)=> {setUsers(data)
    
    })

    }, [URL])

    return (
        <div>
            <h1>Users</h1>
            {
                users.map(user => (
                    <div key={user.id}>
                        <h2><b>Name</b>: {user.name}</h2>
                        <p><b>Email Address</b>: {user.email}</p>
                        <p>{user.name.slice(0, 3)}<Link to={`/users/${user.id}`}>Read More.....</Link></p>
                    </div>
                ))
            }
        </div>
    );
}

export default Users;
