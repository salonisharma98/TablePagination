import {FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FALIUR} from './ActionTypes';
  import axios from 'axios'

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
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      const userinfo=response.data
      console.log(userinfo)
   dispatch(fetchUserSuccess(userinfo)) 
    }).catch((error)=>{
      const errormsg=error.message
      dispatch(fetchUserFailur(errormsg))
    })
  }
  }

