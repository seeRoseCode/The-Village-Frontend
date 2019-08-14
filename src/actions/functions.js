 import { GET_CURRENT_USER, EDIT_USER, FIND_USER, UPDATE_USER_STATUS, UPDATE_VILLAGER_STATUS, FETCH_USERS } from './types'
 const profileURL = 'http://localhost:3000/profile'
 const usersURL = 'http://localhost:3000/users'
 const villageURL = 'http://localhost:3000/connections'

////////////////////////////////////////////////////////////////////////////////
export function addToVillage(mainUserId, villagerId){
  return dispatch => {
  fetch(villageURL, {
    method: "POST",
    headers: {
        "Content-Type": "Application/Json",
        "Accept-Type": "Application/Json"
    },
    body: JSON.stringify({user_id: mainUserId, connected_user_id: villagerId})

    }).then(res => res.json())
  }
}//WORKING

////////////////////////////////////////////////////////////////////////////////
export function fetchUsers(){
  return dispatch => {
    fetch(usersURL)
    .then(res => res.json())
    .then(res => {
      let newArray = shuffle(res)
      dispatch({type: FETCH_USERS, allUsers: newArray})
    })
  }
}//WORKING

////////////////////////////////////////////////////////////////////////////////
export function updateVillagerStatus(userId, userStatus){
  console.log("user id: ", userId, "user Status: ", userStatus)
  return dispatch => {
    fetch(`${usersURL}/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({status: userStatus})
      })
      .then(res => res.json())
      .then(res => {
        dispatch({type: UPDATE_VILLAGER_STATUS, user: res})
      })
    }
}//WORKING (form itself is infested)

////////////////////////////////////////////////////////////////////////////////
export function updateUserStatus(userId, userStatus){
  return dispatch => {
    fetch(`${usersURL}/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({status: userStatus})
      })
      .then(res => res.json())
      .then(res => {
        dispatch({type: UPDATE_USER_STATUS, user: res})
      })
  }
}//WORKING

////////////////////////////////////////////////////////////////////////////////
export function findUser(data){
  return dispatch => {
    fetch(`${usersURL}/${data.id}`)
    .then(res => res.json())
    .then(res => {
    dispatch({type: FIND_USER, villager: res})
    })
  }
}//WORKING

////////////////////////////////////////////////////////////////////////////////
export function editUser(data, history){
  return dispatch => {
    dispatch({type: EDIT_USER, user: data})
    history.push("/profile")
  }
}//WORKING

////////////////////////////////////////////////////////////////////////////////
export function getCurrentUser(){
  return dispatch => {
    fetch(profileURL, {
      method: 'GET',
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    })
    .then(res => res.json())
    .then(res => {
        dispatch({type: GET_CURRENT_USER, user: res.user})

    })
  }
}//WORKING

//////////////////////////////HELPERS///////////////////////////////////////////
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}//WORKING
