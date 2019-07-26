import { combineReducers } from 'redux'
import eventReducer from './eventReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  users: userReducer,
  events: eventReducer
})

export default rootReducer;
