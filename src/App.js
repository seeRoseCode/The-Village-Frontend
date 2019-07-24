import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// import { Container, Icon, Link, List, ListItem, Offcanvas, OffcanvasContainer, Navbar, NavbarContainer, NavbarSticky, Section, NavItem, NavbarDropdown } from 'uikit-react';
import HomeContainer from  "./components/Containers/HomeContainer"
import AboutContainer from "./components/Containers/AboutContainer"
import LoginContainer from  "./components/Containers/LoginContainer"
import CreateAccountContainer from  "./components/Containers/CreateAccountContainer"
import ProfileContainer from  "./components/Containers/ProfileContainer"
import VillageContainer from  "./components/Containers/VillageContainer"



function App(){
  return(

    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component = {About} />
        <Route path="/login" component={Login} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/profile" component={Profile} />
        <Route path="/my-village" component={Village} />
      </div>
    </Router>
  )
}
function Home(){
  return <HomeContainer />
}

function About(){
  return <AboutContainer/>
}

function Login(){
  return <LoginContainer />
}

function CreateAccount(){
  return <CreateAccountContainer />
}

function Profile(){
  return <ProfileContainer />
}

function Village(){
  return <VillageContainer />
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
    <NavLink to="/login" exact style={link} activeStyle={{background: 'darkblue'}}>Log In</NavLink>
    <NavLink to="/create-account" exact style={link} activeStyle={{background: 'darkblue'}}>Create Account</NavLink>
    <NavLink to="/my-village" exact style={link} activeStyle={{background: 'darkblue'}}>My Village</NavLink>
    <NavLink to="/profile" exact style={link} activeStyle={{background: 'darkblue'}}>Profile</NavLink>
    <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>LogOut</NavLink>
  </div>
  )
}




























export default App;





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
