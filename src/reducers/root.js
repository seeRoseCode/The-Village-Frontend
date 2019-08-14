import { combineReducers } from 'redux'
import userReducer from './userReducer'
import villagerReducer from './villagerReducer'

const rootReducer = combineReducers({
  users: userReducer,
  villagers: villagerReducer
})

export default rootReducer;
