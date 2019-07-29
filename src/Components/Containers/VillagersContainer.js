import React, { Component } from 'react';
import Villager from '../Villager'
import {connect} from 'react-redux'
import { getCurrentUser } from '../../actions/functions'
import { withRouter } from 'react-router-dom'

class VillagersContainer extends Component{

  componentDidMount(){
    this.props.getCurrentUser()
  }

  renderVillagerCard = () => {
    console.log("the user", this.props.user.village)
    // this.props.user.village.map(villager => <Villager member={villager})
  }
render(){

    return(
      <div>
        {this.renderVillagerCard()}
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VillagersContainer));
