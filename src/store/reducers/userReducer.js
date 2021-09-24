import { GET_USERS, USERS_ERROR } from "../types";

const initialState = {
  users: [],
  loading: true,
  error: false
};

export default function (state = initialState, action) {
  console.log("printing action.payload in reducer", action.payload);
  console.log("type", action.type);
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload.Search,
        loading: false
      };
    case USERS_ERROR:
      return {
        ...state,
        loading: false,
        users:[],
        error: true
      };
    default:
      return state;
  }
}
