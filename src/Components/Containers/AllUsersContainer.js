import React, { Component } from 'react';
import BrowseCard from '../BrowseCard'
import Search from '../Search'
import {connect} from 'react-redux'
import { fetchUsers } from '../../actions/functions'
import { withRouter } from 'react-router-dom'
import { Card, Divider } from 'semantic-ui-react'

class AllUsersContainer extends Component{

  componentDidMount(){
    this.props.fetchUsers()
  }



  render(){
    let users = this.props.allUsers
    if (Object.keys(users).length > 0) {
    return(
      <div>
      <h1>BROWSE VILLAGERS</h1>
      <Divider/>
      <Search />
      <Card.Group classId="card-group" itemsPerRow={6}>
      {
        users &&
        users.map((vill) => <BrowseCard villager={vill} />)
      }
      </Card.Group>
      </div>
    )
  }
    else
      return null
  }
}

const mapStateToProps = (state) => {
  return { allUsers: state.users.allUsers }
}


const mapDispatchToProps = {
  fetchUsers
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllUsersContainer));
