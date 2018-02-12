/**
 * Created by lambada on 09.02.18.
 */
import {checkHttpStatus, parseJSON} from "../utils";
import fetch from "isomorphic-fetch";
import {SERVER_URL} from "../utils/config";


export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const LOAD_NEXT_POSTS = 'LOAD_NEXT_POSTS';

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

export function requestPosts() {
    return {
        type: REQUEST_POSTS,

    }
}

export function receivePosts(data) {
    console.log('recive',data);
    return {
        type: RECEIVE_POSTS,
        results: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous,
    }
}

export function loadMorePosts(data) {
    console.log('recive',data);
    return {
        type: LOAD_NEXT_POSTS,
        results: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous,
    }
}



export function getOtherArticle(nextUrl) {
    return dispatch =>{
        dispatch(requestPosts())
        return fetch(nextUrl)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response)=>{
                dispatch(loadMorePosts(response))
            })
    }
}

export function fetchPosts() {
    return dispatch => {
        dispatch(requestPosts())
        return fetch(`${SERVER_URL}/api/v1/article/`)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(receivePosts(response));
            })
    }
}