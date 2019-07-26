import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
const newUserURL = `http://localhost:3000/users`

class CreateAccountForm extends Component{

  state ={
    user: {
      "name": "",
      "username": "",
      "address": "",
      "img_url": "",
      "age": 0,
      "birthday": null,
      "married": false,
      "parent": false,
      "password": "",
    },
      "errors": []
}//COMPLETE

  handleChange = (e) => {

    this.setState({
      user: {...this.state.user,
      [e.target.name]: e.target.value
    }
    }, () => console.log("Updated State: ", this.state))

  }//WORKING

  handleSubmit = (e) => {
    e.preventDefault()

    if ( this.state.age > 18) {
      this.setState({ adult: true })
    } else {
      this.setState({ adult: false })
    }

    ///////////////////////////////////
      fetch(newUserURL, {
        method: "POST",
        headers: {
            "Content-Type": "Application/Json",
            "Accept-Type": "Application/Json"
        },
        body: JSON.stringify({user: this.state.user})

      }).then(res => res.json())
      .then(res => {
        if (res.errors)
          this.setState({...this.state, errors: res.errors})
        else {
          console.log("did you just hit me?")
          localStorage.setItem("token", res.jwt)
          this.props.history.push('/profile')
          this.props.dispatch({type:"LOGIN", user: res})
        }
      })
  }//WORKING

  render(){
    return(
      <div>
        <br/>
        {this.state.errors.map(error => <p>{error}</p>)}
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" onChange={this.handleChange}/>
          <br/>
          <label>Username</label>
          <input type="text" name="username" onChange={this.handleChange}/>
          <br/>
          <label>Password</label>
          <input type="text" name="password" onChange={this.handleChange}/>
          <br/>
          <label>Address</label>
          <input type="text" name="address" onChange={this.handleChange}/>
          <br/>
          <label>Age</label>
          <input type="number" name="age" onChange={this.handleChange}/>
          <br/>
          <label>Birthday</label>
          <input type="date" name="birthday" onChange={this.handleChange}/>
          <br/>
          <label>Parent</label>
          <input type="checkbox" name="parent" onChange={this.handleChange}/>
          <br/>
          <label>Married</label>
          <input type="checkbox" name="married" onChange={this.handleChange}/>
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

export default withRouter(connect(mapStateToProps)(CreateAccountForm));
