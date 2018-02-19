/**
 * Created by lambada on 09.02.18.
 */
import {RECEIVE_POSTS, REQUEST_POSTS, LOAD_NEXT_POSTS} from "../../actions/Article/index";

const initialState = {
    results: [],
    count: 0,
    next: '',
    previous: '',
    isFetching: false
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {

        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
            });

        case LOAD_NEXT_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                results: state.results.concat(action.results),
                count: action.count,
                next: action.next,
                previous: action.previous

            });

        case RECEIVE_POSTS:
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