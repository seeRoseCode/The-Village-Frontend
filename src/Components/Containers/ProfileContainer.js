import React, { Component } from 'react';
import ProfileCard from '../ProfileCard'
import MyFamilyContainer from '../Containers/MyFamilyContainer'
import PostsContainer from '../Containers/PostsContainer'
import {connect} from 'react-redux'
import { getCurrentUser } from '../../actions/functions'
import { withRouter } from 'react-router-dom'
import { Grid, Image } from 'semantic-ui-react'

class ProfileContainer extends Component{

  componentDidMount(){
    console.log("this is the current user: ", this.props.user)
    this.props.getCurrentUser()
  }


  logout = () => {
  localStorage.removeItem("token")
  this.props.history.push("/")
  }

  render(){
    if (Object.keys(this.props.user).length > 0) {
    return(
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <ProfileCard thisUser={this.props.user} />
        </Grid.Row>
        <Grid.Row>
          <MyFamilyContainer family={this.props.user.family}/>
        </Grid.Row>
        <Grid.Row>
          <PostsContainer />
        </Grid.Row>
      </Grid>
    )
  }
    else
      return null
  }
}

const mapStateToProps = (state) => {
  return { user: state.users.user}
}


const mapDispatchToProps = {
  getCurrentUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer));





// <div>
//   <br/>
//   <br/>
// </div>
