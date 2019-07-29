import { combineReducers } from 'redux'
import eventReducer from './eventReducer'
import userReducer from './userReducer'
import villagerReducer from './villagerReducer'

const rootReducer = combineReducers({
  users: userReducer,
  events: eventReducer,
  villagers: villagerReducer
})

export default rootReducer;
