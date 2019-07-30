import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react'
import { updateUserStatus, updateVillagerStatus } from '../actions/functions'
import { connect } from 'react-redux'


class PanicButton extends Component{

  state={
    status: "safe",
    mainUser: false,
    open: false,
    incidentDescription: "",
    modalStatus: false
  }

  toggleModal = () => {
    this.setState({open: !this.state.open})
    console.log("this is all the data we have right now", this.state)
    this.setDispatch()
  }//WORKING

  handleChange = (e) => {
    this.setState({incidentDescription: e.target.value})
  }//WORKING

  handleClick = (e, value) => {
    e.preventDefault()
    this.setState({status: value.value})
    this.setUserData()
  }//WORKING

  setDispatch = () => {
    this.state.mainUser ? this.props.updateUserStatus(this.props.thisUser.id, this.state.status) : this.props.updateVillagerStatus(this.props.thisUser.id, this.state.status)
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
    if (this.props.thisUser.status === "safe"){
      return "PANIC"
    }
    else if (this.props.thisUser.status === "lost"){
      return "SAFE"
    }
    else if (this.props.thisUser.status === "hurt"){
      return "SAFE"
    }
  }//WORKING

  render(){
    return(
      <Modal open={this.state.open} size="mini" trigger={<Button floated="right" centered={false} onClick={this.toggleModal}>{this.buttonStatus()}</Button>}>
        <Modal.Header>
          What is {this.props.thisUser.name.split(' ')[0]}'s status?
          </Modal.Header>
        <Modal.Content>
        <Form>
          <Form.Group>
            <Form.TextArea type="text" onChange={this.handleChange} placeholder="Oh no! What happened?!" floated="right"/>
            <Form.Radio size="large" label='LOST' value="lost" checked={this.state.status === 'lost'} onChange={this.handleClick}/>
            <Form.Radio size="large" label='HURT' value="hurt" checked={this.state.status === 'hurt'} onChange={this.handleClick}/>
          </Form.Group>
        </Form>
        <Button floated="right" onClick={this.toggleModal}>confirm</Button>
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



// <Button className="panic" floated="right" onClick={this.handleClick}>{this.buttonStatus()}</Button>
