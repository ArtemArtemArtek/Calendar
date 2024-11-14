import { EventState, EventActions, ActionTypes } from "./types";
import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";

const initialState: EventState = {
    guests: [] as IUser[],
    events: [] as IEvent[],
    error: ''
}

export default function eventReducer(state = initialState, action: ActionTypes) {
    switch (action.type) {
        case EventActions.SET_EVENTS:
            return { ...state, events: action.payload }
        case EventActions.SET_GUESTS:
            return { ...state, guests: action.payload }
        case EventActions.SET_ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }
}