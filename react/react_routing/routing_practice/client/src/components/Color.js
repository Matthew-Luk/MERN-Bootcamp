import React from 'react'
import { useParams } from 'react-router-dom';
import '../App.css';

const Color = (props) => {

    const {word,color1,color2} = useParams()

    return (
        <div style={color1? {color:color1,backgroundColor:color2,marginTop:'30px',fontSize:'30px'}:null}>The word is: {word}</div>
    )
}

export default Color