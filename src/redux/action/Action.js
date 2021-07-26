import {FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FALIUR} from './ActionTypes';

export const fetchUserRequest=()=>{
  return{
    type:FETCH_USER_REQUEST
  }
}
export const fetchUserSuccess=(userinfo)=>{
  return{
    type:FETCH_USER_SUCCESS,
    payload:userinfo
  }
}
export const fetchUserFailur=(error)=>{
  return{
    type:FETCH_USER_FALIUR,
    payload:error
  }
}
export const fetchDetail=()=>{
  return(dispatch)=>{
    dispatch(fetchUserRequest)
      fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json())
      .then((data)=>{
        const userinfo=data;
        dispatch(fetchUserSuccess(userinfo))
        })
        .catch((error)=>{
            const errormsg=error.message
            dispatch(fetchUserFailur(errormsg))
          })     
      }
    }

