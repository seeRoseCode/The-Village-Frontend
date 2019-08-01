import { ADD_TO_VILLAGE, FETCH_USERS, ADD_CHILD, CREATE_ACCOUNT, CREATE_EVENT, GET_CURRENT_USER, EDIT_USER, UPDATE_USER_STATUS} from '../actions/types'


const userState = {
  user:{},
  allUsers:[]
}

const userReducer =  (state = userState, action) => {
  switch(action.type){
    case ADD_CHILD:
      return {...state, user: action.user}
    case CREATE_ACCOUNT:
      return {...state, user: action.user}
    case CREATE_EVENT:
      return {}
    case GET_CURRENT_USER:
      return {...state, user: action.user}
    case EDIT_USER:
      return {...state, user: action.user}
    case UPDATE_USER_STATUS:
      return {...state, user: action.user}
    case FETCH_USERS:
      return {...state, allUsers: action.allUsers}
    case ADD_TO_VILLAGE:
      return {...state}
    default:
      return state
  }

}


export default userReducer;
