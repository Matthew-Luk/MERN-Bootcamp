import React from 'react'

const View = (props) => {
    const {userName,userEmail,userPassword} = props

    return (
        <div>
            <p>{userName}</p>
            <p>{userEmail}</p>
            <p>{userPassword}</p>
        </div>
    )
}

export default View