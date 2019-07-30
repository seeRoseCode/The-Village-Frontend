import React, { Component } from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import CalendarContainer from '../Containers/CalendarContainer'
import VillagersContainer from '../Containers/VillagersContainer'
import PostsContainer from '../Containers/PostsContainer'
import { Container } from 'semantic-ui-react'


class VillageContainer extends Component{
  render(){
    return(
      <Container>
        <CalendarContainer />
        <VillagersContainer village={this.props.user.village} />
        <PostsContainer />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.users.user}
}

export default withRouter(connect(mapStateToProps, null)(VillageContainer));
