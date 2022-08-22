import React, {useContext} from 'react'
import UserContext from '../contexts/UserContext'

const styledDiv = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
}


const Form = () => {

    const {state,setState} = useContext(UserContext)

    return (
        <div style={styledDiv}>
            <label htmlFor="">Your Name: </label>
            <input type="text" onChange={e => setState(e.target.value)}/>
        </div>
    )
}

export default Form