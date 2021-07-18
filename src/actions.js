import {
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PEDING, 
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILD
} from "./constants.js"

export const SetSearchField = (text)=>({
    type:CHANGE_SEARCH_FIELD,
    payload:text

})

//export const requestRobots = (dispatch) =>{
export const requestRobots =()=> (dispatch) =>{
    dispatch({type: REQUEST_ROBOTS_PEDING});
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response =>  response.json())
        .then(data => dispatch({type:REQUEST_ROBOTS_SUCCESS, payload : data}))
        .catch(err => dispatch({type: REQUEST_ROBOTS_FAILD, payload: err}))
} 