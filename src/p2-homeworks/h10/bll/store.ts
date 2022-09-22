import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";

const reducer = combineReducers({
    loading: loadingReducer,

})

const store = createStore(reducer)
export type AppStateType = ReturnType<typeof reducer>

export default store


// @ts-ignore
window.store = store // for dev
