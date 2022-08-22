import React, {useContext} from 'react'
import UserContext from '../contexts/UserContext'

const styledNav = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor:'rebeccapurple',
    color: 'white'
}

const Navbar = () => {

    const {state} = useContext(UserContext)

    return (
        <div style={styledNav}>
            <h2>Hi {state}</h2>
        </div>
    )
}

export default Navbar