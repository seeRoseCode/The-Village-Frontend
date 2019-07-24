import React, {Component} from 'react';
const loginURL = 'http://localhost:3000/login'
// import LoginForm from '../LoginForm'

class LoginForm extends Component{

    state = {
        username: "" ,
        password: ""
      }


    handleChange = (e) => {
      if (e.target.name === "username"){
        console.log("look how far we've come!", e.target.name )
        this.setState({username: e.target.value})
      }
      else if (e.target.name === "password"){
        console.log("look how far we've come!", e.target.name )
        this.setState({password: e.target.value})
      }
    }

    handleSubmit = (e) => {
      e.preventDefault()
      console.log("n**** we made it!")
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



    }

    render(){

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <br/>
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
  }
}

export default LoginForm;
