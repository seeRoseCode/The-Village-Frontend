 import { GET_CURRENT_USER, EDIT_USER, FIND_USER, UPDATE_USER_STATUS, UPDATE_VILLAGER_STATUS } from './types'
 // const loginURL = 'http://localhost:3000/login'
 const profileURL = 'http://localhost:3000/profile'
 const usersURL = 'http://localhost:3000/users'

////////////////////////////////////////////////////////////////////////////////
export function updateVillagerStatus(userId, userStatus){
  return dispatch => {
    // debugger;

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
        console.log("did we get a response?", res)
        // dispatch({type: UPDATE_VILLAGER_STATUS, villager: res})
      })
  }
}


////////////////////////////////////////////////////////////////////////////////
export function updateUserStatus(data){
  return dispatch => {
    debugger;

    fetch(`${usersURL}/${data}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => {
        dispatch({type: UPDATE_USER_STATUS, user: res})
      })
  }
}


////////////////////////////////////////////////////////////////////////////////
export function findUser(data){
  return dispatch => {
    fetch(`${usersURL}/${data.id}`)
    .then(res => res.json())
    .then(res => {
    dispatch({type: FIND_USER, villager: res})
    })
  }
}

////////////////////////////////////////////////////////////////////////////////
export function editUser(data, history){
  return dispatch => {
    dispatch({type: EDIT_USER, user: data})
    history.push("/profile")
  }
}

////////////////////////////////////////////////////////////////////////////////
export function add_child(){
  console.log("add_child")
}

////////////////////////////////////////////////////////////////////////////////
export function create_account(){
  console.log("create_account")
}

////////////////////////////////////////////////////////////////////////////////
export function create_event(){
  console.log("Create Event")
}

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
}


////////////////////////////////////UNUSED//////////////////////////////////////


// export function login(data, history){
  //   return dispatch => {
    //     fetch(loginURL,
      //       {
        //         method: "POST",
        //         headers: {
          //           "Content-Type": "Application/Json",
          //           "Accept-Type": "Application/Json"
          //         },
          //         body: JSON.stringify({user: data})
          //       }
          //     )
          //     .then(res => res.json())
          //     .then(res => {
            //         localStorage.setItem("token", res.jwt)
            //         dispatch({type: LOGIN, user: res.user})
            //         history.push('/profile')
            //         console.log("this thing: ", res.user)
            //         // history.push('/profile')
            //         // }
            //       }
            //     )
            //   }
            // }
