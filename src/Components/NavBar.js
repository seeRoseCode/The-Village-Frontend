import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {withRouter, Link} from 'react-router-dom'

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.history.push("/")
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item as={Link} to='/' name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to='/about' name='About' active={activeItem === 'About'} onClick={this.handleItemClick} />
          { localStorage.getItem("token") ? null : <Menu.Item as={Link} to='/login' name='Login' active={activeItem === 'Login'} onClick={this.handleItemClick} />}
          { localStorage.getItem("token") ? null : <Menu.Item as={Link} to='/create-account' name='Create Account' active={activeItem === 'Create Account'} onClick={this.handleItemClick} />}
          { localStorage.getItem("token") ? <Menu.Item as={Link} to='/profile' name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick} /> : null}
          { localStorage.getItem("token") ? <Menu.Item as={Link} to='/my-village' name='My Village' active={activeItem === 'My Village'} onClick={this.handleItemClick} /> : null}

          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleLogout} />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}//COMPLETE

export default withRouter(NavBar);



//
// <Segment>
//   <img src='/images/wireframe/media-paragraph.png' alt="profile pic"/>
// </Segment>
