/**
 * Created by lambada on 09.02.18.
 */
import {RECEIVE_ARTICLE, REQUEST_ARTICLE} from "../../actions/Article/oneArticle";

const initialState = {
    results: [],
}

export default function ArticleReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ARTICLE:
            return Object.assign({}, state, {
                isFetching: true,
            });

        case RECEIVE_ARTICLE:
            return Object.assign({}, state, {
                isFetching: false,
                results: action.results,
            });

        default:
            return state
    }
}