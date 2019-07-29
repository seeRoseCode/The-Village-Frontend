import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { getCurrentUser, editUser } from '.././actions/functions'
const userURL =  `http://localhost:3000/users`
// const newUserURL = `http://localhost:3000/users`

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
  // console.log("the current user: ", this.props.user)
}

 handleChange = (e) => {
   this.setState({
     user: {...this.state.user,
     [e.target.name]: e.target.value
     }
    })
}

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
    }

 render(){
   return(
     <div>
       <br/>
       {this.state.errors.map(error => <p>{error}</p>)}
       <form onSubmit={this.handleSubmit}>
         <label>Name</label>
         <input type="text" name="name" placeHolder={this.props.user.name} onChange={this.handleChange}/>
         <br/>
         <label>Username</label>
         <input type="text" name="username" placeHolder={this.props.user.username} onChange={this.handleChange}/>
         <br/>
         <label>Address</label>
         <input type="text" name="address" placeHolder={this.props.user.address}  onChange={this.handleChange}/>
         <br/>
         <label>Age</label>
         <input type="number" name="age" placeHolder={this.props.user.age} onChange={this.handleChange}/>
         <br/>
         <label>Birthday</label>
         <input type="date" name="birthday" placeHolder={this.props.user.birthday} onChange={this.handleChange}/>
         <br/>
         <label>Married</label>
         <input type="checkbox" name="married" placeHolder={this.props.user.married} onChange={this.handleChange}/>
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

const mapDispatchToProps = (dispatch) => {
  return{
  getCurrentUser, editUser
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditForm));
