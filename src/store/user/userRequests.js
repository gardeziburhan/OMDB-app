import { FETCH_USER_FAILURE,FETCH_USER_SUCCESS,FETCH_USER_REQUEST } from "./userTypes";

const initialState ={
  loading: false,
  movies: action.payload,
  error : ''
  
}


const reducer =(state = initialState, action) =>{
  switch(action){
    case FETCH_USER_REQUEST:
      return{
        ...state,
        loading : true
      }
      case FETCH_USER_SUCCESS:
        return{
          loading: false,
          movies: action.payload,
          error: ''
        }
      case FETCH_USER_FAILURE:
        return{
          loading: false,
          movies: [],
          error: action.payload
        }
  }
}
export default reducer