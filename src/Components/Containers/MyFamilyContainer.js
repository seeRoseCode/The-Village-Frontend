import React, { Component } from 'react';
import Villager from '../Villager'
import {connect} from 'react-redux'
import {  } from '../../actions/functions'
import { withRouter } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

class MyFamilyContainer extends Component{



  render(){
    return(
      <Card.Group>
      {
        this.props.family &&
        this.props.family.members.map((vill) => <Villager villager={vill} />)
      }
      </Card.Group>
    )
  }

}



const mapStateToProps = (state) => {
  return { user: state.users.user}
}


const mapDispatchToProps = {

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyFamilyContainer));
