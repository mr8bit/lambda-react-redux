import fetch from "isomorphic-fetch";
import {checkHttpStatus, parseJSON} from "../utils/index";
import {receivePosts, requestPosts} from "./article";
import {SERVER_URL} from "../utils/config";
import {
    REQUEST_TEAM, RECEIVE_TEAM
} from "../constants/index";


///////////// ЗАПРОС НА TEAM LIST //////////////
export function requestTeam() {
    return {
        type: REQUEST_TEAM,

    }
}
////// ПОЛУЧИЛИ TEAM ////////
export function receiveTeam(data) {
    return {
        type: RECEIVE_TEAM,
        results: data,
    }
}

////// ЗАПРОС НА ПЕРВЫЙ СПИСОК LIST EVENT //////

export function fetchTeam() {
    return dispatch => {
        dispatch(requestTeam())
        return fetch(`${SERVER_URL}/api/v1/accounts/team/`)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(receiveTeam(response));
            })
    }
}
