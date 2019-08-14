import React, { Component } from 'react';
import Villager from '../Villager'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../../stylesheets/App.css'

class MyFamilyContainer extends Component{
  render(){
    return(
      <div className="scrolling-wrapper">
      {
        this.props.user.village &&
        this.props.user.village.map((vill) => <Villager villager={vill} />)
      }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { user: state.users.user}
}



export default withRouter(connect(mapStateToProps)(MyFamilyContainer));
