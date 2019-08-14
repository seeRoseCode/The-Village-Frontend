import React, {Component} from 'react';
import { Container, Form, Grid, Header, Image, Segment, Checkbox, Button, Divider } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { getCurrentUser, editUser } from '.././actions/functions'
import logo from './images/village-logo-3.jpg'
const userURL =  `http://localhost:3000/users`

class EditForm extends Component{

 state ={
   user: {
     "name": this.props.user.name,
     "username": this.props.user.username,
     "address": this.props.user.address,
     "img_url": this.props.user.img_url,
     "age": this.props.user.age,
     "birthday": this.props.user.birthday,
     "married": this.props.user.married,
     "parent": this.props.user.parent,
     "password": this.props.user.password
   },
     "errors": []
}//COMPLETE

componentDidMount(){
  this.props.getCurrentUser()
}

 handleChange = (e) => {
   this.setState({
     user: {...this.state.user,
     [e.target.name]: e.target.value
     }
    })
  }//WORKING

 handleSubmit = (e) => {
   e.preventDefault()
   if ( this.props.user.children > 0) {
     this.setState({ parent: true })
     this.props.editUser(this.state, this.props.history)
    }

   /////////////////////////////////
     fetch(`${userURL}/${this.props.user.id}`,
       {
       method: "PATCH",
       headers: {
           "Content-Type": "Application/Json",
           "Accept-Type": "Application/Json"
       },
       body: JSON.stringify({user: this.state.user})
       })
       .then(res => res.json())
         this.props.history.push('/profile')
    }//WORKING

 render(){
   return(


     <Container className="form-container">
      <Grid textAlign='center' style={{ height: '100vh' }} >
       <Grid.Column style={{ maxWidth: 450 }}>
         <Header as='h2' color='teal' textAlign='center' className="form-header">
            <Image src={logo} size="small"/> Update your account
         </Header>
         <Form size='huge' onSubmit={this.handleSubmit}>
           <Segment piled>
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
               Update
             </Button>
           </Segment>
         </Form>
       </Grid.Column>
     </Grid>
    </Container>
   )
 }
}

let mapStateToProps = (state) => {
 return{
   user: state.users.user
 }
}

const mapDispatchToProps = (dispatch) => {
  return{
  getCurrentUser, editUser
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditForm));
