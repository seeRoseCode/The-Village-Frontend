import { LOGIN_ACTION, LOGOUT_ACTION, ADD_CHILD, CREATE_ACCOUNT } from '../actions/types'

const userState = {
  logged_in: false,
  user: {id: 0,
  name: "",
  username: "",
  address: "",
  img_url: "",
  age: 1,
  birthday: null,
  parent: false,
  married: false,
  lost: false,
  adult: true,
  village: [],
  children: [],
  parents: []
  }
}

userReducer = (state = userState, action) => {
  switch(action.type){
    case LOGIN_ACTION
      return {...state, user: action.payload, loggedIn: true}
    case LOGOUT_ACTION
      return firstState
    case ADD_CHILD
      return {...state, user: action.payload, loggedIn: false}
    case CREATE_ACCOUNT
      return {...state, user: action.payload, loggedIn: true}
    case CREATE_EVENT
      return {}
    default:
      return state
  }

}
