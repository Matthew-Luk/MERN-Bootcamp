import React, {useState} from "react"
import '../App.css';

const PersonCard = (props) => {

    const {firstName,lastName,age,hairColor} = props
    const [year,setYear] = useState(age);

    return(
        <>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {year}</p>
            <p>Hair Color: {hairColor}</p>
            <button className="btn" onClick ={() => setYear(year+1)}>Add a year to {firstName}</button>
            <button className="btn" onClick ={() => setYear(year-1)}>Subtract a year from {firstName}</button>
        </>
    )
}

export default PersonCard