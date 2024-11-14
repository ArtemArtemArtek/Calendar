import { StateInterface, ActionTypes, ActionTypesEnum } from "./types"
import { IUser } from "../../../models/IUser"


const initialState: StateInterface = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: ""
}

export default function authReducer(state = initialState, action: ActionTypes): StateInterface {
    switch (action.type) {
        case ActionTypesEnum.SET_AUTH:
            return { ...state, isAuth: action.payload, isLoading: false }
        case ActionTypesEnum.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false }
        case ActionTypesEnum.SET_USER:
            return { ...state, user: action.payload }
        case ActionTypesEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
}