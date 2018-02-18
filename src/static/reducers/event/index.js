/**
 * Created by lambada on 09.02.18.
 */
import {REQUEST_EVENTS, RECEIVE_EVENTS, LOAD_MORE_EVENTS, LOAD_FILTERED_EVENTS} from "../../actions/event/index";

const initialState = {
    results: [],
    count: 0,
    next: '',
    previous: '',
    isFetching: false
}

export default function eventReducer(state = initialState, action) {
    switch (action.type) {

        case REQUEST_EVENTS:
            return Object.assign({}, state, {
                isFetching: true,
            });

        case LOAD_MORE_EVENTS:
            return Object.assign({}, state, {
                isFetching: false,
                results: state.results.concat(action.results),
                count: action.count,
                next: action.next,
                previous: action.previous

            });


        case RECEIVE_EVENTS:
            return Object.assign({}, state, {
                isFetching: false,
                results: action.results,
                count: action.count,
                next: action.next,
                previous: action.previous
            });


        case LOAD_FILTERED_EVENTS:
            return Object.assign({}, state, {
                isFetching: false,
                results: action.results,
                count: action.count,
                next: action.next,
                previous: action.previous
            });


        default:
            return state
    }
}