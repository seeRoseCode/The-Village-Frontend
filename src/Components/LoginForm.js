import React, {Component} from 'react';
// import { Redirect, Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { login } from '../actions/functions'
const loginURL = 'http://localhost:3000/login'

class LoginForm extends Component{

    state = {
      errors: [],
      user:{
        username: "" ,
        password: ""
      }
    }//COMPLETE

    componentDidCatch(){
      this.setState({hasError: true})
    }

    handleChange = (e) => {
      if (e.target.name === "username"){
        this.setState({ username: e.target.value })
      }
      else if (e.target.name === "password"){
        this.setState({ password: e.target.value })
      }
    }//WORKING

    handleSubmit = (e) => {
      e.preventDefault()
     // this.props.login(this.state, this.props.history)


     fetch(loginURL,
       {
         method: "POST",
         headers: {
           "Content-Type": "Application/Json",
           "Accept-Type": "Application/Json"
         },
         body: JSON.stringify({user: this.state.user})
       }
     )
     .then(res => res.json())
     .then(res => {
       if (res.errors)
         this.setState({errors: res.errors})
       else{
         localStorage.setItem("token", res.jwt)
         // dispatch({type: LOGIN, user: res.user})
         this.props.history.push('/profile')
         console.log("log in: ", res.user)
         // history.push('/profile')
         }
       }
     )





    }//WORKING

    render(){

    return(
      <div>
          <form onSubmit={this.handleSubmit}>
          <br/>
          {this.state.errors.map(error => <p>{error}</p>)}
          <br/>
          <label>Username</label>
          <input type="text" name="username" onChange={this.handleChange}/>
          <br/>
          <label>Password</label>
          <input type="text" name="password" onChange={this.handleChange}/>
          <br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }//WORKING
}

let mapStateToProps = (state) => {
  return{
    user: state.users.user
  }
}

let mapDispatchToProps = {
  login
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
