import { combineReducers } from 'redux'
import eventReducer from './reducers/eventReducer'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
  users: userReducer,
  events: eventReducer
})

export default rootReducer;
