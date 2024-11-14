import { IUser } from "../../../models/IUser"

export interface StateInterface {
    isAuth: boolean,
    user: IUser,
    isLoading: boolean
    error: string
}

export enum ActionTypesEnum {
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
}

export interface SetAuthAction {
    type: ActionTypesEnum.SET_AUTH,
    payload: boolean
}
export interface SetUserAction {
    type: ActionTypesEnum.SET_USER,
    payload: IUser
}
export interface SetIsLoadingAction {
    type: ActionTypesEnum.SET_IS_LOADING,
    payload: boolean
}
export interface SetErrorAction {
    type: ActionTypesEnum.SET_ERROR,
    payload: string
}

export type ActionTypes = SetAuthAction
    | SetUserAction
    | SetIsLoadingAction
    | SetErrorAction