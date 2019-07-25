 import { LOGIN, LOGOUT, ADD_CHILD, CREATE_ACCOUNT, CREATE_EVENT } from '/types'
 const loginURL = 'http://localhost:3000/login'



export function login(){
  console.log("login")
  return dispatch => {
    fetch(loginURL,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/Json",
          "accepts": "Application/Json"
        },
        body: JSON.stringify({user: this.state})
      }
    )
    .then(res => res.json())
    .then(res => {
      if (res.errors)
        this.setState({errors: res.errors})
      else{
        localStorage.setItem("token", res.jwt)
        this.props.dispatch({type:"LOGIN", user: res.user})
        this.props.history.push('/profile')
        }
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
