import {initialPeople} from "../HW8";


export const homeWorkReducer = (state: PersonType[], action: ActionsType): PersonType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            let newState = [...state].sort((a, b) => {
                if (a.name < b.name) //сортируем строки по возрастанию
                    return -1
                if (a.name > b.name)
                    return 1
                return 0
            })
            return action.payload === 'down' ? newState : newState.reverse()
        }
        case 'check': {
            // need to fix
            return state.filter(p => p.age >= action.payload)
        }
        default:
            return state
    }
}

//actions
export const sortAC = (payload: SortType) => ({
    type: 'sort', payload
} as const)
export const checkAC = (payload: number) => ({
    type: 'check', payload
} as const)

//types
export type PersonType = {
    _id: number
    name: string
    age: number
}
type SortType = 'up' | 'down'
export type ActionsType =
    | ReturnType<typeof sortAC>
    | ReturnType<typeof checkAC>