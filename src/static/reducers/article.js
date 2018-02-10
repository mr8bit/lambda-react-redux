/**
 * Created by lambada on 09.02.18.
 */
import {RECEIVE_POSTS, REQUEST_POSTS} from "../actions/article";

const initialState = {
    data: null,
    isFetching: false
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {

        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
            });

        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload.data,
            });

        default:
            return state
    }
}