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

      <div className="card">
          <div className="image">
            {this.renderImg()}
          </div>
          <div className="content">
            <div className="header">
              <h3>{thisUser.name}</h3>
            </div>
            <div className="meta">
              <span className="date">
                {thisUser.age}
              </span>
            </div>
          </div>
          <div className="extra content">
            <span class="floated right">
              <PanicButton lost={thisUser.lost} />
            </span>
            <span class="floated left">
              <button as='a' to={`/villager-profile/${thisUser.id}`}>
              VIEW
              </button>
            </span>
          </div>
      </div>
    )
  }
}




export default withRouter(Villager);
