import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import defaultImg from './images/defaultImg.png'
import PanicButton from './PanicButton'
import { Image, Card, Button, Header, Divider, Item } from 'semantic-ui-react'
// import {Redirect} from 'react-router-dom'
const div = document.querySelector(".profile-card")


class ProfileCard extends Component {


  handleEdit = () => {
    this.props.history.push('/edit-profile')
  }//WORKING

  renderImg = () => {
    if (this.props.thisUser.img_url === null || this.props.thisUser.img_url === "" || this.props.thisUser.img_url === undefined){
      return <Item.Image src={defaultImg} size="big" alt="profile pic here" circular/>
      }
    else {
      return <Item.Image src={this.props.thisUser.img_url} size="big" alt="profile pic here" />
    }
  }//WORKING

  renderEditButton = () => {
    if (this.props.user === this.props.thisUser){
      return <Button onClick={this.handleEdit}>EDIT</Button>
    }
  }//WORKING


  render(){
    if (Object.keys(this.props.user).length > 0) {

    return(
      <Item floated="right">
        {this.renderImg()}
        <Divider/>
        <Header >{this.props.thisUser.name}</Header>
        <Item.Meta>{this.props.thisUser.age} years old</Item.Meta>
        <PanicButton thisUser={this.props.user} />
        {this.renderEditButton()}
      </Item>
    )

    }
    else
      return null
  }
}

const mapStateToProps = (state) => {
  return {user: state.users.user}
}

export default withRouter(connect(mapStateToProps, null)(ProfileCard));
