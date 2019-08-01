import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { Button, Form, Grid, Header, Image, Message, Segment, Checkbox, Divider} from 'semantic-ui-react'
import logo from './images/village-logo-3.jpg'

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
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>

          <Header as='h2' color='teal' textAlign='center'>
             <Image src={logo} size="small"/> Create a new account
          </Header>
          <Form size='huge' onSubmit={this.handleSubmit}>
            <Segment stacked>
              {this.state.errors.map(error => <p>{error}</p>)}
              <Form.Input fluid  label="Name" name='name' placeholder='Name' onChange={this.handleChange} />
              <Form.Input fluid  label="Username" name='username' placeholder='Username' onChange={this.handleChange}/>
              <Form.Input fluid  label="Password" name='password' placeholder='Password' type='password' onChange={this.handleChange}/>
              <Form.Input fluid  label="Address" name='address' placeholder='Address' onChange={this.handleChange}/>
              <Form.Input fluid  label="Age" name='age' placeholder='Age' onChange={this.handleChange}/>
              <Form.Input fluid  label="Birthday" name='birthday' placeholder='Password' type="date" onChange={this.handleChange}/>
              <Checkbox fluid slider color="teal" label="Married" name='married' onChange={this.handleChange}/><br/><br/>
              <Checkbox fluid slider color="teal" label="Parent" name='parent' onChange={this.handleChange}/>
              <Divider/>
              <Button color='teal' type="submit" fluid size='large'>
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            Already a member? <a href='/login'>Login</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }//WORKING

}

let mapStateToProps = (state) => {
  return{
    user: state.users.user
  }
}

export default withRouter(connect(mapStateToProps)(CreateAccountForm));















// <div>
//   <br/>
//   {this.state.errors.map(error => <p>{error}</p>)}
//   <form onSubmit={this.handleSubmit}>
//     <label>Name</label>
//     <input type="text" name="name" onChange={this.handleChange}/>
//     <br/>
//     <label>Username</label>
//     <input type="text" name="username" onChange={this.handleChange}/>
//     <br/>
//     <label>Password</label>
//     <input type="text" name="password" onChange={this.handleChange}/>
//     <br/>
//     <label>Address</label>
//     <input type="text" name="address" onChange={this.handleChange}/>
//     <br/>
//     <label>Age</label>
//     <input type="number" name="age" onChange={this.handleChange}/>
//     <br/>
//     <label>Birthday</label>
//     <input type="date" name="birthday" onChange={this.handleChange}/>
//     <br/>
//     {
//     // <label>Parent</label>
//     // <input type="checkbox" name="parent" onChange={this.handleChange}/>
//     // <br/>
//     }
//     <label>Married</label>
//     <input type="checkbox" name="married" onChange={this.handleChange}/>
//     <br/>
//     <input type="submit"/>
//   </form>
// </div>
