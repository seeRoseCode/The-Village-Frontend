import React, { Component } from 'react';
import Villager from '../Villager'
import {connect} from 'react-redux'
import { getCurrentUser } from '../../actions/functions'
import { withRouter } from 'react-router-dom'

class MyFamilyContainer extends Component{

  // componentDidMount(){
  //   this.props.getCurrentUser()
  //   console.log("the user: ", this.props.user)
  // }


  render(){
    return(
      <div>
      {
        this.props.user.village &&
        this.props.user.village.map((vill) => <Villager />)
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


/////////////////////////////UNUSED/////////////////////////////////////////////

// renderVillagerCard = () => {
  //   console.log("the user's village", this.props.user.village)
  //     let arr = this.props.user.village
  //     arr.map( (vill) => <Villager />)
  // }
