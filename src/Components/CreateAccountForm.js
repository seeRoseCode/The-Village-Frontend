import React, {Component} from 'react';
const newUserURL = `http://localhost:3000/users`

class CreateAccountForm extends Component{

  state ={
      "name": "",
      "username": "",
      "address": "",
      "img_url": "",
      "age": 0,
      "birthday": null,
      "married": false,
      "adult": false,
      "parent": false,
      "password": ""
}

  handleChange = (e) => {
    switch(e.target.name){
      case "name":
        this.setState({name: e.target.value})
        break
      case "username":
        this.setState({username: e.target.value})
        break
      case "address":
        this.setState({address: e.target.value})
        break
      case "img_url":
        this.setState({img_url: e.target.value})
        break
      case "age":
        this.setState({age: e.target.value})
        break
      case "birthday":
        this.setState({birthday: e.target.value})
        break
      case "married":
        this.setState({married: true})
        break
      // case "adult":
      //   this.setState({adult: true})
      //   break
      case "parent":
        this.setState({parent: true})
        break
      case "password":
        this.setState({password: e.target.value})
        break
      default:
        return this.state
    }

  }


  handleSubmit = (e) => {
    if (this.state.age < 18 === true)
     {this.setState({adult: true})}
    else
     {this.setState({adult: false})}
      fetch(newUserURL, {
        method: "POST",
        headers: {
            "Content-Type": "Application/Json",
            "Accepts": "Application/Json"
        },
        body: JSON.stringify({user: this.state})

      })
  }

  render(){
    return(
      <div>
        <br/>
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
  }
}

export default CreateAccountForm;
