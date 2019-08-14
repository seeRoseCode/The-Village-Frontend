import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react'
import { updateUserStatus, updateVillagerStatus } from '../actions/functions'
import { connect } from 'react-redux'
import '../stylesheets/panic-button.css'

class PanicButton extends Component{

  state={
    status: "safe",
    mainUser: false,
    open: false,
    incidentDescription: "",
    modalStatus: false
  }

  handleSubmit = (e) => {
    let div = ""
    if (this.state.mainUser === true){
      div = document.querySelector(".profile-card")
    }
    else
      div = document.querySelector(`.${this.props.thisUser.id}`)

    this.toggleFlashing(div)
    this.setDispatch(this.props.thisUser.id, this.state.status)
    this.toggleModal()
  }//INFESTED

  toggleFlashing = (div) => {
    // console.log("this is the div: ", div)
    // debugger
    // if (this.state.status === "safe")
    //   div.classList.remove("flashing")
    // else if (localStorage.jwt && (this.state.status !== "safe") && (div.classList.includes("flashing") === false))
    //   div.classList.add("flashing")

    if (div.className.includes("flashing")) {
        div.classList.remove("flashing")
      }
    else
      div.classList.add("flashing")
  }//INFESTED

  toggleModal = () => {
    this.setState({open: !this.state.open})
  }//WORKING

  handleChange = (e) => {
    this.setState({incidentDescription: e.target.value})
  }//WORKING

  handleClick = (e, value) => {
    e.preventDefault()
    this.setState({status: value.value})
    this.setUserData()
  }//WORKING

  setDispatch = (id, status) => {
    this.state.mainUser ? this.props.updateUserStatus(id, status) : this.props.updateVillagerStatus(id, status)
  }

  setUserData = () => {
      if (this.props.thisUser.id === this.props.user.id) {
        console.log("main user: it's a match")
        this.setState({mainUser: true})
      }
      else if (this.props.thisUser.id === this.props.villager.id){
        console.log("villager: it's a match")
        this.setState({mainUser: false})
      }
      else {
        console.log("not on villager page: ", this.props.thisUser)
        this.setState({ mainUser: false})
      }
    }//WORKING


  buttonStatus = () => {
    if (this.state.status === "safe"){
      return "PANIC"
    }
    else if (this.state.status === "lost"){
      return "SAFE"
    }
    else if (this.state.status === "hurt"){
      return "SAFE"
    }
  }//WORKING

  render(){
    console.log("who are you?", this.props.thisUser)
    return(
      <Modal open={this.state.open} size="mini" trigger={<Button  centered={true} onClick={this.toggleModal}>{this.buttonStatus()}</Button>}>
        <Modal.Header>
          What is {this.props.thisUser.name.split(' ')[0]}'s status?
          </Modal.Header>
        <Modal.Content>
        <Form>
        <Form.TextArea type="text" onChange={this.handleChange} placeholder="Oh no! What happened?!" floated="right"/>
          <Form.Group>
            <Form.Radio size="large" label='LOST' value="lost" checked={this.state.status === 'lost'} onChange={this.handleClick}/>
            <Form.Radio size="large" label='HURT' value="hurt" checked={this.state.status === 'hurt'} onChange={this.handleClick}/>
            <Form.Radio size="large" label='SAFE' value="safe" checked={this.state.status === 'safe'} onChange={this.handleClick}/>
            <Button className="button" floated="right" color="teal" onClick={this.handleSubmit}>confirm</Button>
          </Form.Group>
        </Form>
        </Modal.Content>
      </Modal>
    )
  }
}



const mapStateToProps = (state) => {
  return { user: state.users.user, villager: state.villagers.villager}
}


const mapDispatchToProps = {
  updateVillagerStatus, updateUserStatus
}



export default connect(mapStateToProps, mapDispatchToProps)(PanicButton);
