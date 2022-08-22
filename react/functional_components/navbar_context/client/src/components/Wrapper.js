import React, {useState} from 'react'
import UserContext from "../contexts/UserContext"

export default ({ children }) => {
    const [state, setState] = useState("Bob Smith");

    return (
    <UserContext.Provider
        value={{state,setState}}
    >
        {children}
    </UserContext.Provider>
    );
};