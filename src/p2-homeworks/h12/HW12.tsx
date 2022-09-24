import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../h10/bll/store";
import {changeThemeAC, ThemeType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'blue'];

function HW12() {
    const theme = useSelector<AppStateType, ThemeType>(state => state.theme.theme); // useSelector

    // useDispatch, onChangeCallback
    const dispatch = useDispatch()
    const onChangeOption = (theme: ThemeType) => {
        dispatch(changeThemeAC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            homeworks 12
            <div className={s[theme + '-text']}>
                <div>Themes:</div>
                <div>
                    <SuperRadio
                        options={themes}
                        value={theme}
                        onChangeOption={onChangeOption}
                    />
                </div>
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
