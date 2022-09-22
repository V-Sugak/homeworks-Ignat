const initState: InitStateType = {
    isLoading: false
}

export const loadingReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => { // fix any
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
type ActionsType = | ReturnType<typeof loadingAC>