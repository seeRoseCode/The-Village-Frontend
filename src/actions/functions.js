 import { LOGOUT, GET_CURRENT_USER, EDIT_USER, FIND_USER } from './types'
 const loginURL = 'http://localhost:3000/login'
 const profileURL = 'http://localhost:3000/profile'
 const usersURL = 'http://localhost:3000/users'

export function findUser(userId, history){
  return dispatch => {
    fetch(`${usersURL}/${userId}`)
    .then(res => res.json())
    .then(res => {
    dispatch({type: FIND_USER, user: res.user})
    history.push("/villager-profile")
    })
  }
}


export function editUser(data, history){
  console.log("did you just hit me?")
  return dispatch => {
    dispatch({type: EDIT_USER, user: data})
    history.push("/profile")
  }
}

export function logout(){
  localStorage.removeItem("token")
}

export function add_child(){
  console.log("add_child")
}

export function create_account(){
  console.log("create_account")
}

export function create_event(){
  console.log("Create Event")
}


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
        console.log(res)
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
