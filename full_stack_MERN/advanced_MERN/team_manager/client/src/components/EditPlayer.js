import React from 'react'
import { useParams } from 'react-router-dom'

const EditPlayer = () => {

    const {id} = useParams

    return (
        <div>EditPlayer</div>
    )
}

export default EditPlayer