import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";

const reducer = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
})

const store = createStore(reducer)
export type AppStateType = ReturnType<typeof reducer>

export default store


// @ts-ignore
window.store = store // for dev
