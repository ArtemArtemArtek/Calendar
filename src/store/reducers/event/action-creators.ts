import { ActionTypes, EventActions, SetEvents, SetGuests, SetError } from "./types"
import { IUser } from "../../../models/IUser"
import { IEvent } from "../../../models/IEvent"
import { AppDispatch } from "../../index"
import UserService from "../../../api/UserService"
import axios from "axios"

export const EventActionCreators = {
    setEvents: (events: IEvent[]): SetEvents => ({ type: EventActions.SET_EVENTS, payload: events }),
    setGuests: (guests: IUser[]): SetGuests => ({ type: EventActions.SET_GUESTS, payload: guests }),
    setError: (error: string): SetError => ({ type: EventActions.SET_ERROR, payload: error }),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUser()
            dispatch(EventActionCreators.setGuests(response.data))

        } catch (e) {
            dispatch(EventActionCreators.setError('Ошибка загрузки гостей'))
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const jsonEvents = JSON.parse(events) as IEvent[]
            jsonEvents.push(event)
            dispatch(EventActionCreators.setEvents(jsonEvents))
            localStorage.setItem('events', JSON.stringify(jsonEvents))
        } catch (e) {
            console.log(e)
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try { 
            const events = localStorage.getItem('events') || '[]'
            const jsonEvents = JSON.parse(events) as IEvent[]
            const currentUserEvents = jsonEvents.filter(ev => ev.author === username || ev.guests === username);
            dispatch(EventActionCreators.setEvents(currentUserEvents));
        } catch (e) {
            console.log(e)
        }
    }
}
