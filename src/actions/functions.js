 import { LOGIN, LOGOUT, GET_CURRENT_USER } from './types'
 const loginURL = 'http://localhost:3000/login'
 const profileURL = 'http://localhost:3000/profile'



export function login(data, history){
  console.log("login ", data)
  return dispatch => {
    console.log("inside dispatch")
    fetch(loginURL,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/Json",
          "Accept-Type": "Application/Json"
        },
        body: JSON.stringify({user: data})
      }
    )
    .then(res => res.json())
    .then(res => {
      // if (res.errors)
      // // console.log(res.errors)
      //   // this.setState({errors: res.errors})
      // else{
      console.log("res: ", res)
        localStorage.setItem("token", res.jwt)
        dispatch({type: LOGIN, user: res.user})
        history.push('/profile')
        console.log("this thing: ", res.user)
        // history.push('/profile')
        // }
      }
    )
  }
}

export function logout(){
  localStorage.removeItem("token")
  console.log("logout")
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
