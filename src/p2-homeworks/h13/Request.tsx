import React, {ChangeEvent} from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./HW13.module.css";
import {changeSuccessAC, changeSuccessTC} from "./bll/authReducer";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";


export const Request = () => {
    const dispatch = useAppDispatch();
    const success = useAppSelector(state => state.auth.success)
    const error = useAppSelector(state => state.auth.error)

    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSuccessAC(e.currentTarget.checked))
    }

    const onClickHandler = () => {
        dispatch(changeSuccessTC(success))
    }

    return (
        <div className={s.container}>
            <div className={s.checkBox}>
                <SuperCheckbox onChange={onChangeChecked}/>
                <span>CHECK</span>
            </div>
            <SuperButton onClick={onClickHandler}>push</SuperButton>
            <div className={s.error}>{error}</div>
        </div>
    )
}