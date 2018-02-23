/**
 * Created by lambada on 09.02.18.
 */
import {REQUEST_ARTICLE, RECEIVE_ARTICLE, REQUEST_POSTS, RECEIVE_POSTS, LOAD_NEXT_POSTS} from "../../constants";

const initialState = {
    postsList: {
        results: [],
        count: 0,
        next: '',
        previous: '',
        isFetching: false,
    },
    activePost: {
        post: null,
        isFetching: false
    },
};

export default function postsReducer(state = initialState, action) {
    switch (action.type) {

        case REQUEST_POSTS:
            return Object.assign({}, state, {
                postsList: {isFetching: true, results: state.postsList.results}
            });

        case LOAD_NEXT_POSTS:
            console.log('LOAD_NEXt_POST', state.postsList.results)
            return Object.assign({}, state, {
                postsList: {
                    results: state.postsList.results.concat(action.results),
                    count: action.count,
                    next: action.next,
                    previous: action.previous,
                    isFetching: false,
                }
            });

        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                postsList: {
                    results: action.results,
                    count: action.count,
                    next: action.next,
                    previous: action.previous,
                    isFetching: false,
                }
            });


        case REQUEST_ARTICLE:
            return Object.assign({}, state, {
                activePost: {
                    post: null,
                    isFetching: true
                }
            });


        case RECEIVE_ARTICLE:
            return Object.assign({}, state, {
                activePost: {
                    post: action.results,
                    isFetching: true
                }
            });


        default:
            return state
    }
}