import React, {useState,useEffect} from 'react'

    const styledButton = {
        margin: '30px 0px'
    }

const Script = (props) => {

    const {state,setState} = props

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then((result) => {
            console.log(result)
            return result.json()
        })
        .then((res) => {
            console.log(res)
            setState(res.results)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div>
            <button style={styledButton}>Fetch Pokemon</button>
            {
                state?.map((item,index) =>(
                    <div key={index}>
                        <li>{item.name}</li>
                    </div>
                ))
            }
        </div>
    )
}

export default Script