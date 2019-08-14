import React, { Component } from 'react'
import { findUser } from '../actions/functions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ProfileCard from './ProfileCard'
class VillagerProfile extends Component{

  componentDidMount(){
    this.props.findUser(this.props.match.params)
  }


    render(){
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
