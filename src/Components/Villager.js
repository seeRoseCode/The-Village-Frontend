import React, { Component } from 'react';
import PanicButton from './PanicButton'
import { withRouter, Link } from 'react-router-dom'
import defaultImg from './images/defaultImg.png'
import { Button, Card, Image, Header, Reveal} from 'semantic-ui-react'



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

      <Card className="villager-card">
      {this.renderImg()}

      <Header>{thisUser.name}</Header>
      <Card.Meta>{thisUser.age} years old</Card.Meta>
      <Card.Content>
      <PanicButton thisUser={thisUser} />
      <Button as='a' href={`/villager-profile/${thisUser.id}`} floated="left">VIEW</Button>
      </Card.Content>
      </Card>



    )
  }
}




export default withRouter(Villager);

//CARD RENDERING!



// <Reveal animated='small fade'>
// <Reveal.Content visible>
// {this.renderImg()}
// </Reveal.Content>
// <Reveal.Content hidden>
// <Card>
// <Card.Content>
// <Header>{thisUser.name}</Header>
// <Card.Meta>{thisUser.age} years old</Card.Meta>
// <Card.Content>
// <PanicButton thisUser={thisUser} />
// <Button as='a' href={`/villager-profile/${thisUser.id}`} floated="left">VIEW</Button>
// </Card.Content>
// </Card.Content>
// </Card>
// </Reveal.Content>
// </Reveal>
// )
