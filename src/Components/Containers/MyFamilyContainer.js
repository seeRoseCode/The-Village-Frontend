import React, { Component } from 'react';
import Villager from '../Villager'
import {connect} from 'react-redux'
import { getCurrentUser } from '../../actions/functions'
import { withRouter } from 'react-router-dom'

class MyFamilyContainer extends Component{

  componentDidMount(){
    this.props.getCurrentUser()
  }

  renderVillagerCard = () => {
    console.log("the user", this.props.user.village)
    debugger
    this.props.user.village.forEach(function(villager){ <Vill member={vill}}
  }

  render(){
    return(
      <div>
      {this.renderVillagerCard()}
        {// <Villager />
        }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyFamilyContainer));
