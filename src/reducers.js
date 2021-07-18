
import {
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PEDING, 
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILD
} from "./constants.js";

const initalStateSearch = {
    searchField : ""
}

export const searchRobots = (state=initalStateSearch, action={}) =>{
    console.log(action.type)
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField:action.payload});
        default:
            return state;
    }
}

const initalStateRobots = {
    isPending: false,
    robots: [],
    error:''
}

export const requestRobots = (state=initalStateRobots, action={})=>{
    switch(action.type) {
        case REQUEST_ROBOTS_PEDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots:action.payload, isPending: false });
        case REQUEST_ROBOTS_FAILD :
            return Object.assign({}, state, {error: action.payload, isPending : false});
        default:
            return state;
    }
}