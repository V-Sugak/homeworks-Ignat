import React, {useState} from 'react'
import {checkAC, homeWorkReducer, PersonType, sortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'
import style from './../h12/HW12.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../h10/bll/store";
import {ThemeType} from "../h12/bll/themeReducer";

// export type UserType =

export const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<PersonType[]>(initialPeople) // need to fix any
    const theme = useSelector<AppStateType, ThemeType>(state => state.theme.theme);

    // need to fix any
    const finalPeople = people.map((p: PersonType) => (
        <div key={p._id} className={s.person}>
            <div className={s.name}>{p.name}</div>
            <div className={s.age}>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortAC('down')))
    const checkAge = () => setPeople(homeWorkReducer(people, checkAC(18)))

    return (
        <div className={style[theme]}>
            <hr/>
            homeworks 8
            {/*should work (должно работать)*/}
            <div className={s.block + ' ' + style[theme + '-text']}>
                <div className={s.peopleBlock}>
                    {finalPeople}
                </div>
                <div className={s.buttons}>
                    <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                    <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                    <div><SuperButton onClick={checkAge}>check 18</SuperButton></div>
                </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
