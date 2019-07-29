import React, { Component } from 'react'
import { findUser } from '../actions/functions'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import ProfileCard from './ProfileCard'
import MyFamilyContainer from './Containers/MyFamilyContainer'
class VillagerProfile extends Component{

  componentDidMount(){
    this.props.findUser(this.props.match.params)
  }


  render(){
    console.log("the villager profile page")
    return(
      <div>
        <h1>Individual Villager Profile</h1>
        <ProfileCard thisUser={this.props.user} />
      </div>
    )
  }
}

const mapStateToProps= (state) => {
  return {user: state.villagers.villager}
}
const mapDispatchToProps = {
  findUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VillagerProfile));
