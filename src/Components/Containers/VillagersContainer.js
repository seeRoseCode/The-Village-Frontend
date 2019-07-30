import React, { Component } from 'react';
import Villager from '../Villager'
import {connect} from 'react-redux'
import { getCurrentUser } from '../../actions/functions'
import { withRouter } from 'react-router-dom'

class VillagersContainer extends Component{

  componentDidMount(){
    this.props.getCurrentUser()
  }

render(){

    return(
      <div className="ui link cards">
        {
          this.props.village &&
          this.props.village.map((vill) => <Villager villager={vill} />)
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VillagersContainer));
