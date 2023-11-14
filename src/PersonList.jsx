import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function PersonList() {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users', 
            {
                headers:  {
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT"
                }
            }
            ).then((res) => {
                setPersons(res.data);
            },[])
    });
    return (
        <ul>
            {persons.map((person) => <li>{person.name}</li>)}
        
        </ul>
    )
}
