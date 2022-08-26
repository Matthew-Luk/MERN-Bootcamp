import React from 'react'
import { useParams } from 'react-router-dom';
import '../App.css';

const Word = (props) => {

    const {word} = useParams()

    return (
        <div className='styledDiv'>The word is: {word}</div>
    )
}

export default Word