import React, { useState } from 'react';
import axios from 'axios';
import API from './api'; 

export default function RemovePerson() {

    const [id, setId] = useState(null);

    const handleChange = (event) => {
        setId(event.target.value);
    }

    // const handleSubmit = (event) => {
        // event.preventDefault();

        // API.delete("users/${id}")
        //     .then(res => {
        //         console.log("borrado ID:"+ id);
        //         console.log(res.data);
        //     })
    
        const handleSubmit = async (event) => {
        event.preventDefault(); 
        // Promise is resolved and value is inside of the response const. 
        const response = await API.delete("users/${this.state.id}"); 
            
        console.log("borrado ID:"+ id);
        console.log(response.data); 
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Identificador de la persona:
                    <input id="campoTexto" type="text" name="id" onChange={handleChange} />
                </label>
                <button type="submit">Borrar</button>
            </form>
        </div>
    )
} 