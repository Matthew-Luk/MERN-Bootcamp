import React, { useEffect } from 'react'

    const styledButton = {
        margin: '30px 0px',
        width: '150px'
    }

    const styledList = {
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start'
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
        <div style={styledList}>
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