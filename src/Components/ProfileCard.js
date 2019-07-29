import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import defaultImg from './defaultImages/defaultImg.png'
import PanicButton from './PanicButton'
// import {Redirect} from 'react-router-dom'



class ProfileCard extends Component {

  handleEdit = () => {
    this.props.history.push('/edit-profile')
  }

  renderImg = () => {
    if (this.props.thisUser.img_url === null || this.props.thisUser.img_url === "" || this.props.thisUser.img_url === undefined){
      return <img src={defaultImg} alt="profile pic here" />
      }
    else {
      return <img src={this.props.thisUser.img_url} alt="profile pic here" />
    }
  }

  renderEditButton = () => {
    console.log("the logged in user: ", this.props.user)
    if (this.props.user === this.props.thisUser){
      return <button onClick={this.handleEdit}>edit</button>
    }
  }

  render(){
    return(
      <div>
        {this.renderImg()}
        <h3>{this.props.thisUser.name}</h3>
        <h3>{this.props.thisUser.age} years old</h3>
        <PanicButton />
        {this.renderEditButton}
      </div>
    )
    }
  }


const mapStateToProps = (state) => {
  return {user: state.users.user}
}

export default withRouter(connect(mapStateToProps, null)(ProfileCard));
