import React, {useState,useEffect} from 'react'
import axios from 'axios'

    const styledButton = {
        margin: '30px 0px'
    }

const Script = (props) => {

    const {state,setState} = props

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then((response) => {
            console.log(response.data.results)
            setState(response.data.results)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div>
            <button style={styledButton}>Fetch Pokemon</button>
            {
                state.map((item,index) =>(
                    <div key={index}>
                        <li>{item.name}</li>
                    </div>
                ))
            }
        </div>
    )
}

export default Script