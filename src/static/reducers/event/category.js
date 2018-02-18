/**
 * Created by lambada on 09.02.18.
 */
import {REQUEST_EVENTS_CATEGORY, RECEIVE_EVENTS_CATEGORY} from "../../actions/event/category";

const initialState = {
    results: [],
    isFetching: false
}

export default function eventCategoryReducer(state = initialState, action) {
    switch (action.type) {

        case REQUEST_EVENTS_CATEGORY:
            return Object.assign({}, state, {
                isFetching: true,
            });


        case RECEIVE_EVENTS_CATEGORY:
            console.log('RECEIVE_EVENTS_CATEGORY', action.results);
            return Object.assign({}, state, {
                isFetching: false,
                results: action.results,
            });


        default:
            return state
    }
}