import React, { useState } from 'react';
import axios from 'axios'

export default function AddPerson() {
    const [name, setName] = useState(null);

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            namepost: name
        };

        axios.post("https://jsonplaceholder.typicode.com/users", { user }).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre de la persona:
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                <button type="submit">Añadir</button>
            </form>
        </div>
    )

} 