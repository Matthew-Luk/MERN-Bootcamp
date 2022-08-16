import React, {useState} from "react"

const PersonCard = (props) => {
    const {firstName,lastName,age,color} = props
    const [year,setYear] = useState(age);
    return(
        <>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {year}</p>
            <p>Hair Color: {color}</p>
            <button onClick ={(event) => setYear(year+1)}>Add a year to {firstName}</button>
            <button onClick ={(event) => setYear(year-1)}>Subtract a year from {firstName}</button>
        </>
    )
}

export default PersonCard