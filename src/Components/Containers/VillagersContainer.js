import React, { Component } from 'react';
import Villager from '../Villager'
import {connect} from 'react-redux'
import { getCurrentUser } from '../../actions/functions'
import { withRouter } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

class VillagersContainer extends Component{

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    return(
      <Card.Group style={{overflow: 'auto'}}>
        {
          this.props.village &&
          this.props.village.map((vill) => <Villager villager={vill} />)
        }
        </Card.Group>
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
