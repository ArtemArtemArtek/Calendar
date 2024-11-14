import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";

export interface EventState {
    guests: IUser[],
    events: IEvent[],
    error: string
}

export enum EventActions {
    SET_GUESTS = 'SET_GUESTS',
    SET_EVENTS = 'SET_EVENTS',
    SET_ERROR = 'SET_ERROR'
}

export interface SetGuests {
    type: EventActions.SET_GUESTS,
    payload: IUser[]
}

export interface SetEvents {
    type: EventActions.SET_EVENTS,
    payload: IEvent[]
}

export interface SetError {
    type: EventActions.SET_ERROR,
    payload: string
}

export type ActionTypes = SetEvents 
    | SetGuests
    | SetError