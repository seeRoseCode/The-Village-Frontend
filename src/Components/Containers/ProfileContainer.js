import React, { Component } from 'react';
import ProfileCard from '../ProfileCard'
import MyFamilyContainer from '../Containers/MyFamilyContainer'
import {connect} from 'react-redux'
import { getCurrentUser } from '../../actions/functions'
import { withRouter } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

class ProfileContainer extends Component{

  componentDidMount(){
    this.props.getCurrentUser()
  }


  logout = () => {
  localStorage.removeItem("token")
  this.props.history.push("/")
  }


  render(){
    if (Object.keys(this.props.user).length > 0) {
    return(
      <div>
      <Grid className="profile-container" divided="vertically">
        <Grid.Row columns={2}>
          <ProfileCard thisUser={this.props.user} />
        </Grid.Row>
        <Grid.Row>
          <MyFamilyContainer family={this.props.user.family}/>
        </Grid.Row>
      </Grid>
      </div>
    )
  }
    else
      return null
  }
}

const mapStateToProps = (state) => {
  return { user: state.users.user, thisUser: state.villagers.villager}
}


const mapDispatchToProps = {
  getCurrentUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer));
