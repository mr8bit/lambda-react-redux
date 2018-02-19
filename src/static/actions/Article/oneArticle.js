/**
 * Created by lambada on 19.02.18.
 */
/**
 * Created by lambada on 09.02.18.
 */
import {checkHttpStatus, parseJSON} from "../../utils/index";
import fetch from "isomorphic-fetch";
import {SERVER_URL} from "../../utils/config";


export const REQUEST_POST = 'REQUEST_POSTS';
export const RECEIVE_POST = 'RECEIVE_POSTS';


export function requestPost() {
    return {
        type: REQUEST_POST,

    }
}

export function receivePost(data) {
    return {
        type: RECEIVE_POST,
        results: data
    }
}



export function fetchPosts(id) {
    return dispatch => {
        dispatch(requestPost())
        return fetch(`${SERVER_URL}/api/v1/article/get/${id}/`)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(receivePost(response));
            })
    }
}