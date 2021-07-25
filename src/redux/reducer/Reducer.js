
import {FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FALIUR} from '../action/ActionTypes';

const initialstate={
  userinfo:[],
  error:"",
  isloading:true
}
export const Reducer=(state=initialstate,action)=>{
  console.log(action.payload)
  switch(action.type)
  {
    case FETCH_USER_REQUEST:
      return{
        isloading:true,
        userinfo:[]
      }
    case FETCH_USER_SUCCESS:
      return {
        isloading:false,
        userinfo:action.payload,
        error:""
      }
    case FETCH_USER_FALIUR:
      return{
        isloading:false,
        userinfo:[],
        error:action.payload,
      }
      default:
        return state;

  }
}