import React, { useReducer } from 'react'
import type { NextPage } from 'next'

type Action =
    | { type: 'SET_NAME'; payload: string }
    | { type: 'SET_EMAIL'; payload: string }
    | { type: 'SET_PASSWORD'; payload: string }

const initialState = {
    name: '',
    email: '',
    password: '',
}

function reducer(state: typeof initialState, action: Action) {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload }
        case 'SET_EMAIL':
            return { ...state, email: action.payload }
        case 'SET_PASSWORD':
            return { ...state, password: action.payload }
        default:
            return state
    }
}

const SignUp: NextPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(state)
    }

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: 'SET_NAME', payload: event.target.value })
    }

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: 'SET_EMAIL', payload: event.target.value })
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: 'SET_PASSWORD', payload: event.target.value })
    }

    return (
        <div className='bg-orange-100 p-40'>
            <h1>sign up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type='text'
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type='email'
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type='password'
                        value={state.password}
                        onChange={handlePasswordChange}
                    />
                </label>
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}

export default SignUp
