import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App(props) {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            let response = await axios.get(
                'https://jsonplaceholder.typicode.com/users',
            );
            setUsers(response.data);
        } catch (e) {
            console.log(e.message);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return <div>hello</div>;
}

export default App;
