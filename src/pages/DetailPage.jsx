import React from 'react';
import { useParams } from 'react-router-dom';
import users from '../components/Users';




const DetailPage = (user) => {
    const{ id } = useParams ()
    let URL = `https://jsonplaceholder.typicode.com/users/${id}`

    const { data: name } = users(`${URL}`)
    // const [users, setUsers] = useState([])

    return (
        
        <div>
            <h1>Detail Page: {id} </h1>
            <div key={users.id}> 
                        <h2><b>Name</b>: {user.name}</h2>
                        {/* <p><b>Email Address</b>: {user.email}</p> */}
                        <button className='btn btn-danger'>DELETE</button>
                    </div>
        </div>
    );
}

export default DetailPage;
