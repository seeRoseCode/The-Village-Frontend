import React, {Component} from 'react';
// import { Redirect, Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import logo from './images/village-logo-3.jpg'
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
      console.log("this is e: ", e.target.name)
      if (e.target.name === "username"){
        this.setState({user:{...this.state.user, username: e.target.value.toLowerCase()} })
      }
      else if (e.target.name === "password"){
        this.setState({user:{...this.state.user, password: e.target.value.toLowerCase()} })
      }
    }//WORKING

    handleSubmit = (e) => {
      e.preventDefault()
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
       console.log("this is what we sent: ", this.state.user)
       if (res.errors)
         this.setState({errors: res.errors})
       else{
         localStorage.setItem("token", res.jwt)
         this.props.history.push('/profile')
         }
       }
     )
    }//WORKING

    render(){

    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src={logo} /> Log-in to your account
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              {this.state.errors.map(error => <p>{error}</p>)}
              <Form.Input fluid icon='user' iconPosition='left' name='username' placeholder='Username' onChange={this.handleChange} />
              <Form.Input fluid icon='lock' iconPosition='left' name='password' placeholder='Password' type='password' onChange={this.handleChange}/>
              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='/create-account'>Sign Up</a>
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

let mapDispatchToProps = {
  // login
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
