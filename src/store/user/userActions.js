import { FETCH_USER_FAILURE,FETCH_USER_SUCCESS,FETCH_USER_REQUEST, fe } from "./userTypes";
import axios from "axios";

export const fetchUsers = (title) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios.get(`https://www.omdbapi.com?apikey=3123e26a&s=${title}&type=movie`)
      .then(response => {
        // response.data is the users 
        const users = response.data
        dispatch(fetchUsersSuccess(response.data.search))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}



export const fetchUserRequest = () =>{
  return{
    type: FETCH_USER_REQUEST
  }
}
export const fetchUserSuccess =() =>{
  return{
    type: FETCH_USER_SUCCESS,
    payload: movies,
    error: ''
  }
}
export const fetchUserFailure =() =>{
  return{
    type: FETCH_USER_FAILURE,
    payload =[],
    error=''
  }
}