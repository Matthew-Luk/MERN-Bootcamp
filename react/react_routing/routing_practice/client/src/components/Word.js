import React from 'react'
import { useParams } from 'react-router-dom';
import '../App.css';

const Word = (props) => {

    const {word} = useParams()

    return (
        <div className='styledDiv'>
            {
                isNaN(word)?
                <p>This is a word: {word}</p>:
                <p>This is a number: {word}</p>
            }
        </div>
    )
}

export default Word