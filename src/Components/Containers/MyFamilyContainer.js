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
    console.log("the user's village", this.props.user.village)
    // debugger
    // let arr = this.props.user.village
    // arr.map( (vill) => return <Villager member={vill} />)
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyFamilyContainer));
