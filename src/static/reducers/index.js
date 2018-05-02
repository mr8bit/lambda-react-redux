import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import authReducer from "./auth";
import dataReducer from "./data";
import postsReducer from "./article/article";
import eventReducer from "./event";
import teamReducer from "./team";

export default combineReducers({
    auth: authReducer,
    data: dataReducer,
    posts: postsReducer,
    events: eventReducer,
    team: teamReducer,
    routing: routerReducer,
});
