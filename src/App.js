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
import VillagerProfile from './components/VillagerProfile'
import { getCurrentUser } from './actions/functions'

class App extends Component{

  componentDidMount(){
    if (localStorage.getItem("token")) {
      this.props.getCurrentUser()
    }
    //dispatch an action that fetches the current user from the backend and saves the store
  }

 render(){

   return(

      <div>
      <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/about" component = {AboutContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/create-account" component={CreateAccountContainer} />
          <Route exact path="/profile" component={ProfileContainer} />
          <Route exact path="/my-village" component={VillageContainer} />
          <Route exact path="/edit-profile" component={EditContainer} />
          <Route exact path="/villager-profile/:id" component={VillagerProfile} />
        </Switch>
      </div>
    )
  }
}


function Header() {
  return (
    Navbar()
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

const Navbar = () => {

  return(
  <div>
    <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
    <NavLink to="/about" exact style={link} activeStyle={{background: 'darkblue'}}>About Us</NavLink>
    { localStorage.getItem("token") ? null : <NavLink to="/login" exact style={link} activeStyle={{background: 'darkblue'}}>Log In</NavLink> }
    { localStorage.getItem("token") ? null : <NavLink to="/create-account" exact style={link} activeStyle={{background: 'darkblue'}}>Create Account</NavLink>}
    { localStorage.getItem("token") ? <NavLink to="/my-village" exact style={link} activeStyle={{background: 'darkblue'}}>My Village</NavLink> : null}
    { localStorage.getItem("token")  ? <NavLink to="/profile" exact style={link} activeStyle={{background: 'darkblue'}}>Profile</NavLink> : null}
  </div>
  )
}

const mapStateToProps = (state) => {
  return {user: state.users.user}
}

let mapDispatchToProps = {
  getCurrentUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));





//   <NavbarSticky>
//   <NavbarContainer>
//   <Navbar left>
//   <NavItem>
//   <Link>Home</Link>
// {  // <NavbarDropdown>
  //   // <NavItem>
  //   // <Link href="#">Link</Link>
  //   // </NavItem>
  //   // </NavbarDropdown>
  // }
  //   </NavItem>
  //   <NavItem>
  //     <Link href="/">Home</Link>
  //   </NavItem>
  //   <NavItem>
  //   <Link href="#">Link</Link>
  //   </NavItem>
  //   </Navbar>
  //   </NavbarContainer>
  //   </NavbarSticky>
