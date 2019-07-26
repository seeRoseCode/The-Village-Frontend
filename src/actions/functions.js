 import { LOGIN, LOGOUT, ADD_CHILD, CREATE_ACCOUNT, CREATE_EVENT } from './types'
 const loginURL = 'http://localhost:3000/login'



export function login(data, history){
  console.log("login ", data)
  return dispatch => {
    fetch(loginURL,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/Json",
          "accepts": "Application/Json"
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
        localStorage.setItem("token", res.jwt)
        dispatch({type: LOGIN, user: res.user})
        history.push('/profile')
        // }
      }
    )
  }

}

export function logout(){
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
