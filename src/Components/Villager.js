import React, { Component } from 'react';
import PanicButton from './PanicButton'
import { withRouter } from 'react-router-dom'
import defaultImg from './images/defaultImg.png'
import { Card, Image, Header } from 'semantic-ui-react'
import '../stylesheets/panic.css'
import '../stylesheets/App.css'




class Villager extends Component{

  componentDidMount(){
    let villagerCard = document.querySelector(`.villager-card${this.props.villager.id}`)
    this.toggleFlashing(this.props.villager.status, villagerCard)
  }

  // componentWillUpdate(newProps, newState){
  //   console.log("newProps: ", newProps)
  //   console.log("newState: ", newState)
  // }
  //
  // componentDidUpdate(prevProps, prevState){
  //   console.log("preProps", prevProps)
  //   console.log("prevState", prevState)
  // }

  renderImg = () => {
        if (this.props.villager.img === null || this.props.villager.img === "" || this.props.villager.img === undefined){
          return <Image className="card-image" floated='right' size="small" src={defaultImg} wrapped ui={false} />
          }
        else {
          return <Image className="card-image" floated='right' size="small" src={this.props.villager.img} wrapped ui={false}/>
          }
  }

  toggleFlashing = (status, card) => {
    if (card){
      if (status === "safe")
        card.classList.remove("flashing")
      else if (localStorage.token)
        card.classList.add("flashing")
    }
  }//INFESTED

  render(){
    let thisUser = this.props.villager
    return(
      <div className="indiv">
        <Card className={`villager-card${thisUser.id}`} >
          {this.renderImg()}
          <Header>{thisUser.username.charAt(0).toUpperCase() + thisUser.username.slice(1)}</Header>
          <Card.Meta>{thisUser.age} years old</Card.Meta>
          <Card.Content>
            <PanicButton thisUser={thisUser} />
          </Card.Content>
        </Card>
      </div>
    )
  }

}




export default withRouter(Villager);
