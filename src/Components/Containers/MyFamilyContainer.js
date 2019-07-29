import React, { Component } from 'react';
import Villager from '../Villager'
import {connect} from 'react-redux'
import {  } from '../../actions/functions'
import { withRouter } from 'react-router-dom'

class MyFamilyContainer extends Component{



  render(){
    return(
      <div>
      {
        this.props.family &&
        this.props.family.members.map((vill) => <Villager villager={vill} />)
      }
      </div>
    )
  }

}



const mapStateToProps = (state) => {
  return { user: state.users.user}
}


const mapDispatchToProps = {

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyFamilyContainer));
