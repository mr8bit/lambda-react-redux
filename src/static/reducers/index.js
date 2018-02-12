import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';
import dataReducer from './data';
import postsReducer from './article';

export default combineReducers({
    auth: authReducer,
    data: dataReducer,
    posts: postsReducer,

    routing: routerReducer,
});
