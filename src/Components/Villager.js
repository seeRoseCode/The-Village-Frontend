import React, { Component } from 'react';
import PanicButton from './PanicButton'
import { withRouter } from 'react-router-dom'
import defaultImg from './images/defaultImg.png'
import { Card, Image, Header } from 'semantic-ui-react'



class Villager extends Component{
  renderImg = () => {
        if (this.props.villager.img === null || this.props.villager.img === "" || this.props.villager.img === undefined){
          return <Image className="card-image" floated='right' size="small" src={defaultImg} wrapped ui={false} />
          }
        else {
          return <Image className="card-image" floated='right' size="small" src={this.props.villager.img} wrapped ui={false}/>
          }
  }


  render(){
    let thisUser = this.props.villager
    return(
      <div className={`villager-card ${thisUser.id}`} >
        <Card>
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
