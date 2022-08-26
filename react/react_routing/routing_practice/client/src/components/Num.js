import React from 'react'
import { useParams } from 'react-router-dom';
import '../App.css';

const Num = (props) => {

    const {num} = useParams()

    return (
        <div className='styledDiv'>The number is: {num}</div>
    )
}

export default Num