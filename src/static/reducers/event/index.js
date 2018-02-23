/**
 * Created by lambada on 09.02.18.
 */
import {
    REQUEST_EVENTS,
    RECEIVE_EVENTS,
    LOAD_MORE_EVENTS,
    LOAD_FILTERED_EVENTS,
    REQUEST_EVENTS_CATEGORY,
    RECEIVE_EVENTS_CATEGORY
} from "../../constants";

const initialState = {
    eventList: {
        results: [],
        count: 0,
        next: '',
        previous: '',
        isFetching: false,
    },
    activeEvent: {
        post: null,
        isFetching: false
    },
    eventCategoryList: {
        results: [],
        isFetching: false
    }
}

export default function eventReducer(state = initialState, action) {
    switch (action.type) {

        case REQUEST_EVENTS:
            return Object.assign({}, state, {
                eventList: {
                    isFetching: true,
                    results: state.eventList.results
                }

            });

        case RECEIVE_EVENTS:
            return Object.assign({}, state, {
                eventList: {
                    isFetching: false,
                    results: action.results,
                    count: action.count,
                    next: action.next,
                    previous: action.previous
                }
            });

        case LOAD_MORE_EVENTS:
            return Object.assign({}, state, {
                eventList: {
                    isFetching: false,
                    results: state.eventList.results.concat(action.results),
                    count: action.count,
                    next: action.next,
                    previous: action.previous
                }
            })

        case LOAD_FILTERED_EVENTS:
            return Object.assign({}, state, {
                eventList: {
                    isFetching: false,
                    results: action.results,
                    count: action.count,
                    next: action.next,
                    previous: action.previous
                }
            });

        case REQUEST_EVENTS_CATEGORY:
            return Object.assign({}, state, {
                eventCategoryList: {
                    isFetching: false
                }
            });


        case RECEIVE_EVENTS_CATEGORY:
            return Object.assign({}, state, {
                eventCategoryList: {
                    results: action.results,
                    isFetching: false
                }
            });


        default:
            return state
    }
}