/**
 * Created by lambada on 19.02.18.
 */
/**
 * Created by lambada on 09.02.18.
 */
import {checkHttpStatus, parseJSON} from "../../utils/index";
import fetch from "isomorphic-fetch";
import {SERVER_URL} from "../../utils/config";


export const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';


export function requestArticle() {
    return {
        type: REQUEST_ARTICLE,

    }
}

export function receiveArticle(data) {
    return {
        type: RECEIVE_ARTICLE,
        results: data
    }
}



export function fetchArticle(id) {
    return dispatch => {
        dispatch(requestArticle())
        return fetch(`${SERVER_URL}/api/v1/article/get/${id}/`)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(receiveArticle(response));
            })
    }
}