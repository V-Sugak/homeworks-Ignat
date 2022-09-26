import {LoadingActionsType, loadingReducer} from './loadingReducer'
import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {ThemeActionsType, themeReducer} from "../../h12/bll/themeReducer";
import {AuthActionsType, authReducer} from "../../h13/bll/authReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

const reducer = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    auth: authReducer
})

const store = createStore(reducer, applyMiddleware(thunk))
export type AppStateType = ReturnType<typeof reducer>
type RootActionsType = AuthActionsType | LoadingActionsType | ThemeActionsType
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>

/*export type AppDispatch = typeof store.dispatch*/
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>

export default store


// @ts-ignore
window.store = store // for dev
