const initState: StateType = {
    theme: 'some'
};

export const themeReducer = (state: StateType = initState, action: ActionsType): StateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: ThemeType) => ({
    type: 'CHANGE-THEME', theme
} as const); // fix any

//types
export type ThemeType = 'dark' | 'red' | 'some'| 'blue'
type StateType = {
    theme: ThemeType
}
type ActionsType = ReturnType<typeof changeThemeAC>