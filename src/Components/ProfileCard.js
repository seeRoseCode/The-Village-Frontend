import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import defaultImg from './defaultImages/defaultImg.png'
import PanicButton from './PanicButton'
import { Image, Card, Button, Header } from 'semantic-ui-react'
// import {Redirect} from 'react-router-dom'



class ProfileCard extends Component {

  handleEdit = () => {
    this.props.history.push('/edit-profile')
  }

  renderImg = () => {
    if (this.props.thisUser.img_url === null || this.props.thisUser.img_url === "" || this.props.thisUser.img_url === undefined){
      return <Image src={defaultImg} size="huge" alt="profile pic here" circular/>
      }
    else {
      return <Image src={this.props.thisUser.img_url} size="big" alt="profile pic here" circular/>
    }
  }

  renderEditButton = () => {
    console.log("the logged in user: ", this.props.user)
    if (this.props.user === this.props.thisUser){
      return <Button onClick={this.handleEdit}>edit</Button>
    }
  }

  render(){
    return(
      <div>
      {this.renderImg()}
      <Card floated="right">
        <Header floated="right">{this.props.thisUser.name}</Header>
        <Card.Meta>{this.props.thisUser.age} years old</Card.Meta>
        <PanicButton />
        {this.renderEditButton}
      </Card>
      </div>
    )
    }
  }


const mapStateToProps = (state) => {
  return {user: state.users.user}
}

export default withRouter(connect(mapStateToProps, null)(ProfileCard));
