import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import defaultImg from './images/defaultImg.png'
import PanicButton from './PanicButton'
import { Grid, Image, Card, Button, Header, Divider, Item } from 'semantic-ui-react'
// import {Redirect} from 'react-router-dom'
const div = document.querySelector(".profile-card")


class ProfileCard extends Component {


  handleEdit = () => {
    this.props.history.push('/edit-profile')
  }//WORKING

  renderImg = () => {
    if (this.props.thisUser.img_url === null || this.props.thisUser.img_url === "" || this.props.thisUser.img_url === undefined){
      return <Item.Image className="profile-image" src={defaultImg} size="big" alt="profile pic here" circular/>
      }
    else {
      return <Item.Image className="profile-image" src={this.props.thisUser.img_url} size="big" alt="profile pic here" />
    }
  }//WORKING

  renderEditButton = () => {
    if (this.props.user === this.props.thisUser){
      return <Button onClick={this.handleEdit}>EDIT</Button>
    }
  }//WORKING


  render(){//OPEN RENDER
    if (Object.keys(this.props.user).length > 0) {//OPEN IF

    return(//OPEN RETURN
      <Grid className="profile-card">
        <Grid.Row columns={2}>

          <Grid.Column>
            {this.renderImg()}
          </Grid.Column>

          <Grid.Column>
            <Header as="h1" >{this.props.thisUser.name}</Header>
            <Header as="h2">{this.props.thisUser.age} years old</Header>
            <PanicButton thisUser={this.props.user} />
            {this.renderEditButton()}
            </Grid.Column>
          


        </Grid.Row>
      </Grid>
    )//CLOSE RETURN
    }//CLOSE IF

    else
      return null
    }
}//CLOSE RENDER

const mapStateToProps = (state) => {
  return {user: state.users.user}
}

export default withRouter(connect(mapStateToProps, null)(ProfileCard));
