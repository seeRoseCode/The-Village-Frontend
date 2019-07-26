import { LOGIN, LOGOUT, ADD_CHILD, CREATE_ACCOUNT, CREATE_EVENT } from '../actions/types'


const userState = {
  user:{}
}

const userReducer =  (state = userState, action) => {
  switch(action.type){
    case LOGIN: {
      return {...state, user: action.user}
    }
    case LOGOUT: {
      return {...state, user: userState}
    }
    case ADD_CHILD: {
      return {...state, user: action.user}
    }
    case CREATE_ACCOUNT: {
      return {...state, user: action.user}
    }
    case CREATE_EVENT: {
      return {}
    }
    default:
      return state
  }

}


export default userReducer;
