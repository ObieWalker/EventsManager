import { ADD_EVENT, GET_ALL_EVENTS, EDIT_AN_EVENT, DELETE_AN_EVENT, GET_AN_EVENT } from '../actions/actionTypes'

const eventReducer = (events = [], action) => {
    switch (action.type) {
        case ADD_EVENT:
            return [action.event, ...events];
        case EDIT_AN_EVENT:
            return events.map((event) => 
               action.event.id === event.id ? action.event: event);
        case GET_ALL_EVENTS:
            return action.events;
        case GET_AN_EVENT:
            return action.payload;
        case DELETE_AN_EVENT:
            return state.filter(event => event.id !== action.id);
        default:
            return events;
    }
};

export default eventReducer;