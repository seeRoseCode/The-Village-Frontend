import { FIND_USER } from '../actions/types'

const villagerState = {
  villager:{}
}

const villagerReducer = (state = villagerState, action) => {
  switch(action.type){
    case FIND_USER:
      return {villager: action.villager}
    default:
    return state
  }
}


export default villagerReducer;
