import { GET_USERS, USERS_ERROR } from "../types";
import axios from "axios";

export const getUsers = (title) => async (dispatch) => {
  console.log("the title in userActions is ", title)
  try {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=3123e26a&s=${title}&type=movie`
    );
    console.log("Output from res in userActions", res);
      if (res.data.Response === 'True') {
        dispatch({
      type: GET_USERS,
      payload: res.data,
      
    });
      } else {
        dispatch({
      type: USERS_ERROR,
      
    });
      }
    
  } catch (error) {
    
  }
};