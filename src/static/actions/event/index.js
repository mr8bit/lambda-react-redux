import fetch from "isomorphic-fetch";
import {checkHttpStatus, parseJSON} from "../../utils";
import {receivePosts, requestPosts} from "../article";
import {SERVER_URL} from "../../utils/config";

export const REQUEST_EVENTS = 'REQUEST_EVENTS';
export const RECEIVE_EVENTS= 'RECEIVE_EVENTS';
export const LOAD_MORE_EVENTS = 'LOAD_MORE_EVENTS';
export const LOAD_FILTERED_EVENTS = 'LOAD_FILTERED_EVENTS';


export function requestEvents() {
    return {
        type: REQUEST_EVENTS,

    }
}

export function filteredEvents(data) {
    return {
        type: LOAD_FILTERED_EVENTS,
        results: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous,
    }
}

export function receiveEvents(data) {
    return {
        type: RECEIVE_EVENTS,
        results: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous,
    }
}

export function  receiveLoadMoreEvents(data) {
    return {
        type: LOAD_MORE_EVENTS,
        results: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous,
    }
}

export function filterEventByCategory(categoryId) {
    console.log(`${SERVER_URL}/api/v1/events/sortbyCategory/${categoryId}/`);
    return dispatch =>{
        dispatch(requestEvents())
        return fetch(`${SERVER_URL}/api/v1/events/sortbyCategory/${categoryId}/`)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response)=>{
                dispatch(filteredEvents(response))
            })
    }
}


export function loadMoreEvents(nextUrl) {
    return dispatch =>{
        dispatch(requestEvents())
        return fetch(nextUrl)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response)=>{
                dispatch(receiveLoadMoreEvents(response))
            })
    }
}

export function fetchEvents() {
    return dispatch => {
        dispatch(requestEvents())
        return fetch(`${SERVER_URL}/api/v1/events/`)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(receiveEvents(response));
            })
    }
}