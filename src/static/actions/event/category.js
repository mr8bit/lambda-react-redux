import fetch from "isomorphic-fetch";
import {checkHttpStatus, parseJSON} from "../../utils";
import {SERVER_URL} from "../../utils/config";

export const REQUEST_EVENTS_CATEGORY = 'REQUEST_EVENTS_CATEGORY';
export const RECEIVE_EVENTS_CATEGORY = 'RECEIVE_EVENTS_CATEGORY';


export function requestEventsCategory() {
    return {
        type: REQUEST_EVENTS_CATEGORY,
    }
}

export function receiveEventsCategory(data) {
    console.log('receiveEventsCategory',data);
    return {
        type: RECEIVE_EVENTS_CATEGORY,
        results: data,
    }
}



export function fetchEventCategory() {
    return dispatch => {
        dispatch(requestEventsCategory())
        return fetch(`${SERVER_URL}/api/v1/events/category/`)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(receiveEventsCategory(response));
            })
    }
}