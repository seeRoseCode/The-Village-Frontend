import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

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
  return <h2>Home</h2>
}

function About(){
  return <h2>About</h2>
}

function Login(){
  return <h2>Login</h2>
}

function CreateAccount(){
  return <h2>Create Account</h2>
}

function Profile(){
  return <h2>User's ind. profile or profile of users not signed in yet</h2>
}

function Village(){
  return <h2>My Village</h2>
}

function Header() {
  return (
    Navbar()
    // <ul>
    //   <li>
    //     <NavLink to="/">Home</NavLink>
    //   </li>
    //   <li>
    //     <Link to="/about">About Us</Link>
    //   </li>
    //   <li>
    //     <Link to="/login">Login</Link>
    //   </li>
    //   <li>
    //     <Link to="/create-account">Create Account</Link>
    //   </li>
    //   <li>
    //     <Link to="/profile"> Profile </Link>
    //   </li>
    //   <li>
    //     <Link to="/my-village">My Village</Link>
    //   </li>
    //   <li>
    //     <Link to="/">Log Out</Link>
    //   </li>
    // </ul>
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
