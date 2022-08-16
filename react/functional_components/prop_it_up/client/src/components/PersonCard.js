import React from "react"

const PersonCard = (props) => {
    const {firstName,lastName,age,color} = props
    return(
        <>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {color}</p>
        </>
    )
}

export default PersonCard