/**
 * Created by lambada on 09.02.18.
 */
import {REQUEST_TEAM, RECEIVE_TEAM} from "../constants/index";

const initialState = {
    results: [],
};
export default function teamReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_TEAM:
            return Object.assign({}, state, {
                results: state.results,
                done: false
            });
        case RECEIVE_TEAM:
            return Object.assign({}, state, {
                results: action.results,
                done: true
                
            });
        default:
            return state
    }
}