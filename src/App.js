import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
// import { Container, Icon, Link, List, ListItem, Offcanvas, OffcanvasContainer, Navbar, NavbarContainer, NavbarSticky, Section, NavItem, NavbarDropdown } from 'uikit-react';
import HomeContainer from  "./components/Containers/HomeContainer"
import AboutContainer from "./components/Containers/AboutContainer"
import LoginContainer from  "./components/Containers/LoginContainer"
import CreateAccountContainer from  "./components/Containers/CreateAccountContainer"
import ProfileContainer from  "./components/Containers/ProfileContainer"
import VillageContainer from  "./components/Containers/VillageContainer"
import EditContainer from './components/Containers/EditContainer.js'
import AllUsersContainer from './components/Containers/AllUsersContainer'
// import VillagerProfile from './components/VillagerProfile'
import { getCurrentUser, fetchUsers} from './actions/functions'
import NavBar from './components/NavBar'
// import { Divider } from 'semantic-ui-react'
import './stylesheets/App.css'

class App extends Component{

  componentDidMount(){
    if (localStorage.getItem("token")) {
      this.props.getCurrentUser()
      this.props.fetchUsers()
    }
    //dispatch an action that fetches the current user from the backend and saves the store
  }

 render(){

   return(

      <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/about" component = {AboutContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/create-account" component={CreateAccountContainer} />
          <Route exact path="/profile" component={ProfileContainer} />
          <Route exact path="/my-village" component={VillageContainer} />
          <Route exact path="/edit-profile" component={EditContainer} />
          {
          // <Route exact path="/villager-profile/:id" component={VillagerProfile} />
          }
          <Route exact path="/browse-users" component={AllUsersContainer} />
        </Switch>
      </div>
    )
  }
}


function Header() {
  return (
    <NavBar />
  );
}

const link = {//STAND IN STYLING. NEEDS CHANGING!
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}


const mapStateToProps = (state) => {
  return {user: state.users.user}
}

let mapDispatchToProps = {
  getCurrentUser, fetchUsers
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
