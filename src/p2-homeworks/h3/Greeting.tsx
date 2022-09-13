import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    onBlurHandler: () => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter, onBlurHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input// need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div className={s.inputDiv}>
                <SuperInputText onBlur={onBlurHandler}
                                onKeyDown={onEnter}
                                value={name}
                                onChange={setNameCallback}
                                error={error}
                />
            </div>
            <SuperButton onClick={addUser}>Add</SuperButton>
            {/*   <button className={s.button} onClick={addUser}>add</button>*/}
            <span className={s.count}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
