import React, { Component } from 'react';
import ProfileCard from '../ProfileCard'
import MyFamilyContainer from '../Containers/MyFamilyContainer'
import PostsContainer from '../Containers/PostsContainer'
import {connect} from 'react-redux'
import { getCurrentUser } from '../../actions/functions'
import { withRouter } from 'react-router-dom'
class ProfileContainer extends Component{

  componentDidMount(){
    this.props.getCurrentUser()
    //dispatch an action that fetches the current user from the backend and saves the store
  }

  logout = () => {
  localStorage.removeItem("token")
  this.props.history.push("/")
  }

  render(){
  console.log("profile cont: ", this.props)

    return(
      <div>
        <br/>
        <ProfileCard />
        <MyFamilyContainer />
        <PostsContainer />
        <button onClick={this.logout}>LOGOUT</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.users.user}
}


const mapDispatchToProps = {
  getCurrentUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer));
