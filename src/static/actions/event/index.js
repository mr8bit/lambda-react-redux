import fetch from "isomorphic-fetch";
import {checkHttpStatus, parseJSON} from "../../utils";
import {receivePosts, requestPosts} from "../Article/index";
import {SERVER_URL} from "../../utils/config";
import {
    REQUEST_EVENTS, RECEIVE_EVENTS, LOAD_MORE_EVENTS, LOAD_FILTERED_EVENTS, REQUEST_EVENTS_CATEGORY,
    RECEIVE_EVENTS_CATEGORY, RECEIVE_EVENT, REQUEST_EVENT
} from "../../constants";


///////////// EVENT LIST //////////////


///////////// ЗАПРОС НА EVENT LIST //////////////
export function requestEvents() {
    return {
        type: REQUEST_EVENTS,

    }
}
//////// СОРТИРОВАННЫЕ ПО КАТЕГОРИЯМ //////////
export function filteredEvents(data) {
    return {
        type: LOAD_FILTERED_EVENTS,
        results: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous,
    }
}

////// ПОЛУЧИЛИ EVENT ////////
export function receiveEvents(data) {
    return {
        type: RECEIVE_EVENTS,
        results: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous,
    }
}
/////////////      ПОЛУЧИЛИ СЛЕДУЩИЙ СПИСОК EVENT    ////////////
export function  receiveLoadMoreEvents(data) {
    return {
        type: LOAD_MORE_EVENTS,
        results: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous,
    }
}



///// ПОЛУЧИТЬ СТАТЬЮ ПО ЕЕ ID ////
export function filterEventByCategory(categoryId) {
    console.log(`${SERVER_URL}/api/v1/events/?category=${categoryId}`);
    return dispatch =>{
        dispatch(requestEvents())
        return fetch(`${SERVER_URL}/api/v1/events/?category=${categoryId}`)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response)=>{
                dispatch(filteredEvents(response))
            })
    }
}

//////ЗАПРОС НА LIST EVENT  НА СТРАНИЦЕ ПО URL //////
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

////// ЗАПРОС НА ПЕРВЫЙ СПИСОК LIST EVENT //////
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


////// ПОЛУЧИЛИ EVENT   ////////
export function requestEvent() {
    return {
        type: REQUEST_EVENT,
    }
}

////// ПОЛУЧИЛИ EVENT   ////////
export function receiveEvent(data) {
    return {
        type: RECEIVE_EVENT,
        results: data
    }
}

///// ПОЛУЧИТЬ EVENT ПО ID ////
export function fetchEvent(id) {
    return dispatch => {
        dispatch(requestEvent())
        return fetch(`${SERVER_URL}/api/v1/events/${id}/`)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(receiveEvent(response));
            })
    }
}

////////////// CATEGORY ////////////
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