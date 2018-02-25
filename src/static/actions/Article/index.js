/**
 * Created by lambada on 09.02.18.
 */
import {checkHttpStatus, parseJSON} from "../../utils/index";
import fetch from "isomorphic-fetch";
import {SERVER_URL} from "../../utils/config";
import {REQUEST_ARTICLE, RECEIVE_ARTICLE, REQUEST_POSTS, RECEIVE_POSTS, LOAD_NEXT_POSTS,RECEIVE_MAIN} from "../../constants";

////// ЗАПРОС НА СТАТЬЮ ////////
export function requestArticle() {
    return {
        type: REQUEST_ARTICLE,

    }
}
////// ПОЛУЧИЛИ СТАТЬЮ ////////
export function receiveArticle(data) {
    return {
        type: RECEIVE_ARTICLE,
        results: data
    }
}

////// ПОЛУЧИЛИ ГЛАВНУЮ СТАТЬЮ ////////
export function receiveMainArticle(data) {
    return {
        type: RECEIVE_MAIN,
        results: data
    }
}


////// ЗАПРОС НА СПИСОК СТАТЕЙ ////////
export function requestPosts() {
    return {
        type: REQUEST_POSTS,

    }
}

////// ПОЛУЧИЛИ СПИСОК СТАТЕЙ ////////
export function receivePosts(data) {
    return {
        type: RECEIVE_POSTS,
        results: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous,
    }
}

////// ПОЛУЧИЛИ СЛЕДУЩИЙ СПИСОК СТАТЕЙ ////////
export function loadMorePosts(data) {
    return {
        type: LOAD_NEXT_POSTS,
        results: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous,
    }
}

//////ЗАПРОС НА СТАТЬИ  НА СТРАНИЦЕ ПО URL //////
export function fetchNextArticles(nextUrl) {
    return dispatch => {
        dispatch(requestPosts())
        return fetch(nextUrl)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(loadMorePosts(response))
            })
    }
}
////// ЗАПРОС НА ПЕРВЫЙ СПИСОК СТАТЕЙ //////
export function fetchArticles() {
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

///// ПОЛУЧИТЬ СТАТЬЮ ПО ЕЕ ID ////
export function fetchArticle(id) {
    return dispatch => {
        dispatch(requestArticle())
        return fetch(`${SERVER_URL}/api/v1/article/${id}/`)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(receiveArticle(response));
            })
    }
}


///// ПОЛУЧИТЬ ГЛАВНУЮ СТАТЬЮ  ////
export function fetchMainArticle() {
    return dispatch => {
        dispatch(requestArticle())
        return fetch(`${SERVER_URL}/api/v1/article/main/`)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(receiveMainArticle(response));
            })
    }
}


