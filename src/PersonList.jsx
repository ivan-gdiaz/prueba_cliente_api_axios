import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function PersonList() {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setPersons(res.data);
            },[])
    });
    return (
        <ul>
            {persons.map((person) => <li>{person.name}</li>)}
        
        </ul>
    )
}
