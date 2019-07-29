import React, { Component } from 'react';
import PanicButton from './PanicButton'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { findUser } from '../actions/functions'
// import defaultImg from './defaultImages/defaultImg.png'


// renderImg = () => {
  //     if (this.props.user.img_url === null){
    //         return <img src={defaultImg} alt="profile pic here" />
    //         }
    //       else {
      //           return <img src={this.props.user.img_url} alt="profile pic here" />
      //         }
      //       }

class Villager extends Component{


  render(){
    console.log("we are in the villager card")
    let thisUser = this.props.villager
    return(
        <Link as='a' to={`/villager-profile/${this.props.villager.id}`}>
        <div className="villager-card">
          <img src={thisUser.img_url} alt="Villager img here"/>
          <h3>{thisUser.name}</h3>
          <h3>{thisUser.age}</h3>
          <PanicButton lost={thisUser.lost} />
        </div>
        </Link>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.villagers.villager}
}

const mapDispatchToProps = {
  findUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Villager));
