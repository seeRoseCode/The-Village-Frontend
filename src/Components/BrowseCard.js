import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToVillage } from '../actions/functions'
import { withRouter} from 'react-router-dom'
import defaultImg from './images/defaultImg.png'
import { Button, Card, Image, Header} from 'semantic-ui-react'



class BrowseCard extends Component{


  renderImg = () => {
        if (this.props.villager.img_url === null || this.props.villager.img_url === "" || this.props.villager.img_url === undefined){
          return <Image className="card-image" floated='right' size="small" src={defaultImg} wrapped ui={false} />
          }
        else {
          return <Image className="card-image" floated='right' size="small" src={this.props.villager.img_url} wrapped ui={false}/>
          }
  }

  addVillager = (e) => {
    console.log("this is e: ", e.target.innerText)
    this.props.addToVillage(this.props.user.id, this.props.villager.id)
    e.target.innerText = "ADDED"
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

      <Button onClick={this.addVillager} centered={true}>{this.props.user.village.includes(thisUser)? "ADDED" : "ADD TO VILLAGE"}</Button>

      </Card.Content>
      </Card>


    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.users.user}
}

const mapDispatchToProps = {
  addToVillage
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BrowseCard));
