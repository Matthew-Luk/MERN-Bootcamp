import React from 'react'

const View = (props) => {
    const {name,email,password} = props

    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{password}</p>
        </div>
    )
}

export default View