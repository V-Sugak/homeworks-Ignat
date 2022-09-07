import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        error && setError('')
        setName(e.currentTarget.value) // need to fix
    }
    const addUser = () => {
        const trimName = name.trim();
        if (trimName) {
            addUserCallback(trimName)
            alert(`Hello ${trimName}!`)
            setName('')
        } else {
            setError("Enter your name")
        }
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }
    const onBlurHandler = () => {
        const trimName = name.trim();
        if (!trimName) {
            setError("Enter your name")
        }
    }
    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            onEnter={onEnter}
            totalUsers={totalUsers}
            onBlurHandler={onBlurHandler}
        />
    )
}

export default GreetingContainer
