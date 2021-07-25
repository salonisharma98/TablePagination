import {combineReducers} from 'redux';
import {Reducer} from './Reducer';
const allReducer=combineReducers({
    userReducer:Reducer
})

export default allReducer;