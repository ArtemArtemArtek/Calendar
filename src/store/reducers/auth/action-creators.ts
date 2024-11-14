import { SetAuthAction, SetErrorAction, SetUserAction, SetIsLoadingAction, ActionTypesEnum } from "./types"
import { IUser } from "../../../models/IUser"
import { AppDispatch } from "../../index"
import UserService from "../../../api/UserService"
import axios from "axios"

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({ type: ActionTypesEnum.SET_USER, payload: user }),
    setAuth: (isAuth: boolean): SetAuthAction => ({ type: ActionTypesEnum.SET_AUTH, payload: isAuth }),
    setError: (error: string): SetErrorAction => ({ type: ActionTypesEnum.SET_ERROR, payload: error }),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({ type: ActionTypesEnum.SET_IS_LOADING, payload: isLoading }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            setTimeout(async () => {
                const response = await UserService.getUser()
                const user = response.data.find(user => user.username === username && user.password === password)
                if (user) {
                    dispatch(AuthActionCreators.setUser(user))
                    dispatch(AuthActionCreators.setAuth(true))
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', user.username)
                } else {
                    dispatch(AuthActionCreators.setError('Некорректный логин или пароль'))
                }
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 1000)
        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка входа'))
        }
    }
    ,
    logout: () => async (dispatch: AppDispatch) => {
        dispatch(AuthActionCreators.setAuth(false))
        dispatch(AuthActionCreators.setUser({} as IUser))
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
    }
}
