import React from 'react'
import { useParams } from 'react-router-dom'


export default function Details() {

    const { id, nombreEmpleado } = useParams()

    


    return (
        <div>
            <h1>{id}</h1>
            <h1>{nombreEmpleado}</h1>
        </div>
    )
}
