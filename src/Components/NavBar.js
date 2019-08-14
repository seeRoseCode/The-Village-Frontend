import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import {withRouter, Link} from 'react-router-dom'
import logo from './images/village-logo-3.jpg'

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.history.push("/")
  }//WORKING

  logoHeader = () => {
    return <Image src={logo} avatar/>
  }//WORKING

  render() {
    const { activeItem } = this.state

    return (
      <div className="navBar">
        <Menu pointing secondary >
          <Menu.Item as={Link} to='/' name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to='/about' name='About' active={activeItem === 'About'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to='/browse-users' name='Browse' active={activeItem === 'Browse'} onclick={this.handleItemClick} />
          { localStorage.getItem("token") ? null : <Menu.Item as={Link} to='/create-account' name='Sign Up' active={activeItem === 'Sign Up'} onClick={this.handleItemClick} />}
          { localStorage.getItem("token") ? null : <Menu.Item as={Link} to='/login' name='Login' active={activeItem === 'Login'} onClick={this.handleItemClick} />}
          { localStorage.getItem("token") ? <Menu.Item as={Link} to='/profile' name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick} /> : null}
          { localStorage.getItem("token") ? <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleLogout} /> : null}
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/' id="my-village-nav-button" name='My Village' active={activeItem === 'My Village'}/>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }

}

export default withRouter(NavBar);
