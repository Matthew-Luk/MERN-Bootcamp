import React, {useContext} from 'react'
import UserContext from '../contexts/UserContext'

const styledDiv = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px'
}

const styledLabel = {
    marginRight: ' 15px'
}

const styledInput = {
    height: '30px',
    borderRadius: '5px'
}

const Form = () => {

    const {state,setState} = useContext(UserContext)

    return (
        <div style={styledDiv}>
            <label style={styledLabel} htmlFor="">Your Name: </label>
            <input style={styledInput} type="text" onChange={e => setState(e.target.value)}/>
        </div>
    )
}

export default Form