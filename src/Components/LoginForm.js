import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
const loginURL = 'http://localhost:3000/login'

class LoginForm extends Component{

    state = {
        username: "" ,
        password: "",
        errors: []
      }//COMPLETE


    handleChange = (e) => {
      if (e.target.name === "username"){
        this.setState({username: e.target.value})
      }
      else if (e.target.name === "password"){
        this.setState({password: e.target.value})
      }
    }//WORKING

    handleSubmit = (e) => {
      e.preventDefault()
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
      )}//WORKING

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

export default withRouter(connect(mapStateToProps)(LoginForm));
