/**
 * Created by lambada on 09.02.18.
 */
import {
    REQUEST_ARTICLE, RECEIVE_ARTICLE, REQUEST_POSTS, RECEIVE_POSTS, LOAD_NEXT_POSTS,
    RECEIVE_MAIN
} from "../../constants";

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
    mainPost: {
        post: null,
        isFetching: false
    }
};

export default function postsReducer(state = initialState, action) {
    switch (action.type) {

        case REQUEST_POSTS:
            return Object.assign({}, state, {
                postsList: {
                    isFetching: true,
                    results: state.postsList.results,
                    done: false
                }
            });

        case LOAD_NEXT_POSTS:
            return Object.assign({}, state, {
                postsList: {
                    results: state.postsList.results.concat(action.results),
                    count: action.count,
                    next: action.next,
                    previous: action.previous,
                    isFetching: false,
                    done: true
                }
            });


        case RECEIVE_MAIN:
            return Object.assign({}, state, {
                mainPost: {
                    post: action.results,
                    isFetching: false
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
                    done: true
                }
            });


        case REQUEST_ARTICLE:
            return Object.assign({}, state, {
                activePost: {
                    post: null,
                    isFetching: true,
                    done: false
                }
            });


        case RECEIVE_ARTICLE:
            return Object.assign({}, state, {
                activePost: {
                    post: action.results,
                    isFetching: false

                }
            });


        default:
            return state
    }
}