import React, {useReducer} from 'react'
import "../App.css"

const initialState = {
    firstName: {
        value: "",
        error: null
    },
    lastName: {
        value: "",
        error: null
    },
    email: {
        value: "",
        error: null
    }
}

const reducer = (state,action) => {
    switch (action.type) {
        case "SET_FIRST_NAME_VALUE":
            return{
                ...state,
                firstName: {
                    ...state.firstName, value: action.payload
                }
            }
        case "SET_FIRST_NAME_ERROR":
            return{
                ...state,
                firstName: {
                    ...state.firstName, error: action.payload
                }
            }
        case "SET_LAST_NAME_VALUE":
            return{
                ...state,
                lastName: {
                    ...state.lastName, value: action.payload
                }
            }
        case "SET_LAST_NAME_ERROR":
            return{
                ...state,
                lastName: {
                    ...state.lastName, error: action.payload
                }
            }
        case "SET_EMAIL_VALUE":
            return{
                ...state,
                email: {
                    ...state.email, value: action.payload
                }
            }
        case "SET_EMAIL_ERROR":
            return{
                ...state,
                email: {
                    ...state.email, error: action.payload
                }
            }
        default:
            return state
    }
}

const UserForm = () => {

const [state,dispatch] = useReducer(reducer, initialState)

const handleFirstName = (e) => {
    if (e.target.value.length < 2){
        dispatch({
            type: "SET_FIRST_NAME_ERROR",
            payload: "First name must be at least 2 characters."
        })
    }else{
        dispatch({
            type: "SET_FIRST_NAME_ERROR",
            paylod: ""
        })
    }
    dispatch({
        type: "SET_FIRST_NAME_VALUE",
        payload: e.target.value
    })
}

const handleLastName = (e) => {
    if (e.target.value.length < 2){
        dispatch({
            type: "SET_LAST_NAME_ERROR",
            payload: "Last name must be at least 2 characters"
        })
    }else{
        dispatch({
            type: "SET_LAST_NAME_ERROR",
            payload: ""
        })
    }
    dispatch({
        type: "SET_LAST_NAME_VALUE",
        payload: e.target.value
    })
}

const handleEmail = (e) => {
    let mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!e.target.value.match(mailformat)){
        dispatch({
            type: "SET_EMAIL_ERROR",
            payload: "Invalid email address"
        })
    }else{
        dispatch({
            type: "SET_EMAIL_ERROR",
            payload: ""
        })
    }
    dispatch({
        type: "SET_EMAIL_VALUE",
        payload: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
}

    return (
        <div className='container'>
            <form action="" onSubmit={handleSubmit}>
                <div className='styledDiv'>
                    <label htmlFor="">First Name: </label>
                    <input type="text" value={state.firstName.value} onChange={handleFirstName}/>
                </div>
                    {state.firstName.error !== null && (
                        <p className='error'>{state.firstName.error}</p>
                    )}
                <div className='styledDiv'>
                    <label htmlFor="">Last Name: </label>
                    <input type="text" value={state.lastName.value} id="" onChange={handleLastName}/>
                </div>
                    {state.lastName.error !== null && (
                        <p className='error'>{state.lastName.error}</p>
                    )}
                <div className='styledDiv'>
                    <label htmlFor="">Email: </label>
                    <input type="text" name="" id="" onChange={handleEmail}/>
                </div>
                    {state.email.error !== null && (
                        <p className='error'>{state.email.error}</p>
                    )}
                <div className='styledDiv2'>
                    <input id='submit_btn' type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default UserForm