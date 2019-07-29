import React, { Component } from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import CalendarContainer from '../Containers/CalendarContainer'
import VillagersContainer from '../Containers/VillagersContainer'
import PostsContainer from '../Containers/PostsContainer'


class VillageContainer extends Component{
  render(){
    return(
      <div>
        <CalendarContainer />
        <VillagersContainer village={this.props.user.village} />
        <PostsContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.users.user}
}

export default withRouter(connect(mapStateToProps, null)(VillageContainer));
