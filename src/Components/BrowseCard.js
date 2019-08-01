import React, { Component } from 'react';
import PanicButton from './PanicButton'
import { withRouter, Link } from 'react-router-dom'
import defaultImg from './images/defaultImg.png'
import { Button, Card, Image, Header, Reveal} from 'semantic-ui-react'



class BrowseCard extends Component{
  renderImg = () => {
        if (this.props.villager.img_url === null || this.props.villager.img_url === "" || this.props.villager.img_url === undefined){
          return <Image className="card-image" floated='right' size="small" src={defaultImg} wrapped ui={false} />
          }
        else {
          return <Image className="card-image" floated='right' size="small" src={this.props.villager.img_url} wrapped ui={false}/>
          }
  }


  render(){
    console.log("who are you dangit?!", this.props.villager)
    let thisUser = this.props.villager
    return(
      <Card >
      {this.renderImg()}

      <Header>{thisUser.name}</Header>
      <Card.Meta>{thisUser.age} years old</Card.Meta>
      <Card.Content>

      <Button as='a' href={`/villager-profile/${thisUser.id}`} centered={true}>ADD VILLAGER</Button>

      </Card.Content>
      </Card>


    )
  }
}




export default withRouter(BrowseCard);
