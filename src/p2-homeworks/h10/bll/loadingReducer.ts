const initState: InitStateType = {
    isLoading: false
}

export const loadingReducer = (state: InitStateType = initState, action: LoadingActionsType): InitStateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

//actions
export const loadingAC = (isLoading: boolean) => ({
    type: 'SET-LOADING', isLoading
} as const) // fix any

//types
type InitStateType = {
    isLoading: boolean
}
export type LoadingActionsType = | ReturnType<typeof loadingAC>