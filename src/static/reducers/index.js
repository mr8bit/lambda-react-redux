import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import authReducer from "./auth";
import dataReducer from "./data";
import postsReducer from "./article/article";
import eventReducer from "./event";

export default combineReducers({
    auth: authReducer,
    data: dataReducer,
    posts: postsReducer,
    events: eventReducer,
    routing: routerReducer,
});
