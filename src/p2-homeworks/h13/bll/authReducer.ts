import {RequestsAPI} from "../api";
import {ThunkType} from "../../h10/bll/store";

const initState: StateType = {
    success: false,
    error: "",
};

export const authReducer = (state: StateType = initState, action: AuthActionsType): StateType => { // fix any
    switch (action.type) {
        case "CHANGE-SUCCESS": {
            return {...state, success: action.success};
        }
        case "SET-ERROR": {
            return {...state, error: action.error};
        }
        default:
            return state;
    }
};

//actions
export const changeSuccessAC = (success: boolean) => ({
    type: 'CHANGE-SUCCESS', success
} as const);
export const setErrorAC = (error: string) => ({
    type: 'SET-ERROR', error
} as const);

//thunks
export const changeSuccessTC = (success: boolean): ThunkType => (dispatch) => {
    RequestsAPI.postRequest(success)
        .then(response => (
            dispatch(setErrorAC(response.data.errorText))
        ))
        .catch(error => {
                dispatch(setErrorAC(error.response.data.errorText))
            }
        )
}


//types
type StateType = {
    success: boolean
    error: string
}
export type AuthActionsType =
    | ReturnType<typeof changeSuccessAC>
    | ReturnType<typeof setErrorAC>