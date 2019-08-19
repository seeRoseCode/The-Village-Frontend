import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import defaultImg from './images/defaultImg.png'
import PanicButton from './PanicButton'
import { Container, Button, Header, Divider, Item } from 'semantic-ui-react'
import '../stylesheets/App.css'
const div = document.querySelector(".profile-card")


class ProfileCard extends Component {

  componentDidMount(){
    let villagerCard = document.querySelector(`.profile-card`)
    this.toggleFlashing(this.props.user.status, villagerCard)
  }

  handleEdit = () => {
    this.props.history.push('/edit-profile')
  }//WORKING

  renderImg = () => {
    if (this.props.thisUser.img_url === null || this.props.thisUser.img_url === "" || this.props.thisUser.img_url === undefined){
      return <Item.Image className="profile-image" src={defaultImg} size="medium" alt="profile pic here" circular/>
      }
    else {
      return <Item.Image className="profile-image" src={this.props.thisUser.img_url} size="medium" alt="profile pic here" circular/>
    }
  }//INFESTED(default img not consistently rendering for new users)

  renderEditButton = () => {
    if (this.props.user === this.props.thisUser){
      return <Button onClick={this.handleEdit}>EDIT</Button>
    }
  }//WORKING

  toggleFlashing = (status, div) => {
    if (div){
      if (status === "safe")
        div.classList.remove("flashing")
      else if (localStorage.token)
        div.classList.add("flashing")
    }
  }//INFESTED(pessimistically rendering)


  render(){//OPEN RENDER
    if (Object.keys(this.props.user).length > 0) {//OPEN IF

      return(//OPEN RETURN
        <Container className="profile-card">

            {this.renderImg()}

            <Header as="h1" >{this.props.thisUser.name}</Header>
            <Header as="h2">{this.props.thisUser.age} years old</Header>
            <Divider />
            <div className="buttons">
            <PanicButton thisUser={this.props.user} />
            {this.renderEditButton()}
            <br />
            </div>


        </Container>
      )//CLOSE RETURN

    }//CLOSE IF
    else
      return null
    }//CLOSE RENDER

}//CLOSE COMPONENT

const mapStateToProps = (state) => {
  return {user: state.users.user}
}

export default withRouter(connect(mapStateToProps, null)(ProfileCard));
