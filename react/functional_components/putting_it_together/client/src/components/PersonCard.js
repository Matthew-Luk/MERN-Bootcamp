import React, {useState} from "react"

const PersonCard = (props) => {
    const [age,setYear] = useState(props.age);
    return(
        <>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {props.color}</p>
            <button onClick ={(event) => setYear(age+1)}>Add a year to {props.firstName}</button>
            <button onClick ={(event) => setYear(age-1)}>Subtract a year from {props.firstName}</button>
        </>
    )
}

export default PersonCard