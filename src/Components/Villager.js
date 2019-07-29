import React, { Component } from 'react';
import PanicButton from './PanicButton'
import { withRouter, Link } from 'react-router-dom'
import defaultImg from './defaultImages/defaultImg.png'



class Villager extends Component{
  renderImg = () => {
        if (this.props.villager.img === null || this.props.villager.img === "" || this.props.villager.img === undefined){
          return <img src={defaultImg} alt="profile pic here" />
          }
        else {
          return <img src={this.props.villager.img} alt="profile pic here" />
          }
  }


  render(){
    console.log("villager image: ", this.props.villager.img_url)
    let thisUser = this.props.villager
    return(
        <Link as='a' to={`/villager-profile/${this.props.villager.id}`}>
        <div className="villager-card">
          {this.renderImg()}
          <h3>{thisUser.name}</h3>
          <h3>{thisUser.age}</h3>
          <PanicButton lost={thisUser.lost} />
        </div>
        </Link>
    )
  }
}




export default withRouter(Villager);
