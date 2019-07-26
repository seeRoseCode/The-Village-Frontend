import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { login } from '../actions/functions'
const loginURL = 'http://localhost:3000/login'

class LoginForm extends Component{

    state = {
        username: "" ,
        password: ""
    }//COMPLETE


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
     this.props.login(this.state, this.props.history)
    }//WORKING

    render(){

    return(
      <div>
        // <form onSubmit={() => this.props.dispatch({type: "LOGIN", user: this.state })}>
          <form onSubmit={this.handleSubmit}/>
          <br/>
          {/*this.state.errors.map(error => <p>{error}</p>)*/}
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
