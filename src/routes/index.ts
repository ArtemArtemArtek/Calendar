import Login from "../pages/Login"
import Event from "../pages/Event"
import React from "react"

export interface IRoute {
    path: string,
    component: React.ComponentType,
}

export enum RoutesName {
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes: IRoute[] = [
    { path: RoutesName.LOGIN, component: Login }
]
export const privateRoutes: IRoute[] = [
    { path: RoutesName.EVENT, component: Event }
]