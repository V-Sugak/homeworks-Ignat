import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.header}>
            <NavLink className={({isActive}) => (isActive ? s.active : s.link)}
                     to={PATH.PRE_JUNIOR}>Pre-junior</NavLink>
            <NavLink className={({isActive}) => (isActive ? s.active : s.link)}
                     to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={({isActive}) => (isActive ? s.active : s.link)}
                     to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
